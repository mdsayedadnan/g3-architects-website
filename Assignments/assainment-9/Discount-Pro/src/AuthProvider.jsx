import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./firebase.config";


export const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const [loding,setLoding]=useState(true)



    const createNewUser = (email, passward) => {
        return createUserWithEmailAndPassword(auth, email, passward)
    }
    const loginUser = (email,passward)=>{
        return signInWithEmailAndPassword(auth,email,passward)

    }
    const logOut = ()=>{
        return signOut(auth)
    }

    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        loginUser
      
    }
    useEffect(() => {
     const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser)
        setLoding(false)
      })  
      return () =>{
        unsubscribe()
      }

    }, [])


    return <AuthContext.Provider value={authInfo}>
        {children}

    </AuthContext.Provider>

};

export default AuthProvider;