import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
let firebaseConfig = {
  apiKey: "AIzaSyCGAFKftmREmEOU_Oiji5jcW8g5nagZ4AM",
  authDomain: "banco-80410.firebaseapp.com",
  projectId: "banco-80410",
  storageBucket: "banco-80410.appspot.com",
  messagingSenderId: "763005696394",
  appId: "1:763005696394:web:02a5a9fbdd94859cf8b073"
};
// Initialize Firebase
if(!firebase.apps.length){
    const app = firebase.initializeApp(firebaseConfig);
}
//const analytics = getAnalytics(app);

export default firebase;