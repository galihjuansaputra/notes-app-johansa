import React from 'react';
 
function DeleteButton({ id, onDelete }) {
  return (
    <>
    <button className="w-full bg-red-600 text-white h-8" onClick={() => onDelete(id)}>Hapus</button>
    </>
    )
}
 
export default DeleteButton;