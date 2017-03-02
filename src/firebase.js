import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBs-HL-vvEhMORbdeD2JsKloNw1-bqPo9k',
  authDomain: 'spirit-animal-look-book.firebaseapp.com',
  databaseURL: 'https://spirit-animal-look-book.firebaseio.com',
  storageBucket: 'spirit-animal-look-book.appspot.com',
  messagingSenderId: '364594286380'
};

firebase.initializeApp(config);

export default firebase;
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
