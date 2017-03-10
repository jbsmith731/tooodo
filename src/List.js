import React, { Component } from 'react';
import Complete from './complete';
import Remove from './remove';
import './List.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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

    const list = this.props.list,
          listNum = list.length;

    const completedClass = (comp) => (comp === true) ? 'completed task-item' : 'task-item',
          important = (imp) => (imp === true) ? 'important' : '';

    const fullList = list.map((listItem, i) =>
      <li key={listItem.id} className={important(listItem.important)}>
        <Complete isComplete={listItem.complete} id={listItem.id} toggleComplete={this._toggleComplete} />
        <div className="task">
          <div className={completedClass(listItem.complete)}><span className="task-text">{listItem.task}</span></div>
          <div className="created"><span className="time">{listItem.time}</span> &ndash; <span className="date">{listItem.date}</span></div>
        </div>
        <Remove removeTodo={this._removeTodo} id={listItem.id}/>
      </li>
    );

    const listClass = (listNum > 0) ? 'todo-list' : 'todo-list empty';
    const emptyList = <li>Your list is empty! Add more tooodos.</li>;
    const listItems = (listNum > 0) ? fullList : emptyList;

    return (
      <div className={listClass}>
        <ul>
          <ReactCSSTransitionGroup
            transitionName="task"
            transitionEnterTimeout={600}
            transitionLeaveTimeout={300}>
            {listItems}
            </ReactCSSTransitionGroup>
        </ul>
      </div>
    )
  }

}

export default List;
