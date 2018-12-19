import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import EventForm from './event_form';
import { fetchEvents, createEvent } from '../../actions/event_actions';

const mapStateToProps = state => ({
    event: { name: '', description: '', location: '', city: '', date: '', open: '' }
})

const mapDispatchToPost = dispatch => ({
    fetchEvents: () => dispatch(fetchEvents()),
    action: event => dispatch(createEvent(event))
})

export default connect(mapStateToProps, mapDispatchToPost)(EventForm)