import { signInWithGoogle } from '../../firestore/providers';
import { verifyCredentials } from './authSlice';

export const checkingAuthentication = ( email, password ) => {
    return async ( dispatch ) => {
        dispatch( verifyCredentials() );
    }
}

export const checkingGoogleAuthentication = ( email, password ) => {
    return async ( dispatch ) => {
        dispatch( verifyCredentials() );
        const result = await signInWithGoogle();
        console.log( result );
    }
}