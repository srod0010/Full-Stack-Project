import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import EventIndex from './event_index';
import {fetchEvents} from '../../actions/event_actions';


const mapStateToProps = state => ({
    events: Object.values(state.entities.events)
})

const mapDispatchToProps = dispatch => ({
    fetchEvents: () => dispatch(fetchEvents())
})

export default connect(mapStateToProps, mapDispatchToProps)(EventIndex);