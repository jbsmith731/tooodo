import React, { Component } from 'react';

class Nav extends Component {

  constructor(props) {
    super(props);

  }

  render() {

    const list = this.props.list.filter(function(obj) { return obj.tag })

    const navItems = list.map((listItem) =>
      <li key={listItem.id}>{listItem.tag}</li>
    );

    return (
      <nav>
        <ul>
          {navItems}
        </ul>
      </nav>
    );
  }

}

export default Nav;
