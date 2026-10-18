@echo off 
title FWW Server 
cd /d "%%~dp0" 
start "" http://localhost:5173 
npm run dev 
pause
