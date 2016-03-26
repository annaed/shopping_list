import React from 'react';

export default class Title extends React.Component {
	constructor(props){
		super(props);

		//Track 'editing' state.
		this.state ={
			editing: false
		};
	}
	render() {
		//render the compenonet different based on state. 
		if(this.state.editing) {
			return this.renderEdit();
		}

		return this.renderTitle();
	}

	renderEdit = () => {
		//We deal with blur and input handlers here. These map to DOM events. 
		// We also set selection to input end using a callback at a ref
		// It gets triggered after the compnent is mounted. 
		//We could also use a string reference (i.e., 'ref="input") and ')
		//then refer to the element in question later in the code. This
		// would allow us to use the underlying DOM API through
		//this.refs.input. This can be useful when combined with React lifecycle hooks.
	return <input type="text"
      ref={
        (e) => e ? e.selectionStart = this.props.title.length: null
      }
      autoFocus={true}
      defaultValue={this.props.title}
      onBlur={this.finishEdit}
      onKeyPress={this.checkEnter} />;
  };

  renderTitle = () => {
    return (
      <div onClick={this.edit}>
        <span className="title">{this.props.title}</span>
      </div>
    );
  };

  edit = () => {
      this.setState({
      editing: true
    });
  };

  checkEnter = (e) => {
    if(e.key === 'Enter') {
      this.finishEdit(e);
    }
  };

  finishEdit = (e) => {
    const value = e.target.value;

    if(this.props.title.onEdit) {
      this.props.title.onEdit(value);

      this.setState({
        editing: false
      });
    }
  };
}