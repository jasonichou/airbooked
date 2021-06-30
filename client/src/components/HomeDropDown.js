import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, withRouter } from "react-router-dom";

class HomeDropDown extends Component {
  state = {
    citySelected: "san-francisco"
  }

  handleChange = (e) => {
    this.setState({citySelected: e.target.value});
  }

  handleSubmit = (e) => {
    this.props.history.push(`/map/${this.state.citySelected}`)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Choose your city:
          <select value={this.state.citySelected} onChange={this.handleChange}>
            <option value="san-francisco">San Fracisco, CA</option>
            <option value="santa-clara-county">Santa Clara County, CA</option>
            <option value="asheville">Asheville, NC</option>
          </select>
        </label>
        <input type="submit" value="Go!" />
      </form>
    );
  }
}

export default withRouter(HomeDropDown);