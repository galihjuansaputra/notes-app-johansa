import React from "react";
import { showFormattedDate } from "../utils/data";

function NotesItemBody({title, createdAt, body}) {

return (
  <div>
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="italic text-neutral-400">{showFormattedDate(createdAt)}</p>
    <div className="mt-4 h-64 w-auto overflow-y-scroll">
      <p>{body}</p>
    </div>
  </div>
);
  
}

export default NotesItemBody;