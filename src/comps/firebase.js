import firebase from "firebase";
import "firebase/database";
import "firebase/auth"




const firebaseConfig = {
  apiKey: "AIzaSyBaZ47QeIeOlh8lncWfdn7gZee6lkQPBQg",
  authDomain: "olx-clone-b7551.firebaseapp.com",
  databaseURL: "https://olx-clone-b7551.firebaseio.com",
  projectId: "olx-clone-b7551",
  storageBucket: "olx-clone-b7551.appspot.com",
  messagingSenderId: "456370941849",
  appId: "1:456370941849:web:c66b0f7d3d78cd12c66d08"
};

export default firebase.initializeApp(firebaseConfig);


