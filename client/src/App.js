import React, { Component } from 'react';
import './App.css';
// import axios from 'axios';
// import Map from './components/Map.js';

import Users from './components/users'

class App extends Component {
  state = {
    users: []
  };
  
  componentDidMount() {
    fetch('http://localhost:3000/api/user')
    .then(res => res.json())
    .then((data) => {
      this.setState({ users: data })
    })
    .catch(console.log)
  };

  render () {
    return (
      <Users users={this.state.users} />
    )
  }
}

export default App;
