import React from 'react'
import Note from './Note';
// import { v4 as uuidv4 } from "uuid";
import { useSelector } from 'react-redux';
import AddNote from './AddNote';
const NotesList = () => {
  const data = useSelector((store) => store.noteStore.noteData);

     // const currentDate = new Date();
    // const day = currentDate.toLocaleDateString('default', {weekday: 'long'});
    // const month = currentDate.toLocaleDateString('default', {month: 'long'});
    // const date = `${day}, ${month} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;
    

  return (
    <div className='notes-list'>
    
    {data.map((item) => {
      return (
        <div key={item.id}>
          <Note item={item}/>
        </div>
      )
    })}
    <AddNote/>
    </div>
  )
}

export default NotesList;