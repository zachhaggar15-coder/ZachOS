param()

$ErrorActionPreference = "Stop"

$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$RepoRoot = Resolve-Path (Join-Path $ScriptDir "..\..")
$VenvPython = Join-Path $RepoRoot ".venv-garmin\Scripts\python.exe"
$Requirements = Join-Path $ScriptDir "requirements.txt"
$EnvExample = Join-Path $ScriptDir "env.example"
$EnvTarget = Join-Path $RepoRoot ".env.garmin-sync"

function Get-PythonCommand {
  $py = Get-Command py -ErrorAction SilentlyContinue
  if ($py) {
    return @("py", "-3")
  }

  $python = Get-Command python -ErrorAction SilentlyContinue
  if ($python) {
    return @("python")
  }

  $python3 = Get-Command python3 -ErrorAction SilentlyContinue
  if ($python3) {
    return @("python3")
  }

  throw "Python was not found. Install Python 3.12+ from https://www.python.org/downloads/windows/ and tick 'Add python.exe to PATH'."
}

Push-Location $RepoRoot
try {
  if (-not (Test-Path $VenvPython)) {
    $pythonCommand = @(Get-PythonCommand)
    $pythonExe = $pythonCommand[0]
    $pythonArgs = @()
    if ($pythonCommand.Length -gt 1) {
      $pythonArgs = $pythonCommand[1..($pythonCommand.Length - 1)]
    }
    & $pythonExe @pythonArgs -m venv .venv-garmin
  }

  & $VenvPython -m pip install --upgrade pip
  & $VenvPython -m pip install -r $Requirements

  if (-not (Test-Path $EnvTarget)) {
    Copy-Item $EnvExample $EnvTarget
    Write-Host "Created .env.garmin-sync. Fill it in before running the sync."
  }
  else {
    Write-Host ".env.garmin-sync already exists, leaving it unchanged."
  }

  Write-Host ""
  Write-Host "Setup complete. Next run:"
  Write-Host "powershell -ExecutionPolicy Bypass -File scripts\garmin-sync\run.ps1 -Days 14"
}
finally {
  Pop-Location
}
