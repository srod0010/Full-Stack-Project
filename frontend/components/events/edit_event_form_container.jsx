import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchEvent, updateEvent } from '../../actions/event_actions';
import EditEventForm from './edit_event_form';


const mapStateToProps = (state, ownProps) => {
    let Id = ownProps.match.params.eventId

    return({
        event: state.entities.events[Id]
    })
}


const mapDispatchToProps = dispatch => ({
    fetchEvent: id => dispatch(fetchEvent(id)),
    action: (id) => dispatch(updateEvent(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(EditEventForm)

