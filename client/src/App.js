import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Home, Map, About } from "./components";
import './App.css';
// import Map from './components/Map';
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
        <Router>
          <Navigation />
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/about" exact component={() => <About />} />
            <Route path="/map" exact component={() => <Map position={this.state} />} />

          </Switch>
          {/* <Map position={this.state} /> */}
        </Router>
      </div>
    )
  };
}

export default App;
