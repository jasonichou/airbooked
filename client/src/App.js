import React, { Component } from 'react';
import './App.css';
import Map from './components/Map';
// import axios from 'axios';
// import Users from './components/users';

class App extends Component {
  state = {
    lat: 37.755,
    lng: -122.453,
    zoom: 13
  };

  render() {
    return (
      <div className="App">
        <Map position={this.state} />
      </div>
    )
  };
}

export default App;
