import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { login, logout } from "../store/auth/authSlice";
import { useDispatch, useSelector } from 'react-redux';
import { firebaseAuth } from "../firestore/config";

export const useCheckAuth = () => {

    const { status } = useSelector( state => state.auth);
    const dispatch   = useDispatch();

    console.log("status del use check auth");
    console.log(status);


    useEffect(() => {

        onAuthStateChanged(firebaseAuth, async(user) => {
            if(!user) return dispatch(logout());
            const { uid, email, displayName, photoURL} = user;
            dispatch(login({uid, email, displayName, photoURL}));
        })

    }, []);


    return { status }



}
