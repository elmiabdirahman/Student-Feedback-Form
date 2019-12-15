import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

//Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'

//Default set of feedbacks
let feedBack ={
    feeling:0,
    understanding:0,
    supported:0,
    comment:''
}

// Reducer 
const feedbacksReducer = ( state = feedBack, actions ) =>{
    if (actions.type === '') {

    }
    return state
}


// The store is the big JavaScript Object that holds all of the information for our application
const storeInstance = createStore(
    combineReducers({
        feedbacksReducer
    }),    
    applyMiddleware(logger)
);


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
