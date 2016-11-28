import React, { Component } from 'react';
import {getItems, updateItems} from './util.js'

class Complete extends Component {

  constructor(props) {
    super(props);

    this.state = {
      complete: this.props.isComplete
    }

    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(e) {
    this.setState({complete: e.target.checked})
    updateItems(this.props.id, e.target.checked);
  }

  render() {
    return (
      <div>
        <input type="checkbox" checked={this.state.complete} onChange={this._handleChange}/>
      </div>
    )
  }

}

export default Complete;
