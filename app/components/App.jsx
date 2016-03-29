import uuid from 'node-uuid';

import React from 'react';

import Notes from './Notes.jsx';

import Titles from './Titles.jsx';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);

  	this.state = {
  	 notes: [
  	   {
         id: uuid.v4(),
         item: 'Oranges',
         price: '$0.99',
         sku: uuid.v4()
       },
       {
         id: uuid.v4(),
         item: 'Apples',
         price: '$0.99',
         sku: uuid.v4()
       },
       {
         id: uuid.v4(),
         item: 'Grapes',
         price: '$0.99',
         sku: uuid.v4()
       }
  	  ],
  	  titles: ['List']
  	};
  }
  render() {

    const notes = this.state.notes;
    const titles = this.state.titles;

return (
      <div>
        <button className="add-note" onClick={this.addNote}>add item</button>
        <Titles titles={titles} 
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
  			item: 'New item',
  			price: 'N/A',
  			sku: 'N/A'  		
  		}])
  	});
  };


  editNote = (id, item, sku) => {

    if(!item.trim()) {
      
      return;
    }

    const notes = this.state.notes.map(note => {
      if(note.id === id && item) note.item = item;
      if(note.item !== 'New item') note.sku = note.id;
      return note;
    });

    this.setState({notes});
  };

	editTitle = (title) => {
	    if(!title.trim()) {
	      return;
	    }

	    const titles = this.state.titles.map(title => {
	    	return title;
	    });

	    this.setState({titles});
	};

}
