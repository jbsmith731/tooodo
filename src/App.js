import React, { Component } from 'react';
// import logo from './logo.svg';
import Input from './Input';
import List from './List';
import {getItems, updateItems} from './util.js'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      list: getItems()
    }

    this._toggleComplete = this._toggleComplete.bind(this)
    this._handleEnter = this._handleEnter.bind(this)
  }

  _handleEnter(e) {
    // update state if "entered"
    if (e.keyCode === 13 ) {
      this.setState({list: getItems()})
    }
  }

  _toggleComplete(id, checked) {
    updateItems(id, checked)
    this.setState({
      list: getItems()
    })
  }

  render() {
    return (
      <div className="app" onKeyUp={this._handleEnter}>
        <Input />
        <List list={this.state.list} updateChecked={this._toggleComplete}/>
      </div>
    );
  }
}


export default App;
