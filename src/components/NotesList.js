import React from 'react';
import NotesItem from './NotesItem';

function NotesList({notes, onDelete}) {
if (notes.length === 0) {
    return (
        <div className="p-5">
            <h2 className="text-2xl font-bold text-white">Catatan Aktif</h2>  
            <p className="text-white font-thin">Tidak ada catatan.</p>
        </div>
     );
} else {
    return (
        <div className="p-5" >
            <h2 className="text-2xl font-bold text-white">Catatan Aktif</h2> 
        { notes.map((note) => (
            <NotesItem key={note.id} id={note.id} onDelete={onDelete} {...note}/>
         ))
        }
        </div>
     );
}

}
 
export default NotesList;