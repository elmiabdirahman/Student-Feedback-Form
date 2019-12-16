import React, { Component } from 'react';

import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

//material ui
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));

class Comments extends Component {

    state = {
        comment:''
    }

    handleCommentChange = (event) => {
        console.log('in comments input', event.target.value);
        this.setState({
            comment: event.target.value
        })
    }

    handleCommentClick = (event) =>{
        console.log('in comments button', event.target.value);
        //dispatch here
        this.props.dispatch( { type: 'COMMENTS', payload: this.state.comment } )
    }

    render() {
        return (
            <div>
                <h1>Any Comments you want to leave?</h1>
                <TextField onChange = {this.handleCommentChange} value= {this.state.value}></TextField>
                <Link to = '/review'>
                    <Button variant="contained" onClick = {this.handleCommentClick}>NEXT</Button>
                </Link>
            </div>
        );
    }
}

export default connect() (Comments);