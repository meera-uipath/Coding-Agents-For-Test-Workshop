@echo off
cd /d "%~dp0"
echo Starting MkDocs server for Coding Agents for Test Workshop Guide...

if not exist ".venv\Scripts\python.exe" (
    echo First run: creating virtual environment and installing mkdocs-material...
    python -m venv .venv || (echo Python not found. Install Python 3 and try again. & pause & exit /b 1)
    .venv\Scripts\python.exe -m pip install --quiet mkdocs-material || (echo Install failed. & pause & exit /b 1)
)

start "" http://127.0.0.1:8000
.venv\Scripts\python.exe -m mkdocs serve --dev-addr 127.0.0.1:8000
pause
