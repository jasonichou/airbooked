import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Home, Map, About } from "./components";
import './App.css';
// import Map from './components/Map';
// import axios from 'axios';
// import Users from './components/users';

class App extends Component {
  

  render() {
    return (
      <div className="App">
        <Router>
          <Navigation />
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/about" exact component={() => <About />} />
            <Route path="/map/:city" exact component={() => <Map />}/>
            {/* <Route path="/map" exact component={() => <Map position={this.state} />} /> */}

          </Switch>
          {/* <Map position={this.state} /> */}
        </Router>
      </div>
    )
  };
}

export default App;
