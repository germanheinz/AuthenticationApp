import React from 'react'
import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { firebaseDB } from '../../firestore/config';
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes } from './journalSlice';
import { async } from '@firebase/util';
import { loadNotes } from '../../helpers/index';

export const startNewNote = () => {
    return async ( dispatch, getState ) => {
        console.log(getState());
        console.log("%");
        
        const { uid } = getState().auth;
        console.log(uid);

        const newNote = {
            title: '',
            body: '',
            date: new Date().getDate()
        }
    
        const newDoc = doc( collection(firebaseDB, `${uid}/journal/notes`));
        const resp = await setDoc(newDoc, newNote);

        newNote.id = newDoc.id;

        dispatch( addNewEmptyNote( newNote ));
        dispatch( savingNewNote());
        dispatch( setActiveNote( newNote ));

        console.log({newDoc, resp});

    
    }

}
export const getNotes = () => {
 return async(dispatch, getState) => {

    const { uid } = getState().auth;

    dispatch( setNotes(await loadNotes( uid )) );
    

 }

    
}
