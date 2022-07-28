import { verifyCredentials } from './authSlice';

export const checkingAuthentication = ( email, password ) => {
    return async ( dispatch ) => {
        dispatch( verifyCredentials() );
    }
}

export const checkingGoogleAuthentication = ( email, password ) => {
    return async ( dispatch ) => {
        dispatch( verifyCredentials() );
    }
}