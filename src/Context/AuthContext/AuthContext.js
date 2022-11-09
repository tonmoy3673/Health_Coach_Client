import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';

const auth=getAuth(app);
 export const context=createContext();
const AuthContext = ({children}) => {
    
    const [user,setUser]=useState({});
    const [loading, setLoading] = useState(true);
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    

    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    
    
    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false);
        })
        return()=>{
            unsubscribe();
        }
    },[])

    const updateUserProfile=(profile)=>{
        return updateProfile(auth.currentUser,profile);

    }
    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }

    const logInWithGoogle=(GoogleAuthProvider)=>{
        setLoading(true);
        return signInWithPopup(auth,GoogleAuthProvider);
    }

    const signInWithGithub=(GithubAuthProvider)=>{
        setLoading(true);
        return signInWithPopup(auth,GithubAuthProvider);
    }
   

    const authInfo={user,createUser,signIn,logOut,logInWithGoogle,updateUserProfile,signInWithGithub,loading}

    return (
        <div>
            <context.Provider value={authInfo}>
                {children}
            </context.Provider>
        </div>
    );
};

export default AuthContext;