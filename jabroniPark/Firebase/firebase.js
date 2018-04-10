import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCAi6WRseO4t0vOF3_U68gxqk7IUK6Wuro",
  authDomain: "jabroniparking.firebaseapp.com",
  databaseURL: "https://jabroniparking.firebaseio.com",
  projectId: "jabroniparking",
  storageBucket: "jabroniparking.appspot.com",
  messagingSenderId: "372743421690"
};

const fire = firebase.initializeApp(config);

export default fire;