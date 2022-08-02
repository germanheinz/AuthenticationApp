import { signInWithGoogle } from '../../firestore/providers';
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