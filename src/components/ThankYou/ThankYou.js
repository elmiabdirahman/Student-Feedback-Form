import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

//material ui
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

class ThankYou extends Component {
    render() {
        return (
            <div>
                
                <div >
                <h1>Thank You!</h1>
                    <Link to= '/'>
                        <Button variant="contained"
                            color="primary"
                            size="large">Leave New Feedback</Button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default connect() (ThankYou);