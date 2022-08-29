import React from "react";

class AddNotes extends React.Component{
  
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    }
  
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }
  
  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      }
    });
  }
  
  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      }
    });
  }
  
  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.input(this.state);
  }

  render(){
    return (
        <div className="p-5 bg-zinc-900">
          <div className="w-80">
            <h2 className="text-2xl font-bold text-white">Buat Catatan</h2>

            <form onSubmit={this.onSubmitEventHandler}>
              <input
                value={this.state.title}
                onChange={this.onTitleChangeEventHandler} 
                type="text"
                className="p-2 w-full mt-4"
                placeholder="Ini adalah judul..."
                required
              /><br/>
              <textarea
                value={this.state.body}
                onChange={this.onBodyChangeEventHandler}
                className="p-2 w-full mt-4 h-40"
                placeholder="Tuliskan catatanmu di sini..."
                required
              />
              <button type="submit" className="w-full bg-green-500 text-white h-8">Submit</button>

            </form>
          </div>
        </div>
    );
  }
}

export default AddNotes;