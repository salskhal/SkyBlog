import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

var firebaseConfig = {
  // ENTER YOUR CONFIG HERE
  apiKey: "AIzaSyBEgrf9HFAQfFMV64Z6qmoc_SIY1S1EHCw",
  authDomain: "skyblo.firebaseapp.com",
  projectId: "skyblo",
  storageBucket: "skyblo.appspot.com",
  messagingSenderId: "499504200752",
  appId: "1:499504200752:web:79021abe7c7471ec7401f5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();