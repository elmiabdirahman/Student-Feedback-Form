import React, { Component } from 'react';

import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

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
                <TextField
                    id="filled-number"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }} 
                     onChange = {this.handleSupportChange} value = {this.state.supported}></TextField>
                <Link to = '/comments'>
                    <Button onClick= {this.handleSupportClick}>NEXT</Button>
                </Link>
            </div>
        );
    }
}

export default connect() (Support);