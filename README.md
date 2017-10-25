# Mobile Flash Cards
24th Oct, 2017 <br/>
This is a Mobile Flash Cards application, which runs on Android emulator.  I have not tested on iOS emulator. LocalNotification may also require slightly different setup for iOS. 

I built this app as a part of the final assignment for the React Nanodegree by Udacity.

Instead of using Create-react-native-app and Expo, which I had issues creating a stable development environment in my Windows PC and out-dated MAC, I used React-native-CLI.
React-native-CLI with Android Studio Virtual Device(emulator) allowed me to develop the app more reliably.

### How to install
In your terminal:
1. clone this repo in your projects folder.
```
git clone https://github.com/nfabacus/MobileFlashCards.git
```
2. Go into the newly created folder. 
3. Install all the dependencies.
```
yarn install
```

### How to run the app
1. Make sure you have Android emulator is runnng.
2. In the repo's root folder, run the app using the below command.
```
react-native run-android
```

### references
https://facebook.github.io/react-native/
https://www.udemy.com/the-complete-react-native-and-redux-course/learn/v4/overview
https://www.youtube.com/watch?v=TQmudJLhPx8
https://github.com/zo0r/react-native-push-notification