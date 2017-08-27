import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { work } from "./work";
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          result below
        </p>
        <p>{work()}</p>
      
        <form>
          <input 
            type="text"
            name="todo"
          />
          <input 
            type="submit"
            value="Add todo"
          />
        </form>
        <ul>
          <li>aller aux courses</li>
        </ul>
      </div>
    );
  }
}

export default App;
