Creating the installer
----------------------
﻿Create a zip file with the contents of the "kiosk-installer/app" folder
Rename the zip file app.nw
Move app.nw to "kiosk-installer/_build"

Run this command from the solution directory
     copy /b _webkit\nw.exe+_build\app.nw _build\app.exe

build the project

you will find the installer located in the /bin folder

Signing with the certificate
----------------------------
open the "developer command prompt" for visual studio