import React from 'react';
import Title from './Title.jsx';

export default ({titles, onEdit, onDelete}) => {
  return (
    <ul className = "titles">{titles.map(title =>
      <li className = "title" key={title.id}>
        <Title 
          id={title.id}
          name={title.name}
          onEdit={onEdit.bind(null, title.id)}
          onDelete={onDelete.bind(null, title.id)} />
      </li>
    )}</ul>
  );
}