import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { firebaseAuth } from './config'

const googleProvider = new GoogleAuthProvider();


export const signInWithGoogle = async () => {

    try {
        const result = await signInWithPopup(firebaseAuth, googleProvider)
        const { displayName, email, photoURL, uid } = result.user;

        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }
    } catch (error) {
      console.log(error);  
         // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        return {
            ok: false,
            errorMessage
        }
    }
}
export const registerUserWithEmailPassword = async ({ email, password, displayName}) => {

    const errorMessage = '';

    try {
        console.log(email + password + displayName);

        const result = await createUserWithEmailAndPassword( firebaseAuth, email, password );
        
        await updateProfile(firebaseAuth.currentUser, { displayName });
        
        const { uid, photoURL } = result.user;

        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid,
            errorMessage
        }
    } catch (error) {
        console.log("ENTRÓ AL CATCH");
        console.log(error);
        return {
            ok: false,
            error
        }
    }
}

export const loginWithEmailPassword = async ({ email, password}) => {

    const errorMessage = '';
    
    const email2 = email;

    try {

        console.log("< - LOGIN - >");

        const result = await signInWithEmailAndPassword( firebaseAuth, email2, password );
                
        const { uid, photoURL, displayName, email } = result.user;
        
        console.log(result.user);

        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid,
            errorMessage
        }
    } catch (error) {
        console.log("ENTRÓ AL CATCH");
        console.log(error);
        return {
            ok: false,
            error
        }
    }
}

export const logoutFirebase = async () => {

    try {

        console.log("< - LOGOUT - >");

        return result = await firebaseAuth.signOut();
            
    } catch (error) {
        console.log("ENTRÓ AL CATCH");
        console.log(error);
        return {
            ok: false,
            error
        }
    }
}