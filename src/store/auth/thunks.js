import { loginWithEmailPassword, registerUserWithEmailPassword, signInWithGoogle } from '../../firestore/providers';
import { login, logout, verifyCredentials } from './authSlice';

export const checkingAuthentication = ( email, password ) => {
    return async ( dispatch ) => {
        dispatch( verifyCredentials() );
    }
}

export const checkingGoogleAuthentication = ( email, password ) => {
    return async ( dispatch ) => {
        await dispatch( verifyCredentials() );
        const result = await signInWithGoogle();

        if(!result.ok) return dispatch( logout( result.errorMessage ) ) 

        dispatch( login( result ));
        // console.log( result );
    }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async ( dispatch ) => {
        
        await dispatch( verifyCredentials() );

        console.log("paso credenciales");
        
        const { ok, photoURL, uid, error} = await registerUserWithEmailPassword({email, password, displayName});
        
        console.log( ok, photoURL, uid, error );
        
        if(!ok) return dispatch(logout({ error }));
        
        console.log("paso ok");

        dispatch(login({uid, photoURL, email, password}));

    }
}
export const startLoginWithGoogle = ({ email, password }) => {
    return async ( dispatch ) => {
        
        await dispatch( verifyCredentials() );
        
        const { ok, photoURL, uid, error} = await loginWithEmailPassword({email, password});
        
        if(!ok) return dispatch(logout({ error }));
        
        dispatch(login({uid, photoURL, email, password}));



    }
}
export const startLogout = () => {
    return async ( dispatch ) => {
        
        await logoutFirebase();

        dispatch(logout());

    }
}