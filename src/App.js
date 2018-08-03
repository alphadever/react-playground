import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          hi, I'am a React App !!!
      </h1>
      <Person name="Max" age="28"> my hobby is tennis </Person>
      <Person name="Behzad" age="22"/>
      <Person name="Jack" age="26"/>
      </div>
    );
  }
}

export default App;