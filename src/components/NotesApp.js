import React from "react";
import HeaderSearch from "./HeaderSearch";
import AddNotes from "./AddNotes";
import Footer from "./Footer";
import ActiveNotes from "./ActiveNotes";

class NotesApp extends React.Component {
  render() {
    return (
      <div className=" bg-zinc-800">
        <HeaderSearch/>
        <AddNotes/>
        <ActiveNotes/>
        <Footer/>
      </div>
    );
  }
}

export default NotesApp;