import React, { Component } from 'react';
import { Link } from 'react-router-dom'

//material ui
import Button from '@material-ui/core/Button';

class StartPage extends Component {

    render() {
        return (
            <div>
                <Link to="/feeling">
					<Button variant="contained" color="primary">Start</Button>
				</Link>
            </div>
        );
    }
}

export default StartPage;