import React, { Component } from 'react';

class Complete extends Component {

  constructor(props) {
    super(props);

    this.state = {
      complete: false
    }
    
    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(e) {
    this.setState({complete: e.target.checked})
  }

  render() {
    return (
      <div>
        <input type="checkbox" onChange={this._handleChange}/>
      </div>
    )
  }

}

export default Complete;
