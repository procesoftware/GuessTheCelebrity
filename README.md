# GuessTheCelebrity
GuessTheCelebrity

# How to configure for debugging
## Debugging for iOS
        {
            "name": "Debug iOS",
            "program": "${workspaceRoot}/.vscode/launchReactNative.js",
            "type": "reactnative",
            "request": "launch",
            "platform": "ios",
            "sourceMaps": true,
            "outDir": "${workspaceRoot}/.vscode/.react"
        },

# Configure app for windows - android environment
* Set the location in local.properties sdk.dir=C:\\Users\\admin\\AppData\\Local\\Android\\sdk
* run the licence configuration
   go to directory : C:\Users\admin\AppData\Local\Android\sdk\tools\bin
   .\sdkmanager.bat --licenses
* start the simulator from android sdk :
       https://developer.android.com/studio/run/managing-avds.html
* android : ctrl+m to refresh android 

# run app on android phone
1. usb plugin phone
2. adb devices
   to list the devices
3.  react-native run-android

https://facebook.github.io/react-native/docs/running-on-device   
