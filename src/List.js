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
    this._handleClick = this._handleClick.bind(this);
  }

  _toggleComplete(id, checked) {
    this.props.updateChecked(id, checked)
  }

  _removeTodo(id) {
    this.props.removeTodo(id);
    if (this.props.list.length - 1 < 1) {
      this.props.activateNav('all');
    }
  }

  _handleClick(e) {
    e.preventDefault();
    const item = e.target.textContent.split('#')[1];
    this.props.activateNav(item);
  }

  render() {

    const list = this.props.list,
          listNum = list.length;

    const completedClass = (comp) => (comp === true) ? 'completed task-item' : 'task-item',
          important = (imp) => (imp === true) ? 'important' : '';

    const tag = (tag) => (tag) ? <a href="#" onClick={this._handleClick}>#{tag}</a> : '';

    const fullList = list.map((task, i) =>
      <li key={task.id} className={important(task.important)}>
        <Complete isComplete={task.complete} id={task.id} toggleComplete={this._toggleComplete} />
        <div className="task">
          <div className={completedClass(task.complete)}><span className="task-text">{task.task}</span> {tag(task.tag)}</div>
          <div className="created"><span className="time">{task.time}</span> &ndash; <span className="date">{task.date}</span></div>
        </div>
        <Remove removeTodo={this._removeTodo} id={task.id} />
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
            transitionEnterTimeout={300}
            transitionLeave={false}>
            {listItems}
            </ReactCSSTransitionGroup>
        </ul>
      </div>
    )
  }

}

export default List;
