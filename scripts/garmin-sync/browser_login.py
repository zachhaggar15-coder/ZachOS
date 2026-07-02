"""Create Garmin token cache through a real browser login.

Garmin can block non-browser SSO logins with 429 responses. This helper opens
Chromium with Playwright, lets you log in normally, captures the CAS service
ticket from Garmin's redirect, then asks the installed garminconnect client to
exchange that ticket for the same garmin_tokens.json format used by sync.py.
"""

from __future__ import annotations

import argparse
import os
import sys
import time
from pathlib import Path
from urllib.parse import parse_qs, urlencode, urlparse

try:
    from dotenv import load_dotenv
except ImportError:
    load_dotenv = None

REPO_ROOT = Path(__file__).resolve().parents[2]
DEFAULT_ENV_FILE = REPO_ROOT / ".env.garmin-sync"
DEFAULT_TOKEN_DIR = REPO_ROOT / ".garmin-tokens"
PORTAL_CLIENT_ID = "GarminConnect"
PORTAL_SERVICE_URL = "https://connect.garmin.com/app"
SIGNIN_URL = "https://sso.garmin.com/sso/signin"


def die(message: str) -> None:
    print(f"ERROR: {message}", file=sys.stderr)
    raise SystemExit(1)


def extract_ticket(url: str) -> str | None:
    parsed = urlparse(url)
    ticket = parse_qs(parsed.query).get("ticket", [None])[0]
    return ticket if ticket and ticket.startswith("ST-") else None


def signin_url() -> str:
    return f"{SIGNIN_URL}?{urlencode({'clientId': PORTAL_CLIENT_ID, 'service': PORTAL_SERVICE_URL})}"


def resolve_output(raw_output: str | None) -> Path:
    output = Path(raw_output or os.getenv("GARMIN_TOKEN_DIR") or str(DEFAULT_TOKEN_DIR))
    return output if output.is_absolute() else REPO_ROOT / output


def capture_service_ticket(timeout_seconds: int) -> str:
    try:
        from playwright.sync_api import sync_playwright
    except ImportError:
        die(
            "Missing Playwright. Run: powershell -ExecutionPolicy Bypass -File "
            "scripts\\garmin-sync\\setup.ps1"
        )

    ticket_holder: dict[str, str] = {}

    def remember(url: str) -> None:
        ticket = extract_ticket(url)
        if ticket and "ticket" not in ticket_holder:
            ticket_holder["ticket"] = ticket

    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(headless=False)
        context = browser.new_context()
        page = context.new_page()

        page.on("request", lambda request: remember(request.url))
        page.on("response", lambda response: remember(response.url))
        page.on("framenavigated", lambda frame: remember(frame.url))

        print("A Chromium window is opening. Log in to Garmin there.")
        print("This script will close the window automatically after it captures the Garmin ticket.")
        page.goto(signin_url(), wait_until="domcontentloaded")

        deadline = time.time() + timeout_seconds
        while time.time() < deadline and "ticket" not in ticket_holder:
            remember(page.url)
            page.wait_for_timeout(500)

        browser.close()

    ticket = ticket_holder.get("ticket")
    if not ticket:
        die(
            "Could not capture a Garmin service ticket. Run login.ps1 again, "
            "complete any MFA prompt in the browser, and wait until the browser closes itself."
        )

    return ticket


def save_tokens(ticket: str, output: Path, verify: bool) -> None:
    try:
        from garminconnect import Garmin
    except ImportError:
        die(
            "Missing garminconnect. Run: powershell -ExecutionPolicy Bypass -File "
            "scripts\\garmin-sync\\setup.ps1"
        )

    client = Garmin()
    internal_client = client.client

    if not hasattr(internal_client, "_establish_session"):
        die("This garminconnect version does not expose the ticket exchange method.")

    output.mkdir(parents=True, exist_ok=True)
    internal_client._establish_session(ticket, service_url=PORTAL_SERVICE_URL)
    if not getattr(internal_client, "di_refresh_token", None):
        die(
            "Garmin accepted the browser login but did not return a reusable "
            "refresh token. Run login.ps1 again; if it repeats, update the "
            "garminconnect package with setup.ps1 and try once more."
        )
    internal_client.dump(str(output))

    if verify:
        verifier = Garmin()
        verifier.login(str(output))
        verifier.client.dump(str(output))
        profile = verifier.get_user_profile()
        name = profile.get("displayName") or profile.get("fullName") or "Garmin account"
        print(f"Verified tokens for {name}.")

    token_file = output / "garmin_tokens.json"
    print(f"Saved Garmin tokens to: {token_file}")
    print("You can now run: powershell -ExecutionPolicy Bypass -File scripts\\garmin-sync\\run.ps1 -Days 14")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Create Garmin tokens through browser login.")
    parser.add_argument("--env", default=str(DEFAULT_ENV_FILE), help="Path to .env.garmin-sync.")
    parser.add_argument("--output", default=None, help="Token output directory. Defaults to GARMIN_TOKEN_DIR or .garmin-tokens.")
    parser.add_argument("--timeout", default=180, type=int, help="Seconds to wait for browser login.")
    parser.add_argument("--verify", action="store_true", help="Load saved tokens and verify a Garmin profile call.")
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    env_file = Path(args.env)

    if env_file.exists():
        if load_dotenv is None:
            die(
                "Missing python-dotenv. Run: powershell -ExecutionPolicy Bypass -File "
                "scripts\\garmin-sync\\setup.ps1"
            )
        load_dotenv(env_file)

    ticket = capture_service_ticket(args.timeout)
    save_tokens(ticket, resolve_output(args.output), args.verify)


if __name__ == "__main__":
    main()
