#FIREBASE PROJECT WITH EXPRESS SERVER

##Install npm i dotenv  with out -D flag which is mean for --sav-dev mode



To set up environment variables in a Firebase project with an Express server, you can follow these steps:

1. Create a  `.env`  file in the root directory of your project. This file will store your environment variables. Make sure to add this file to your  `.gitignore`  file to avoid exposing sensitive information.

2. Inside the  `.env`  file, define your environment variables in the following format:
FIREBASE_API_KEY=your_firebase_api_key
   FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   FIREBASE_DATABASE_URL=your_firebase_database_url
3. Install the  `dotenv`  package in your project by running the following command:
```js
npm install dotenv
```
4. In your Express server file (e.g.,  `server.js` ), require the  `dotenv`  package and load the environment variables from the  `.env`  file:
```js
require('dotenv').config();
```
5. Access the environment variables in your Firebase configuration within the Express server file:
```js
const firebaseConfig = {
       apiKey: process.env.FIREBASE_API_KEY,
       authDomain: process.env.FIREBASE_AUTH_DOMAIN,
       databaseURL: process.env.FIREBASE_DATABASE_URL,
       // Add other Firebase configuration properties here
   };
```
6. Use the  `firebaseConfig`  object to initialize Firebase in your Express server.

7. When running your Express server locally, the environment variables from the  `.env`  file will be loaded into the  `process.env`  object, allowing you to access them in your code.

Remember to securely manage your environment variables and avoid exposing sensitive information. Additionally, when deploying your Firebase project, you may need to set environment variables in your hosting platform or use a service like Firebase Hosting environment configuration to manage environment variables in a production environment.