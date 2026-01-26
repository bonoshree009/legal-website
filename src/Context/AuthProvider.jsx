import React, {useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from '../Firebase/Firebase.config';


const auth =getAuth(app)
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
        createuser,logOut,signIn,loding,setloding,updateuser
    }
  
    return <AuthContext value={authinfo}>{children}</AuthContext>
};

export default AuthProvider;