import React, {useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import { auth } from '../firebase.config';
import { AuthContext } from './AuthContext';


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setuser]= useState(null)
    const [loding,setloding]= useState(true)
   // console.log(loding,user)

    const createuser = (email,pass)=>{
        setloding(true)
        return createUserWithEmailAndPassword(auth,email,pass)
    }

    const logOut =()=>{
        return signOut(auth)
    }

    const signIn =(email,pass)=>{
        setloding(true)
    return signInWithEmailAndPassword(auth,email,pass)
     }

     const updateuser = (updateddata) =>{
        return updateProfile(auth.currentUser,updateddata)
     }
     const google = () => {
  setloding(true);
  return signInWithPopup(auth, googleProvider);
};

    useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentuser)=>{
         setuser(currentuser)
         setloding(false)
         });

      return ()=> unsubscribe()

    },[])

    const authinfo ={
        user,
        setuser,
        createuser,logOut,signIn,loding,setloding,updateuser,google
    }
  
    return <AuthContext value={authinfo}>{children}</AuthContext>
};

export default AuthProvider;