import React, { Component } from 'react';
import Input from './Input';
import List from './List';
import ClearAll from './ClearAll';
import {getItems, updateItems, removeItems, removeComp} from './util.js'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      list: getItems()
    }

    this._toggleComplete = this._toggleComplete.bind(this);
    this._handleEnter = this._handleEnter.bind(this);
    this._removeItem = this._removeItem.bind(this);
    this._removeComp = this._removeComp.bind(this);
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

  _removeItem(id) {
    removeItems(id);
    this.setState({
      list: getItems()
    })
  }

  _removeComp(newList) {
    removeComp(newList);
    this.setState({
      list: getItems()
    })
  }

  render() {

    return (
      <div className="app" onKeyUp={this._handleEnter}>
        <Input />
        <ClearAll list={this.state.list} removeComp={this._removeComp} />
        <List list={this.state.list} updateChecked={this._toggleComplete} removeTodo={this._removeItem}/>
      </div>
    );
  }
}


export default App;
