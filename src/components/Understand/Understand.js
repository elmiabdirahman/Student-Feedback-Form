import React, { Component } from 'react';

import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// material ui
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
                <TextField
                    id="filled-number"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}  
                    onChange = {this.handleUnderstandChange} value = {this.state.understanding}></TextField>
                <Link to= "/support">
                    <Button 
                        variant="contained"
                        onClick = {this.handleClick}>NEXT</Button>
				</Link>
            </div>
        );
    }
}

export default connect() (Understand);