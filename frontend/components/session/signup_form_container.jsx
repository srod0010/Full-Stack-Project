import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, clearErrors, login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Signup',
        navLink: <Link to="/login">If you've already done this before, click here to login</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        clearErrors: () => dispatch(clearErrors()),
        demo: (user) => dispatch(login(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);