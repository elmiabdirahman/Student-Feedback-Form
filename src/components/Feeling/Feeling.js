import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Feeling extends Component {

    render() {
        return (
            <div>
                <h1>Hello are you feeling today?</h1>
                <input type = "number" onClick = {this.handleChange} value={this.state.feeling}/> 
                <Link to="/understand">
					<button>next</button>
				</Link>
            </div>
        );
    }
}

export default Feeling;