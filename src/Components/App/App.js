import React, { Component } from 'react';
import './App.css';

import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
      </div>
    );
  }
}

export default App;
