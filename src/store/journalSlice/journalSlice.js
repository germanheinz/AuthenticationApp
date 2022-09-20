import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        activeNote: null
        // active: {
        //     id: 'abc',
        //     title: '',
        //     body: '',
        //     date: 1234,
        //     imageUrl: []
        // }
    },
    reducers: {
       savingNewNote: (state) => {
          state.isSaving = true;
       },
       addNewEmptyNote: (state, action) => {
            console.log("reducer add new empty note");
            console.log(state);
            state.notes.push( action.payload );
            state.activeNote = action.payload;
            state.isSaving = false;
        },
        setActiveNote: (state, action) => {
           console.log("set active note");
            state.activeNote = action.payload;
            state.isSaving = false;
       },
       setNotes: (state, action) => {
        state.notes = action.payload;
    
       },
       setSaving: (state) => {},
       updateNote: (state, action) => {}
    }
});


export const { 
    savingNewNote,
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote 
} = journalSlice.actions;