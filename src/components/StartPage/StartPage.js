import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class StartPage extends Component {

    render() {
        return (
            <div>
                <Link to="/feeling">
                    <h1>Hello </h1>
					<button >Start</button>
				</Link>
            </div>
        );
    }
}

export default StartPage;