import React from 'react';

import Notes from './Notes.jsx';

import Titles from './Titles.jsx';

export default class List extends React.Component {
	constructor(props){
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
		return this.renderList();
	}

	
  renderList = () => {
    const onDelete = this.props.onDelete;

    return (
		<div>
      this.renderTitle();
      this.renderNote();
  		</div>
    );

  };
 
  renderDelete = () => {
    return <button 
    className="delete-list"
    onClick={this.props.onDelete}>x</button>;
  };
}