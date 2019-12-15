import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';

//
import {connect} from 'react-redux'
import StartPage from '../StartPage/StartPage';
import Feeling from '../Feeling/Feeling';
import Understand from '../Understand/Understand';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';

class App extends Component {

  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <Route exact path="/" component={StartPage} />
        <Route exact path="/feeling" component={Feeling} />
        <Route exact path="/understand" component={Understand} />
        <Route exact path="/support" component={Support} />
        <Route exact path="/comments" component={Comments}/>
        <Route exact path="/review" component={Review}/>
        <br/>
      </div>
      </Router>
    );
  }
}

export default  connect()(App);
