import React, { Component } from 'react';
import {getItems} from './util.js';
import Complete from './complete';
// import logo from './logo.svg';
// import './Input.css';

class List extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const list = getItems();

    const listItems = list.map((listItem) =>
      <li key={listItem.id}>
        <Complete />
        <div>{listItem.task}</div>
        <div>{listItem.time} {listItem.date}</div>
      </li>
    );

    return (
      <ul>
        {listItems}
      </ul>
    )
  }

}

export default List;
