import React from "react";
import { getInitialData } from "../utils/data";

function ActiveNotes() {
    
const notes = getInitialData();
console.log(notes)

    return (

          <div className="p-5 ">
            <h2 className="text-2xl font-bold text-white">Catatan Aktif</h2>
            <p className="text-white font-thin">Tidak ada catatan.</p>

            <div className="border border-white p-3 h-72 w-60 mt-3 mr-3 text-white inline-block">
                <h3 className="text-xl font-bold">Lorem Ipsum</h3>
                <p className="italic text-neutral-400">Jumat, 15 April 2022</p>
                <div className="h-44 w-auto overflow-y-scroll">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet justo a lacus ultricies vulputate sed ac metus. Integer aliquet venenatis fringilla. Nam congue dui vitae dolor volutpat, ut feugiat elit commodo. Quisque nec tellus consequat, bibendum lacus vel, condimentum nibh. Cras sagittis quam nec commodo ultricies. Aliquam erat volutpat. Aenean molestie bibendum aliquet. Curabitur eget ligula bibendum, ornare arcu ac, pharetra leo. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                </div>
                <button className="w-1/2 bg-red-600 text-white h-8">Hapus</button>
                <button className="w-1/2 bg-yellow-500 text-white h-8">Pindahkan</button>
            </div>
            

          </div>

    );
  
}

export default ActiveNotes;