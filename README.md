
Notes
---------------------
ffmpegsumo.dll is custom build, and is not the one included with node webkit. The default driver does not support .mp4 video.  Do not replace this file updates from node webkit.


Dependencies
---------------------
https://github.com/nwjs/nw.js?hc_location=ufi

Windows only, use parallels on OSX:
http://wixtoolset.org/



Creating the installer
----------------------
Create a zip file with the contents of the /app folder

Rename the zip file app.nw

Move app.nw to /_build

```
#!/bin/bash
zip app.nw app
mv app.nw _build/
```

Run this command from the solution directory

```
cp _webkit\nw.exe+_build\app.nw _build\redjade.exe
```

build the project

you will find the installer located in the /bin folder

Signing with the certificate
----------------------------
open the "developer command prompt" for visual studio and cd into the project directory

run this 
 ```signtool sign /debug /f code-signing-cert/cert.pfx /p 99giantnakedbabies /tr http://tsa.starfieldtech.com /td SHA256 bin/Release/Installer.msi```
