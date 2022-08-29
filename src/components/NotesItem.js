import React from 'react';
import NotesItemBody from './NotesItemBody';
 
function NotesItem({title, createdAt, body}) {
 return (
   <div className="border border-white p-3 h-96 w-72 mt-3 mr-3 text-white inline-block">
     <NotesItemBody title={title} body={body} createdAt={createdAt}/>
   </div>
 );
}
 
export default NotesItem;