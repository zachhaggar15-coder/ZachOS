param(
  [string] $Output = ".garmin-tokens"
)

$ErrorActionPreference = "Stop"

$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$RepoRoot = Resolve-Path (Join-Path $ScriptDir "..\..")
$VenvPython = Join-Path $RepoRoot ".venv-garmin\Scripts\python.exe"

if (-not (Test-Path $VenvPython)) {
  throw "Missing .venv-garmin. Run: powershell -ExecutionPolicy Bypass -File scripts\garmin-sync\setup.ps1"
}

Push-Location $RepoRoot
try {
  & $VenvPython "scripts\garmin-sync\browser_login.py" --output $Output --verify
  exit $LASTEXITCODE
}
finally {
  Pop-Location
}
