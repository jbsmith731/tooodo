import React, { Component } from 'react';
import './ClearComp.css';

class ClearComp extends Component {

  constructor(props) {
    super(props);

    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick(e) {
    e.preventDefault();
    this.props.removeComp(this.props.active);
    if (this.props.count.total - 1 < 1) {
      this.props.activateNav('all');
    }
  }


  render() {
    // const list = this.props.list;
    const count = this.props.count;
    const clearBtn = <div className="clear"><button onClick={this._handleClick}>Remove Completed</button></div>,
          clear = ( count.complete > 0) ? clearBtn : '';

    return (
      <div className="clear-all">
        <div className="count">
          {count.complete} of {count.total} items completed
        </div>
        {clear}
      </div>
    )
  }

}

export default ClearComp;
