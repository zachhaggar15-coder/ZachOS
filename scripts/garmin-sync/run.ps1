param(
  [int] $Days = 14,
  [switch] $DryRun
)

$ErrorActionPreference = "Stop"

$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$RepoRoot = Resolve-Path (Join-Path $ScriptDir "..\..")
$VenvPython = Join-Path $RepoRoot ".venv-garmin\Scripts\python.exe"
$EnvFile = Join-Path $RepoRoot ".env.garmin-sync"

if (-not (Test-Path $VenvPython)) {
  throw "Missing .venv-garmin. Run: powershell -ExecutionPolicy Bypass -File scripts\garmin-sync\setup.ps1"
}

if (-not (Test-Path $EnvFile)) {
  throw "Missing .env.garmin-sync. Run setup, then fill in the copied env file."
}

Push-Location $RepoRoot
try {
  $arguments = @("scripts\garmin-sync\sync.py", "--days", "$Days")
  if ($DryRun) {
    $arguments += "--dry-run"
  }

  & $VenvPython @arguments
  exit $LASTEXITCODE
}
finally {
  Pop-Location
}
