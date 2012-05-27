@echo off
pushd %~dp0
setlocal
call compass compile
endlocal
popd
if not "%1"=="/nopause" pause