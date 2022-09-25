import React from 'react'
import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { firebaseDB } from '../../firestore/config';
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes, setSaving, updateNote } from './journalSlice';
import { async } from '@firebase/util';
import { loadNotes } from '../../helpers/index';

export const startNewNote = () => {
    return async ( dispatch, getState ) => {
        console.log(getState());
        console.log("%");
        
        const { uid } = getState().auth;
        console.log(uid);

        const dateToDate = "2020-06-19";

        const newNote = {
            title: '',
            body: '',
            date: dateToDate 
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

export const onSaveNote = () => {
   return async (dispatch, getState) => {

       dispatch( setSaving() );

       console.log(getState().auth);
       const { uid }    = getState().auth;
       const { activeNote } = getState().journal;

       console.log(activeNote);

       const noteToFireStore = {...activeNote};
       delete noteToFireStore.id;

       const newDoc = doc( firebaseDB, `${uid}/journal/notes/${activeNote.id}`);
       const resp = await setDoc(newDoc, noteToFireStore, {merge : true });

       dispatch( updateNote ( activeNote ));

   }
}