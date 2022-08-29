import React from "react";
import Header from "./Header";
import AddNotes from "./AddNotes";
import Footer from "./Footer";
import NotesList from "./NotesList";
import { getInitialData } from "../utils/data";

class NotesApp extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    }

    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes });
  }

  onAddNotesHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: Date(),
            archived: false,
          }
        ]
      }
    });
  }


  render(){
    return (
      <div className=" bg-zinc-800">
        <Header/>
        <AddNotes input={this.onAddNotesHandler}/>
        <NotesList notes={this.state.notes} onDelete={this.onDeleteHandler}/>
        <Footer/>
      </div>
    );
  }
}

export default NotesApp;
