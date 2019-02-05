import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import EventShow from './event_show';
import {fetchEvent, updateEvent} from '../../actions/event_actions';
import {createJoin, removeJoin} from '../../actions/join_actions';

const mapStateToProps = (state, ownProps) => {
    let eventId = ownProps.match.params.eventId;
    let event = state.entities.events[eventId];
    // let hostId = state.entities.events[eventId].host_id;
    
    // debugger;
    return ({
        // host: hostId,
        event: event,
        currentUserId: state.session.id,
        users: state.entities.users,
        join: state.entities.joins,
        
        currentUserJoin: Object.values(state.entities.joins).filter(join => join.user_id == state.session.id && join.event_id == eventId)[0]
    })
}

const mapDispatchToProps = dispatch => ({
  fetchEvent: id => dispatch(fetchEvent(id)),
  createJoin: join => dispatch(createJoin(join)),
  removeJoin: id => dispatch(removeJoin(id)),
  updateEvent: event => dispatch(updateEvent(event))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventShow);