import React, { Component } from 'react';
import './remove.css';

class Remove extends Component {

  constructor(props) {
    super(props);

    // this.state = {
    //   complete: this.props.isComplete
    // }
    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(e) {
    e.preventDefault();
    this.props.removeTodo(this.props.id);
  }

  render() {
    return (
      <div className="remove-container">
        <button onClick={this._handleChange}>Remove</button>
      </div>
    )
  }

}

export default Remove;
