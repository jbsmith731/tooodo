import React, { Component } from 'react';
import './nav.css';

class Nav extends Component {

  constructor(props) {
    super(props);

    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick(e) {
    e.preventDefault();
    const item = e.target;
    this.props.activateNav(item.innerHTML);
  }

  render() {

    const rawList = []

    this.props.list.map((listItem) =>
      rawList.push(listItem.tag)
    );

    const list = rawList.filter((tag) => tag !== undefined && tag !== null);

    const tags = [...new Set(list)],
          activeClass = (t) => (this.props.active === t) ? 'active' : '';

    const navItems = tags.map((tag, i) =>
      <li key={i} className={activeClass(tag)}><a href="#" onClick={this._handleClick}>{tag}</a></li>
    );

    return (
      <nav>
        <ul>
          <li className={activeClass('all')}><a href="#" onClick={this._handleClick}>all</a></li>
          {navItems}
        </ul>
      </nav>
    );
  }

}

export default Nav;
