import firebase from "firebase";
import "firebase/database";
import "firebase/auth"



const firebaseConfig = {
  apiKey: "AIzaSyDssYyng6sXXi9_Wb393qGolAuHO1JGCb0",
  authDomain: "olx-clone-c5576.firebaseapp.com",
  databaseURL: "https://olx-clone-c5576.firebaseio.com",
  projectId: "olx-clone-c5576",
  storageBucket: "olx-clone-c5576.appspot.com",
  messagingSenderId: "106286296739",
  appId: "1:106286296739:web:0efd0af638bbd420e09916",
  measurementId: "G-8KWJBGWCJ1"
};

export default firebase.initializeApp(firebaseConfig);