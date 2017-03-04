import React, { Component } from 'react';
import Complete from './complete';
import Remove from './remove';
import './List.css';

class List extends Component {

  constructor(props) {
    super(props);

    this._toggleComplete = this._toggleComplete.bind(this);
    this._removeTodo = this._removeTodo.bind(this);
  }

  _toggleComplete(id, checked) {
    this.props.updateChecked(id, checked)
  }

  _removeTodo(id) {
    this.props.removeTodo(id);
  }

  render() {

    const list = this.props.list;

    function completedClass(comp) {
      return (comp === true ? 'completed task-item' : 'task-item');
    }

    const fullList = list.map((listItem, i) =>
      <li key={listItem.id}>
        <Complete isComplete={listItem.complete} id={i} toggleComplete={this._toggleComplete} />
        <div className="task">
          <div className={completedClass(listItem.complete)}> {listItem.task}</div>
          <div className="created"><span className="time">{listItem.time}</span> &ndash; <span className="date">{listItem.date}</span></div>
        </div>
        <Remove removeTodo={this._removeTodo} id={i}/>
      </li>
    );

    const listClass = (list.length > 0) ? 'todo-list' : 'todo-list empty';
    const emptyList = <li>Your list is empty! Add more tooodos.</li>;

    let listItems = (list.length > 0) ? fullList : emptyList;

    return (
      <div className={listClass}>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }

}

export default List;
