import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile,  } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/Firebase.init';
import axios from 'axios';



export const AuthContex=createContext();

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setloading]=useState(true);

    const createNewUser=(email,password)=>{
        setloading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    


    // update profile

    const updateUserProfile = (updatedData) => {
        setloading(true)
        return updateProfile(auth.currentUser, updatedData); 
        
      };

    // login
    const userLogin=(email,password)=>{
        setloading(true);
        return signInWithEmailAndPassword(auth,email,password);
      
    }


    // logout
    
    const logOut=()=>{
        setloading (true);
        return signOut(auth);
        

    }

    // google
    const googleProvider=new GoogleAuthProvider()
    const handelGooglSignIn=()=>{
        setloading(true);
      return  signInWithPopup(auth,googleProvider)
       
    }





      
    








    const authInfo={
        user,
        setUser,
        loading,
        setloading,
        createNewUser,
        updateUserProfile,
        logOut,
        userLogin,
        handelGooglSignIn,

        


    }





    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser?.email) {
                setUser(currentUser);
    
                try {
                    const { data } = await axios.post(`https://marathon-management-system-server-theta.vercel.app/jwt`, {
                        email: currentUser.email,
                    },{
                        withCredentials: true
                    });
                    console.log(data); // Handle token or other responses
                    // localStorage.setItem("authToken", data.token); // Save token if needed

                    
                } catch (error) {
                    console.error("Error generating JWT:", error.message);
                }
            } else {
                setUser(null); // Clear user if no user is signed in


                const { data } = await axios.get(`https://marathon-management-system-server-theta.vercel.app/logout`,{
                    withCredentials: true
                });
            }
    
            setloading(false); // Set loading to false after processing
        });
    
        return () => {
            unsubscribe(); // Cleanup subscription
        };
    }, []);
    








    return (
        <AuthContex.Provider value={authInfo}>
            {children}
            
        </AuthContex.Provider>
    );
};

export default AuthProvider;