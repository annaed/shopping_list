import React from 'react';
import Title from './Title.jsx';

export default ({title, onEdit}) => {
  return (
    <ul>{title.map(title =>
      <li>
        <Title
          title={title}
          onEdit={onEdit.bind(null, title)} />
      </li>
    )}</ul>
  );
}