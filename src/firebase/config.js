import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDWe33JJ99xvmhlhZfilt2ru6DIk4u6mAY",
  authDomain: "photo-gallery-5d3b5.firebaseapp.com",
  databaseURL: "https://photo-gallery-5d3b5.firebaseio.com",
  projectId: "photo-gallery-5d3b5",
  storageBucket: "photo-gallery-5d3b5.appspot.com",
  messagingSenderId: "781656517316",
  appId: "1:781656517316:web:b4cd44617e0bf2fdeaf791",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const appStorage = firebase.storage();
const appFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { appStorage, appFirestore, timestamp };
