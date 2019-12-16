//The `Review` step needs to have a submit button which will be clicked on to actually submit the completed feedback to the server.
//When the submit button is clicked, save the submission in the database. 
//The user should see a submission success page. 
//They can then click the button to take a new survey, which needs to reset all the data and go back to the first step.

import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Review extends Component {
    state = { 
        submitted: false, 
      }
  
      onSubmit = () => {
          axios.post('/data/feedback', this.props.payload)
          .then( (response) => {
             console.log(response.data);
          }).catch((error)=>{
              console.log('Error in post', error);
          })
  
      }

      completedFeedback = () => {
        if (this.props.reduxState.feedbacksReducer.feeling === 0) return false;
        if (this.props.reduxState.feedbacksReducer.understanding === 0) return false;
        if (this.props.reduxState.feedbacksReducer.support === 0) return false;
        if (this.props.reduxState.feedbacksReducer.comments === '') return false;
        return true;
    }

    SubmitButton = () => {
        if (!this.completedFeedback()) {
            this.props.history.push('/thankyou');
            return <button >Incomplete</button>;
            
        }
        this.props.dispatch( { type: 'RESET', payload: this.state.submitted } )
        return <button onClick={this.onSubmit}>Submit</button>;
    }
    // this.props.reduxState.artistReducer.

    render() {
        return (
            <div>
                <p >Review Your Feedback</p>
                <p >Feelings: {this.props.reduxState.feedbacksReducer.feeling}</p>
                <p >Understanding: {this.props.reduxState.feedbacksReducer.understanding}</p>
                <p >Support: {this.props.reduxState.feedbacksReducer.supported}</p>
                <p >Comments: {this.props.reduxState.feedbacksReducer.comment}</p>
                {this.SubmitButton()}
            </div>
        );
    }
}
const putReduxStateonProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateonProps) (Review);