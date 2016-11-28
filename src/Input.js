import React, { Component } from 'react';
import {addItems} from './util.js';
// import logo from './logo.svg';
import './input.css';

class Input extends Component {

  constructor(props) {
    super(props);

    this.state = {
      theValue: ''
    }

    this._handleChange = this._handleChange.bind(this);
    this._handleEnter = this._handleEnter.bind(this);
  }

  _handleChange(e) {
    this.setState({theValue: e.target.value});
  }

  _handleEnter(e) {
    // update state if "entered"
    if (e.keyCode === 13 ) {
      this.setState({theValue: ''});

      addItems(e.target.value);
    }
  }

  render() {
    return (
      <div className="input-container">
        <input id="createTask" type="text" placeholder="Add new task..." value={this.state.theValue} onChange={this._handleChange} onKeyDown={this._handleEnter} />
      </div>
    );
  }
}





export default Input;
