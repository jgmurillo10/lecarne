import React, { Component } from 'react';
import Form from './Form.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h2>Welcome to Le carne</h2>

        <p className="App-intro">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Form/>
        </div>
      </div>
    );
  }
}

export default App;
