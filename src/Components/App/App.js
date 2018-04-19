import React, { Component } from 'react';
import './App.css';

import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Content from '../Content/Content';
import Contact from '../Contact/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Content />
        <Contact />
      </div>
    );
  }
}

export default App;
