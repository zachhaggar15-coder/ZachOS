param(
  [string] $Output = ".garmin-tokens",
  [int] $Timeout = 300,
  [switch] $Manual
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
  $arguments = @(
    "scripts\garmin-sync\browser_login.py",
    "--output",
    $Output,
    "--timeout",
    "$Timeout",
    "--verify"
  )

  if ($Manual) {
    $arguments += "--manual"
  }

  & $VenvPython @arguments
  exit $LASTEXITCODE
}
finally {
  Pop-Location
}
