import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import StartPage from '../StartPage/StartPage';
import './App.css';

class App extends Component {



  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <h1>How are you feeling today?</h1>
        <Route exact path="/" component={StartPage} />
        <br/>
      </div>
      </Router>
    );
  }
}

export default App;
