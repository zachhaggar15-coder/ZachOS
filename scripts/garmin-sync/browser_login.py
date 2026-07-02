"""Create Garmin token cache through a normal browser login.

Garmin can block non-browser SSO and automation-controlled Chromium sessions.
This helper opens your normal default browser, captures the CAS service ticket
through a temporary localhost callback, then asks the installed garminconnect
client to exchange that ticket for the garmin_tokens.json format used by
sync.py.
"""

from __future__ import annotations

import argparse
import os
import queue
import socket
import sys
import threading
import webbrowser
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
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


def extract_ticket(value: str) -> str | None:
    if value.startswith("ST-"):
        return value

    parsed = urlparse(value)
    ticket = parse_qs(parsed.query).get("ticket", [None])[0]
    return ticket if ticket and ticket.startswith("ST-") else None


def signin_url(service_url: str) -> str:
    return f"{SIGNIN_URL}?{urlencode({'clientId': PORTAL_CLIENT_ID, 'service': service_url})}"


def resolve_output(raw_output: str | None) -> Path:
    output = Path(raw_output or os.getenv("GARMIN_TOKEN_DIR") or str(DEFAULT_TOKEN_DIR))
    return output if output.is_absolute() else REPO_ROOT / output


def free_local_port() -> int:
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
        sock.bind(("127.0.0.1", 0))
        return int(sock.getsockname()[1])


def capture_with_default_browser(timeout_seconds: int) -> tuple[str, str]:
    port = free_local_port()
    service_url = f"http://127.0.0.1:{port}/garmin-callback"
    ticket_queue: queue.Queue[str] = queue.Queue(maxsize=1)

    class CallbackHandler(BaseHTTPRequestHandler):
        def log_message(self, *_args: object) -> None:
            return

        def do_GET(self) -> None:  # noqa: N802 - stdlib callback name
            ticket = extract_ticket(self.path)
            if ticket:
                try:
                    ticket_queue.put_nowait(ticket)
                except queue.Full:
                    pass
                self.send_response(200)
                self.send_header("Content-Type", "text/html; charset=utf-8")
                self.end_headers()
                self.wfile.write(
                    b"""
<!doctype html>
<html>
  <head><title>Zach OS Garmin Login</title></head>
  <body style="font-family: system-ui; padding: 40px;">
    <h1>Garmin login captured</h1>
    <p>You can close this tab and return to PowerShell.</p>
  </body>
</html>
"""
                )
                return

            self.send_response(400)
            self.send_header("Content-Type", "text/plain; charset=utf-8")
            self.end_headers()
            self.wfile.write(b"No Garmin ticket was present in this callback URL.")

    server = ThreadingHTTPServer(("127.0.0.1", port), CallbackHandler)
    server_thread = threading.Thread(target=server.serve_forever, daemon=True)
    server_thread.start()

    url = signin_url(service_url)
    print("Opening Garmin in your normal default browser.")
    print("If you are already on a Cloudflare block page, close that old Playwright window first.")
    print("Complete Garmin login in the browser. This terminal will continue after the redirect.")
    print(f"Waiting up to {timeout_seconds} seconds...")

    try:
        opened = webbrowser.open(url, new=1, autoraise=True)
        if not opened:
            print("Could not auto-open a browser. Copy this URL into Chrome or Edge:")
            print(url)
        ticket = ticket_queue.get(timeout=timeout_seconds)
    except queue.Empty:
        die(
            "Timed out waiting for Garmin to redirect back to Zach OS. Try again in "
            "your normal Chrome/Edge browser, or run login.ps1 -Manual and paste a "
            "Garmin ticket URL if you can capture one."
        )
    finally:
        server.shutdown()
        server.server_close()

    return ticket, service_url


def capture_manually(timeout_seconds: int) -> tuple[str, str]:
    url = signin_url(PORTAL_SERVICE_URL)
    print("Opening Garmin in your normal browser.")
    print("After login, if the address bar briefly contains ticket=ST-..., copy the full URL.")
    print("You can also paste just the ST-... ticket value.")
    webbrowser.open(url, new=1, autoraise=True)

    pasted = input(
        f"Paste the Garmin redirect URL or ST ticket within about {timeout_seconds} seconds: "
    ).strip()
    ticket = extract_ticket(pasted)
    if not ticket:
        die("That did not contain a Garmin ST ticket.")
    return ticket, PORTAL_SERVICE_URL


def save_tokens(ticket: str, service_url: str, output: Path, verify: bool) -> None:
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
    internal_client._establish_session(ticket, service_url=service_url)
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
    parser.add_argument("--timeout", default=300, type=int, help="Seconds to wait for browser login.")
    parser.add_argument("--manual", action="store_true", help="Open Garmin and ask you to paste an ST ticket URL manually.")
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

    ticket, service_url = (
        capture_manually(args.timeout)
        if args.manual
        else capture_with_default_browser(args.timeout)
    )
    save_tokens(ticket, service_url, resolve_output(args.output), args.verify)


if __name__ == "__main__":
    main()
