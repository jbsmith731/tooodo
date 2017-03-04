import React, { Component } from 'react';
import './complete.css';

class Complete extends Component {

  constructor(props) {
    super(props);

    this.state = {
      complete: this.props.isComplete
    }

    this._handleChange = this._handleChange.bind(this)
  }

  _handleChange(e) {
    this.props.toggleComplete(this.props.id, e.target.checked);

    this.setState({
      complete: e.target.checked
    })
  }

  render() {
    return (
      <div className="complete-container">
        <input type="checkbox" checked={this.state.complete} onChange={this._handleChange} value={this.state.complete}/>
      </div>
    )
  }

}

export default Complete;
