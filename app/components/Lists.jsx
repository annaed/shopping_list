import React from 'react';
import Note from './List.jsx';

export default ({lists, onDelete}) => {
  return (
    <ul className="lists">{lists.map(list =>
      <li className="list" key={list.id}>
        <List
          onDelete={onDelete.bind(null, list.id)} />
      </li>
    )}</ul>
  );
}