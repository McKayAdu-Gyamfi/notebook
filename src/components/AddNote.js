
import React from "react";
import { useState } from "react";
import { addNote } from "../redux/noteSlice";
import { useDispatch, useSelector } from "react-redux";
import {v4 as uuid} from 'uuid'
// import NotesList from "./NotesList";
// import Note from "./Note";


const AddNote = () => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");



  const dispatch = useDispatch();
  const data = useSelector((store) => store.noteStore.noteData);

  console.log(data)

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {id: uuid(), noteTitle, noteContent}
    dispatch(addNote(newNote))
    setNoteTitle("");
    setNoteContent("")
  }
  

  return (
    <div className="note new">
      <label className="titre">Title</label>
      <input
        type="text"
        name="noteTitle"
        placeholder="Enter your title"
        onChange={(e) => setNoteTitle(e.target.value)}
        value={noteTitle}
      />
      <label className="titre">Content</label>
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a note..."
        name="noteContent"
        onChange={(e) => setNoteContent(e.target.value)}
        value={noteContent}
      ></textarea>
      <br />
      <div className="note-footer">
        <button className="save" onClick={handleSubmit}>
          Add note
        </button>
      </div>
          </div>
  );
};

export default AddNote;
