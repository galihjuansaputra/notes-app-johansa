import React from "react";
import ArchiveNotes from "./ArchiveNotes";

class AddNotes extends React.Component{
  
  render(){
    return (
        <div className="flex flex-col sm:flex-row p-5 bg-zinc-900">
          <div className="basis-1/4 self-center">
            <h2 className="text-2xl font-bold text-white">Buat Catatan</h2>
            <p className="text-white font-thin">Sisa Karakter: 50</p>
            <form>
              <input
                type="text"
                className="p-2 w-full mt-4"
                placeholder="Ini adalah judul..."
              /><br/>
              <textarea
                className="p-2 w-full mt-4 h-40"
                placeholder="Tuliskan catatanmu di sini..."
              />
              <button type="submit" className="w-1/2 bg-red-600 text-white h-8">Reset</button>
              <button type="reset" className="w-1/2 bg-green-500 text-white h-8">Submit</button>

            </form>
          </div>

          <div className="basis-3/4 mt-5 sm:mt-0 ml-0 sm:ml-5 ">
            <ArchiveNotes/>
          </div>
        </div>
    );
  }
}

export default AddNotes;