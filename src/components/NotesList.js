import React from 'react';
import NotesItem from './NotesItem';
 
function NotesList({notes}) {
 return (
    <div>
        {
    notes.map((note) => (

     <NotesItem key={note.id} {...note}/>
     ))
    }
    </div>
 );
}
 
export default NotesList;