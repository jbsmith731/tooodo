import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './nav.css';

class Nav extends Component {

  constructor(props) {
    super(props);

    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick(e) {
    e.preventDefault();
    const item = e.target.textContent;
    this.props.activateNav(item);
  }

  render() {

    const rawList = []

    this.props.list.map((listItem) =>
      rawList.push(listItem.tag)
    );

    const list = rawList.filter((tag) => tag !== undefined && tag !== null);

    const tags = [...new Set(list)],
          activeClass = (t) => (this.props.active === t) ? 'active nav-link' : 'nav-link';

    const navItems = tags.map((tag, i) =>
      <li key={i} className={activeClass(tag)}><a className="nav-link" href="#" onClick={this._handleClick}>{tag}</a></li>
    );

    return (
      <nav>
        <ul>

          <ReactCSSTransitionGroup
            transitionName="nav"
            transitionEnterTimeout={600}
            transitionLeaveTimeout={600}>
            <li className={activeClass('all')}><a href="#" className={activeClass('all')} onClick={this._handleClick}>all</a></li>
            {navItems}
          </ReactCSSTransitionGroup>
        </ul>
      </nav>
    );
  }

}

export default Nav;
