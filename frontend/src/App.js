import React, { Component } from 'react';
import './App.css';
import Tutors from './components/tutors'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Tutors />
      </div>
    );
  }
}

export default App;