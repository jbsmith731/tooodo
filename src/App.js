import React, { Component } from 'react';
// import logo from './logo.svg';
import Input from './Input';
import List from './List';
import {getItems} from './util.js'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      theList: getItems()
    }
  }

  _handleEnter(e) {
    // update state if "entered"
    if (e.keyCode === 13 ) {
      this.setState({theList: getItems()})
    }
  }

  render() {
    return (
      <div className="app" onKeyUp={this._handleEnter.bind(this)}>
        <Input />
        <List />
      </div>
    );
  }
}


export default App;
