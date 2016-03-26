import uuid from 'node-uuid';

import React from 'react';

import Notes from './Notes.jsx';

import Title from './Title.jsx';

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
  	  ],
  	  title: ['List']
  	};
  }
  render() {

    const notes = this.state.notes;
    const title = this.state.title;

return (
      <div>
        <button className="add-note" onClick={this.addNote}>add item</button>
        <Title title={title} 
        onEdit={this.editTitle}
        onDelete={this.deleteTitle}/>
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

	editTitle = () => {
	    if(!title.trim()) {
	      return;
	    }

	    const title = this.state.title.map(title => {
	      return title;
	    });

	    this.setState({title});
	};

}
