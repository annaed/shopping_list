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
        (e) => e ? e.selectionStart = this.props.title.length : null
      }
      autoFocus={true}
      defaultValue={this.props.title}
      onBlur={this.finishEdit}
      onKeyPress={this.checkEnter} />;
  };
  renderTitle = () => {
    const onDelete = this.props.onDelete;

    return (
    <div onClick={this.edit}>{this.props.title}</div>
    );

  };
 
  renderDelete = () => {
    return <button 
    className="delete-note"
    onClick={this.props.onDelete}>x</button>;
  };
  edit = () => {
    // Enter edit mode.
    this.setState({
      editing: true
    });
  };
  checkEnter = (e) => {
    // The user hit *enter*, let's finish up.
    if(e.key === 'Enter') {
      this.finishEdit(e);
    }
  };
  finishEdit = (e) => {
    // `Note` will trigger an optional `onEdit` callback once it
    // has a new value. We will use this to communicate the change to
    // `App`.
    //
    // A smarter way to deal with the default value would be to set
    // it through `defaultProps`.
    //
    // See the *Typing with React* chapter for more information.
    const value = e.target.value;

    if(this.props.onEdit) {
      this.props.onEdit(value);

      // Exit edit mode.
      this.setState({
        editing: false
      });
    }
  };
}