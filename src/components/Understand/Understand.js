import React, { Component } from 'react';

import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Understand extends Component {

    state = {
        understanding:0,
    }

    handleUnderstandChange = (event) => {
        console.log('in understanding', event.target.value);
        this.setState({
                understanding: event.target.value
        });
        
    }

    handleClick = (event) => {
        console.log('in understanding button', event.target.value);
        //dispatch
        this.props.dispatch( { type: 'UNDERSTAND', payload: this.state.understanding } )
    }

    render() {
        return (
            <div>
                <h1>How well are you understanding the content?</h1>
                <input type="text" onChange = {this.handleUnderstandChange} value = {this.state.understanding}></input>
                <Link to= "/support">
					<button onClick = {this.handleClick}>NEXT</button>
				</Link>
            </div>
        );
    }
}

export default connect() (Understand);