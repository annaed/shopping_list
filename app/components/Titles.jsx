import React from 'react';
import Title from './Title.jsx';

export default ({titles, onEdit}) => {
  return (
    <ul className = "titles">{titles.map(title =>
      <li className = "title">
        <Title 
        title={title}
          onEdit={onEdit.bind(null, title)} />
      </li>
    )}</ul>
  );
}