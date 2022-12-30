import React, { createContext, useEffect, useState} from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/Firebase.config'

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleSignIn =(Provider)=>{
        return signInWithPopup(auth,Provider)
    }

    const logOut =()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser)
            setUser(currentUser)
        })
        return ()=>{
            return unsubscribe()
        }
    },[])

    const userInfo = {user, createUser, signIn, googleSignIn, logOut }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
