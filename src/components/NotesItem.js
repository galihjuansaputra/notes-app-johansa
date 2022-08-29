import React from 'react';
import NotesItemBody from './NotesItemBody';
import DeleteButton from './DeleteButton';
 
function NotesItem({title, createdAt, body, id, onDelete}) {
 return (
   <div className="border border-white p-3 h-96 w-72 mt-3 mr-3 text-white inline-block">
     <NotesItemBody title={title} body={body} createdAt={createdAt}/>
     <DeleteButton id={id} onDelete={onDelete} />
   </div>
 );
}
 
export default NotesItem;