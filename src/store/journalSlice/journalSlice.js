import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: true,
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
       addNewEmptyNote: (state, action) => {},
       setActiveNote: (state, action) => {},
       setNotes: (state, action) => {},
       setSaving: (state) => {},
       updateNote: (state, action) => {}
    }
});


export const { 
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote 
} = journalSlice.actions;