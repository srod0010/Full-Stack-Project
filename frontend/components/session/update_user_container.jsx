import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { updateCurrentUser } from '../../actions/session_actions';
import { fetchEvents } from '../../actions/event_actions';
import UpdateUserForm from './update_user_form';

const msp = (state, ownProps) => {
    let currentUser = Object.values(state.entities.users)
    return({
        currentUser: currentUser
    })
}

const mdp = dispatch => {
    return({
        updateCurrentUser: user => dispatch(updateCurrentUser(user)),
        fetchEvents: () => dispatch(fetchEvents())
    })
}

export default connect(msp, mdp)(UpdateUserForm);