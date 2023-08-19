
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
   noteData: [
    {
      id:'t589879',
    noteTitle: "Hello",
    noteContent:"This is a test..."
   }
    ],
  };

export const noteSlice = createSlice({
    name: 'notes',
    initialState,
    reducers:{
      addNote: (state, {payload}) => {
        state.noteData.push(payload);
      },

      deleteNote: (state, action) => {
        console.log(action.payload);
        state.noteData = state.noteData.filter((item) => item.id !== action.payload)
      },

      updateNote: (state, action) => {
        const {noteTitle, noteContent} = action.payload

        const editNote = state.noteData.find(item => item.id === action.payload.id)
        if(editNote){
          editNote.noteTitle = noteTitle
          editNote.noteContent=  noteContent
        }
      }


    }
});

export const { addNote, deleteNote, updateNote } = noteSlice.actions;

export default noteSlice.reducer
