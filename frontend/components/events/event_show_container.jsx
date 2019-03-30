import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import EventShow from './event_show';
import {fetchEvent, updateEvent, deleteEvent} from '../../actions/event_actions';
import {createJoin, removeJoin} from '../../actions/join_actions';

const mapStateToProps = (state, ownProps) => {
    let eventId = ownProps.match.params.eventId;
    let event = state.entities.events[eventId];
    let reviews = state.entities.reviews
    
    return ({
        event: event,
        reviews: Object.values(reviews),
        currentUserId: state.session.id,
        users: state.entities.users,
        join: state.entities.joins,
        guests: Object.values(state.entities.attendees),
        attendees: Object.values(state.entities.joins),
        currentUserJoin: Object.values(state.entities.joins).filter(join => join.user_id == state.session.id && join.event_id == eventId)[0]
    })
}

const mapDispatchToProps = dispatch => ({
  fetchEvent: id => dispatch(fetchEvent(id)),
  createJoin: join => dispatch(createJoin(join)),
  removeJoin: id => dispatch(removeJoin(id)),
  updateEvent: event => dispatch(updateEvent(event)),
  deleteEvent: id => dispatch(deleteEvent(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventShow);