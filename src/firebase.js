import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyC6yFStySrBXVYp2fGnhP0LqPpC8MnIreQ",
  authDomain: "social-animals-c1b71.firebaseapp.com",
  databaseURL: "https://social-animals-c1b71.firebaseio.com",
  storageBucket: "social-animals-c1b71.appspot.com",
  messagingSenderId: "212999125103"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
