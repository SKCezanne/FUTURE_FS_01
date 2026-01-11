@echo off
echo Starting React app...

REM Go to the folder where this .bat file is
cd /d "%~dp0"

REM Go into the React app folder
cd portfolio

REM Start the React development server
npm start

pause
