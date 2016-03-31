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
             sku: Math.floor(Math.random()*(10000000-5000000))+5000000
           },
           {
             id: uuid.v4(),
             item: 'Apples',
             price: '$0.99',
             sku: Math.floor(Math.random()*(10000000-5000000))+5000000
           },
           {
             id: uuid.v4(),
             item: 'Grapes',
             price: '$0.99',
             sku: Math.floor(Math.random()*(10000000-5000000))+5000000
           }
          ],
          titles: [
            { id: uuid.v4(),
              name: 'List'
          }
          ]
        };
}

  render() {

    const notes = this.state.notes;
    const titles = this.state.titles;
    
    var List = React.createClass({
    render: function () {
    return <div>{this.props.Titles}
    {this.props.Notes}</div>;
  }
});

return (
      <div>
        <button className="add-note" onClick={this.addNote}>add item</button>
        <button className="add-list" onClick={this.addList}>add list</button>
          <List  Titles={<Titles titles={titles} 
          onEdit={this.editTitle}
          onDelete={this.deleteTitle} />} Notes={<Notes notes={notes}
          onEdit={this.editNote}
          onDelete={this.deleteNote} />} />
      </div>
    );
  }

  deleteNote = (id, e) => {
    e.stopPropagation();

    this.setState({
      notes: this.state.notes.filter(note => note.id !== id)
    });
  };
  deleteList = (id, e) => {
    e.stopPropagation();

    this.setState({
      titles: this.state.titles.filter(title => title.id !== id)
    });
  };
  addNote = () => {

    this.setState({
      notes: this.state.notes.concat([{
        id: uuid.v4(),
        item: 'New item',
        price: 'Please name your item',
        sku: 'N/A'      
      }])
    });
  };


  editNote = (id, item, sku, price) => {

    if(!item.trim()) {
      
      return;
    }

    const notes = this.state.notes.map(note => {
      if(note.id === id && item) note.item = item;
      if(note.sku === 'N/A') note.sku = Math.floor(Math.random()*(10000000-5000000))+5000000;
      if(note.price ==='Please name your item') note.price = '$' + (Math.random()*(10.00-0.01)+0.01).toFixed(2);
      return note;
    });

    this.setState({notes});
  };

addList = () => {

    this.setState({
      titles: this.state.titles.concat([{
        id: uuid.v4(),
        name: 'New List'
      }]),
      notes: this.state.notes.concat([{
        id: uuid.v4(),
        item: 'New Item',
        price: 'Please name your item',
        sku: 'N/A' 
      }])
    });
  };

  editTitle = (id, name) => {

      if(!name.trim()) {

        return;
      }

      const titles = this.state.titles.map(title => {
        if(title.id === id && name) title.name = name;
        return title;
      });

      this.setState({titles});
  };


}