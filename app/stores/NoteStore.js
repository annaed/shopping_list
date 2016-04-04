import uuid from 'node-uuid';
import alt from '../libs/alt';
import NoteActions from '../actions/NoteActions.js';

class NoteStore {
	constructor() {
		this.bindActions(NoteActions);

		this.notes=[];

		this.exportPublicMethods({
			getNotesByIds: this.getNotesByIds.bind(this)
		});
	}
	create(note) {

		const notes = this.notes;


		note.id = uuid.v4();
		note.price = (Math.random() * (10.00-1.00)).toFixed(2);
		note.name = 'New Item';
		
		this.setState({
			notes: notes.concat(note)
		});

		return note;

	}
	update(updatedNote){
		const notes = this.notes.map(note =>{
			if(note.id === updatedNote.id) {
				return Object.assign({}, note, updatedNote);
			}

			if(note.price === updatedNote.price) {
				return Object.assign({}, note, updatedNote);
			}
			return note;
		});
		this.setState({notes});
	}
	delete(id){
		this.setState({
			notes: this.notes.filter(note => note.id !== id)
		});
	}
	getNotesByIds(ids) {
		return (ids || []).map(
			id => this.notes.filter(note => note.id === id)
			).filter(a => a.length).map(a => a[0]);
	}
	// sum({note, total}) {

	// 	total = total + note.price;

	// 	return total;
	// };
}
export default alt.createStore(NoteStore, 'NoteStore');
