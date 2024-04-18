import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null)

const AuthProviders = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setloading] = useState(true)

    const createUser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //SignOut

    const logOut = () => {
        setloading(true)
        return signOut(auth)
    }

        //obseve auth state change

        useEffect(() => {
            const unSubscribe = onAuthStateChanged(auth, currentUser => {
                console.log('Observing Current user inside useEffect of AuthProvider; Current user is:', currentUser)
                setUser(currentUser)
                setloading(false)
            })
            return () => {
                unSubscribe()
            }
        }, [])

    const authInfo = { user, createUser, signInUser, logOut, loading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;

AuthProviders.propTypes = {
    children: PropTypes.node
}