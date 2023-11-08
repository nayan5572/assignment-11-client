import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from './../Firebase/Firebase.config';



export const AuthContext = createContext();

// Continue With Google
const googleAuthProvider = new GoogleAuthProvider();


const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // handle log out
    const logOutUser = () => {
        return signOut(auth)
    }

    // continue with google logIn
    const googleLogin = () => {
        return signInWithPopup(auth, googleAuthProvider);
    }

    // useEffect(() => {
    //     const unSubscribe = onAuthStateChanged(auth, currentUser => {
    //         const userEmail = currentUser?.email || user.email;
    //         setUser(currentUser)
    //         console.log("Current User", currentUser);
    //         setLoading(false);

    //         if (currentUser) {
    //             const loggedUser = { email: userEmail };
    //             axios.post('http://localhost:5000/jwt', loggedUser, { withCredentials: true })
    //                 .then(res => {
    //                     console.log(res.data);
    //                 });
    //         }
    //         else {
    //             // eslint-disable-next-line no-undef
    //             axios.post('http://localhost:5000/logout', loggedUser, {
    //                 withCredentials: true
    //             })
    //                 .then(res => {
    //                     console.log(res.data);
    //                 })
    //         }
    //     });
    //     return () => {
    //         return unSubscribe();
    //     }
    // }, [])

    useEffect(() => {
        const unScriber = onAuthStateChanged(auth, currentUser => {
            console.log('User in auth state change', currentUser);
            setUser(currentUser);
            setLoading(false)
        });
        return () => {
            unScriber();
        }
    }, []);


    const userInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOutUser,
        googleLogin
    }



    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;