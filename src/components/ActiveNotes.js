import React from "react";
import { getInitialData } from "../utils/data";
import NotesList from "./NotesList";

function ActiveNotes() {
  const notes = getInitialData();
    return (
      <div className="p-5 ">
        <h2 className="text-2xl font-bold text-white">Catatan Aktif</h2>
        <p className="text-white font-thin">Tidak ada catatan.</p>
        <NotesList notes={notes}/>
      </div>
);

}

export default ActiveNotes;