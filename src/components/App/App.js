import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {

  componentDidMount(){
    console.log('in componentDidMount');
    this.getFeedbacks();
  }

  getFeedbacks() {
    axios({
        method: `GET`,
        url: `/feedback`
    }).then((response)=>{
        console.log('back from GET', response);
        this.setState( response.data);  
    }).catch((err)=>{
        console.log('err getting student', err);  
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
      </div>
    );
  }
}

export default App;
