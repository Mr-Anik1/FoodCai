# Project Setup

- Create React Project

```
npm create vite@latest food-cai -- --template react
```

- Go to the project

```
cd food-cai
```

- Install project dependencies

```
npm install
```

- **Port Setup:** Inside **_vite.config.js_**, import defineConfig from vite and export a configuration object

```
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Replace 3000 with your desired port number
  },
});
```

- Run the project

```
npm run dev
```

### React Router DOM Setup

- Install react-router-dom as a regular dependency

```
npm i react-router-dom

```

### Redux Setup

- Install redux toolkit as a regular dependency

```
npm i @reduxjs/toolkit
```

- Install redux as a regular dependency

```
npm i react-redux
```

## Firebase Setup

- Enter `https://firebase.google.com/` in the browser.
- Click `go to console`
- Create a project, after creating a project it automaticly go to the project overview.
- Inside the project overview click </> (web)
- Register app

  - App nickname
  - check "Also set up Firebase Hosting for this app."
  - Click Register app

- Add Firebase SDK

```
npm install firebase
```

- Create firebase.jsx file in the utils directory and add below lines in it

```
// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBd67_0Kgo49H0On1N4FmgxTHWd8Yx18GY",
  authDomain: "foodcai-c83e9.firebaseapp.com",
  projectId: "foodcai-c83e9",
  storageBucket: "foodcai-c83e9.appspot.com",
  messagingSenderId: "756684295285",
  appId: "1:756684295285:web:0c3d4e0fa99a441b92fc3c",
  measurementId: "G-Y15GD00PN4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

```

- Install Firebase CLI

```
npm install -g firebase-tools
```

- Go to the app console and click authentication
  - Get Started
  - Click Email/Password
  - Enable Email/Password
  - Click Save
- Deploy to Firebase Hosting (Later)

  - First Step

  ```
  firebase login
  ```

  - Second Step

  ```
  firebase init
  ```

  - After Firebase init:

    - Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
    - Use an existing project
    - foodcai-c83e9 (FoodCai)
    - What do you want to use as your public directory? (public) ==> dist
    - Configure as a single-page app (rewrite all urls to /index.html)? (y/N) ==> N
    - Set up automatic builds and deploys with GitHub? (y/N) ==> N
    - It will create firebase.json and .firebaserc file.

  - Third Step (When you're ready, deploy your web app)

  ```
  firebase deploy
  ```

### It must be remembered that before you deploy your project, you have to build your project with this command: `npm run build`.
