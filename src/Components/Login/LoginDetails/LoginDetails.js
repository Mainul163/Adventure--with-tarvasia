import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../firebase.config';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';

if(firebase.apps.length===0){
    firebase.initializeApp(firebaseConfig);
}
const LoginDetails = () => {

    const style={
        height:'345px'
    }
    const[loginUser,setLoginUser]=useContext(UserContext)
    var provider = new firebase.auth.GoogleAuthProvider();
   
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const googleSingIn=()=>{
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
          
          var credential = result.credential;
          var token = credential.accessToken;
       
          var user = result.user;
          console.log(user)
          const {displayName,email,photoURL} = user
          const userData={
              name:displayName,
              email:email,
              img:photoURL
          }
          setLoginUser(userData)
          history.replace(from);
          setToken()
         
        }).catch((error) => {
        
          var errorCode = error.code;
          var errorMessage = error.message;
         
          var email = error.email;
    
          var credential = error.credential;
          
        });
    }
    const setToken=()=>{
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
            sessionStorage.setItem('token',idToken);
          
          }).catch(function(error) {
            // Handle error
          });
    }
   
    console.log(loginUser.name)
    return (
        <div style={style} className='d-flex align-items-center justify-content-center'>
           <div>
           <button type="button" onClick={googleSingIn} class="btn btn-primary">SignIn with google</button>
           </div>
        </div>
    );
};

export default LoginDetails;