const firebase = require('firebase');
require('dotenv').config();

firebase.initializeApp({
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "myinitialpage.firebaseapp.com",
  databaseURL: "https://myinitialpage.firebaseio.com",
  projectId: "myinitialpage",
  storageBucket: "myinitialpage.appspot.com",
  messagingSenderId: "630002310451",
  appId: "1:630002310451:web:e18cf4217b7053fd"
});

module.exports = firebase.database();