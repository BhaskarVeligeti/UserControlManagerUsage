import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {LoginPage}  from './pages/loginPage'

class App extends Component {
  render() {
    return (
      <div >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
<div className="App">
        <LoginPage />
      </div>
      <hr />
      </div>
    );
  }
}

export default App;
