import React, { Component } from 'react';

import {connect} from 'react-redux'

class Support extends Component {

    state = {
        supported:0,
    }

    handleSupportChange = (event) => {
        console.log('in support input', event.target.value);
        this.setState({
            supported: event.target.value
        })
        
    }

    handleSupportClick = (event) =>{
        console.log('in support button', event.target.value);
        //dispatch here
        this.props.dispatch( { type: 'SUPPORT', payload: this.state.supported } )
    }

    render() {
        return (
            <div>
                <h1>How well are you being supported?</h1>
                <input type ="text" onChange = {this.handleSupportChange} value = {this.state.supported}></input>
                <div>
                    <button onClick= {this.handleSupportClick}>NEXT</button>
                </div>
            </div>
        );
    }
}

export default connect() (Support);