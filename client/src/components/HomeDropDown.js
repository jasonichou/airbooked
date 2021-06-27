import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, withRouter } from "react-router-dom";

class DropDown extends Component {
  onChange = (e) => {
    this.props.history.push(`/${e.target.value}`);
  }
  render() {
    return (
      <select onChange={this.onChange}>
        <option value="san-francisco">San Fracisco</option>
        <option value="santa-clara-county">Santa Clara County</option>
      </select>
    );
  }
}

export default withRouter(HomeDropDown);