import React, { Component } from 'react';

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

//material ui
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));

class Feeling extends Component {

    state = {
        feeling:0,
    }

    handleFeelingChange = (event) => {
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
                <h1>How are you feeling today?</h1>
                <TextField
                    id="filled-number"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }} 
                    onChange = {this.handleFeelingChange} value={this.state.feeling}/> 
                <Link to="/understand">
                    <Button
                        variant="contained"
                        onClick = {this.handleClick}>NEXT</Button>
				</Link>
            </div>
        );
    }
}
const putReduxStateonProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateonProps) (Feeling);