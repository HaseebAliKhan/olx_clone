import React, {useState} from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal"




// var currentUserKey = '';
// function signIn() {
//   var provider = new firebase.auth.GoogleAuthProvider();
//   firebase.auth().signInWithPopup(provider);
// }
// function signOut() {
//   firebase.auth().signOut();
// }
// function onFirebaseStateChanged() {
//   firebase.auth().onAuthStateChanged(onStateChanged);
// }
// function onStateChanged(user) {
//   if (user) {
//       // alert(firebase.auth().currentUser.email + '\n' + firebase.auth().currentUser.displayName);

//       var userProfile = { email: '', name: '', photoURL: '' };
//       userProfile.email = firebase.auth().currentUser.email;
//       userProfile.name = firebase.auth().currentUser.displayName;
//       userProfile.photoURL = firebase.auth().currentUser.photoURL;

//       var db = firebase.database().ref('users');
//       var flag = false
//       db.on('value', function (users) {
//           users.forEach(function (data) {
//               var user = data.val();
//               if (user.email === userProfile.email) {
//                   currentUserKey = data.key
//                   flag = true;

//               }

//           });

//           if (flag === false) {
//               firebase.database().ref('users').push(userProfile, callBack);

//           }
//           else {
//               document.getElementById('imgProfile').src = firebase.auth().currentUser.photoURL;
//               document.getElementById('imgProfile').title = firebase.auth().currentUser.displayName;

//               document.getElementById('lnkSignIn').style = 'display:none';
//               // document.getElementById('lnkSingOut').style = '';



//           }

//           document.getElementById('lnkNewChat').classList.remove('disabled');

//           // LoadChatList();
//       });
//   }
//   else {
//       document.getElementById('imgProfile').src = "PP.png";
//       document.getElementById('imgProfile').title = '';

//       document.getElementById('lnkSignIn').style = '';
//       // document.getElementById('lnkSingOut').style = 'display:none';

//       document.getElementById('lnkNewChat').classList.add('disabled');
//   }
// }
// function callBack(error) {
//   if (error) {
//       alert(error);
//   }
//   else {
//       document.getElementById('imgProfile').src = firebase.auth().currentUser.photoURL;
//       document.getElementById('imgProfile').title = firebase.auth().currentUser.displayName;

//       document.getElementById('lnkSignIn').style = 'display:none';
//       document.getElementById('lnkSingOut').style = '';

//   }
// }




function Login() {

      
        return (
          <>
          
          </>
        );
      }
    
export default Login;
