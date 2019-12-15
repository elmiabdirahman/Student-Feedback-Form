import React, { Component } from 'react';

import {connect} from 'react-redux';

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
                <input onChange = {this.handleCommentChange} value= {this.state.value}></input>
                <div>
                    <button onClick = {this.handleCommentClick}>NEXT</button>
                </div>
            </div>
        );
    }
}

export default connect() (Comments);