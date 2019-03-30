import { connect } from "react-redux";
import React from "react";
import { createReview } from '../../actions/review_actions';
import ReviewForm from './review_form';


const msp = (state, ownProps) => {
    let eventID = ownProps.eventID;
    return({
        review: {body: '', rating: 1, event_id: eventID },
        eventID: eventID
       
    });
};

const mdp = dispatch => {
    return ({
        createReview: review => dispatch(createReview(review))
    })
}

export default connect(msp, mdp)(ReviewForm);