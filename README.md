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


#How to generate signed APK
- generate key store :
=>keytool -genkey -v -keystore appDeployTest.keystore -alias appDeployTest -keyalg RSA -keysize 2048 -validity 10000
- put the .store file in android folder.
- set gradle.properties under /android
    MYAPP_RELEASE_STORE_FILE=appDeployTest.keystore
    MYAPP_RELEASE_KEY_ALIAS=appDeployTest
    MYAPP_RELEASE_STORE_PASSWORD=******
    MYAPP_RELEASE_KEY_PASSWORD=******
- go to /android directory :
=> ./gradlew assembleRelease 
- for clean build directory if needed :
=> ./gradlew clean