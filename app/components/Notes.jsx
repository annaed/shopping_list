import React from 'react';
import Editable from './Editable.jsx';
import Note from './Note.jsx';
import LaneActions from '../actions/LaneActions';

export default ({notes, onValueClick, onEdit, onEditPrice, onDelete //, onFinish
}) => {
  return (
    <ul className="notes">{notes.map(note =>
      <Note className="note" id={note.id} amount={note.price} name={note.name} key={note.id} editing={note.editing}
          onMove={LaneActions.move} 
          onValueClick={onValueClick.bind(null, note.id)}
          onEdit={onEdit.bind(null, note.id)}
          onEditPrice={onEditPrice.bind(null, note.id)}
          onDelete={onDelete.bind(null, note.id)} 
          //onFinish = {onFinish.bind(null, note.id)}
          >
        <Editable
          editing={note.editing}
          value={note.item}
          onValueClick={onValueClick.bind(null, note.id)}
          onEdit={onEdit.bind(null, note.id)}
          onDelete={onDelete.bind(null, note.id)} />
      </Note>
    )}</ul>
  );
}