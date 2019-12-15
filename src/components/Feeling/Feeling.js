import React, { Component } from 'react';

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Feeling extends Component {

    state = {
        feeling:0,
    }

    handleChange = (event) => {
        console.log('in input feelings', event.target.value);
        this.setState({
            feeling:event.target.value
        })
    }

    handleClick = (event) => {
        console.log('feeling handle click', event.target.value);
        this.props.dispatch( { type: 'FEELING', payload: this.state.feeling } )
        
    }


    render() {
        return (
            <div>
                <h1>Hello are you feeling today?</h1>
                <input type = "number" onChange = {this.handleChange} value={this.state.feeling}/> 
                <Link to="/understand">
					<button onClick = {this.handleClick}>next</button>
				</Link>
            </div>
        );
    }
}
const putReduxStateonProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateonProps) (Feeling);