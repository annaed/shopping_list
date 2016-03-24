import uuid from 'node-uuid';

import React from 'react';

import Notes from './Notes.jsx';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);

  	this.state = {
  	 notes: [
  	   {
         id: uuid.v4(),
         item: 'Oranges'
       },
       {
         id: uuid.v4(),
         item: 'Apples'
       },
       {
         id: uuid.v4(),
         item: 'Grapes'
       }
  	  ]
  	};
  }
  render() {

    const notes = this.state.notes;


return (
      <div>
        <button className="add-note" onClick={this.addNote}>add item</button>
        
        <Notes notes={notes}
          onEdit={this.editNote}
          onDelete={this.deleteNote} />

      
      </div>
    );
  }

  deleteNote = (id, e) => {
    e.stopPropagation();

    this.setState({
      notes: this.state.notes.filter(note => note.id !== id)
    });
  };
  addNote = () => {

  	this.setState({
  		notes: this.state.notes.concat([{
  			id: uuid.v4(),
  			item: 'New item'
  		}])
  	});
  };

  editNote = (id, item) => {
    if(!item.trim()) {
      return;
    }

    const notes = this.state.notes.map(note => {
      if(note.id === id && item) {
        note.item = item;
      }

      return note;
    });

    this.setState({notes});
  };

}
