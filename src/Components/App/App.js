import React, { Component } from 'react';
import './App.css';

import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Content from '../Content/Content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
