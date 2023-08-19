import React from "react";
import { useState } from "react";
import { deleteNote } from "../redux/noteSlice";
import { updateNote } from "../redux/noteSlice";
import { MdDeleteForever, MdEditDocument } from "react-icons/md";
import { useDispatch } from "react-redux";
// import {v4 as uuid} from 'uuid'

const Note = ({ item }) => {
  const [open, setOpen] = useState(true);

  const [isEdit, setIsEdit] = useState(false);

  const [noteTitle, setNoteTitle] = useState(item.noteTitle);
  const [noteContent, setNoteContent] = useState(item.noteContent);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteNote(id));
  };

  const handleEdit = (id) => {
    setIsEdit(true);
  };

  const handleUpdate = (id) => {
    const newNote = { id, noteTitle, noteContent };
    dispatch(updateNote(newNote));
    setIsEdit(false);
  };

  return (
    <div>
      <div className="note">
        <h3>{item.noteTitle}</h3>
        <span>{item.noteContent}</span>
        <div className="note-footer">
          <small>7/29/23 [12:23pm]</small>
          <MdDeleteForever
            className="delete-icon"
            onClick={() => handleDelete(item.id)}
            size="1.3em"
          />
          <MdEditDocument
            className="edit-icon"
            onClick={() => handleEdit(item.id)}
            size="1.3em"
          />
        </div>
      </div>
      {isEdit && (
        <div className="modal-backdrop">
          <dialog open={open} className="modal-dialog">
            <label className="titre">Title</label>
            <input
              className="modal-input"
              type="text"
              value={noteTitle}
              onChange={(e) => setNoteTitle(e.target.value)}
            />
            <br/>
            <label className="titre">Note</label>
            <textarea
              rows="8"
              cols="10"
              className="modal-input"
              type="text"
              value={noteContent}
              onChange={(e) => setNoteContent(e.target.value)}
            ></textarea>
            <MdEditDocument
              className="edit-icon"
              onClick={() => handleUpdate(item.id)}
              size="1.3em"
            />
          </dialog>
        </div>
      )}
    </div>
  );
};

export default Note;
