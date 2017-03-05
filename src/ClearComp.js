import React, { Component } from 'react';
import './ClearComp.css';

class ClearComp extends Component {

  constructor(props) {
    super(props);

    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick(e) {
    e.preventDefault();
    this.props.removeComp(this.props.list);
  }


  render() {

    const list = this.props.list;

    let compNum = list.filter(function( obj ) {
      return obj.complete === true;
    });

    let listNum = list.length;

    const clearBtn = <div className="clear"><button onClick={this._handleClick}>Remove Completed</button></div>,
          clear = (compNum.length > 0) ? clearBtn : '';

    return (
      <div className="clear-all">
        <div className="count">
          {compNum.length} of {listNum} items completed
        </div>
        {clear}
      </div>
    )
  }

}

export default ClearComp;
