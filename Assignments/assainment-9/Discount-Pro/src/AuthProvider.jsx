import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./firebase.config";


export const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log(loading, user);

    const googleProvider = new GoogleAuthProvider()


    const createNewUser = (email, passward) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, passward)

    }
    const loginUser = (email, passward) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, passward)

    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const googleSignIn = () =>{
        setLoading(true)
       return signInWithPopup(auth,googleProvider)
    }

    const authInfo = {
        user,
        loading,
        setUser,
        createNewUser,
        logOut,
        loginUser,
        setLoading,
        googleSignIn

    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }

    }, [])


    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>

};

export default AuthProvider;