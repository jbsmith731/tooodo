import React, { Component } from 'react';
import Input from './Input';
import List from './List';
import ClearComp from './ClearComp';
import Nav from './Nav';
import {getItems, updateItems, removeItems, removeComp, complete} from './util.js'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      list : getItems(),
      active : 'all'
    }

    this._toggleComplete = this._toggleComplete.bind(this);
    this._handleEnter = this._handleEnter.bind(this);
    this._removeItem = this._removeItem.bind(this);
    this._removeComp = this._removeComp.bind(this);
    this._activeNav = this._activeNav.bind(this);
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

  _removeComp(active) {
    removeComp(active);
    this.setState({
      list: getItems()
    })
  }

  _activeNav(activeItem) {
    this.setState({
      active: activeItem
    })
  }

  activeList = () => this.state.list.filter((obj) => (this.state.active === 'all') ? obj : obj.tag === this.state.active );

  render() {

    return (
      <div className="app" onKeyUp={this._handleEnter}>
        <Input />
        <Nav list={this.state.list} active={this.state.active} activateNav={this._activeNav} />
        <ClearComp count={complete(this.activeList())} removeComp={this._removeComp} active={this.state.active}/>
        <List list={this.activeList()} updateChecked={this._toggleComplete} removeTodo={this._removeItem} />
      </div>
    );
  }
}


export default App;
