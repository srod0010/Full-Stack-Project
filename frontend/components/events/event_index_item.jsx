import React from 'react';
import {withRouter} from 'react-router-dom';

const eventIndexItem = (props) => (
    <div className="event-wrap" onClick={() => props.history.push(`/events/${props.event.id}/edit`)}>
        <h1 className="event-header">Join us for: {props.event.name}</h1>
        <ul>
            <li>{props.event.date}</li>
            <li>{props.event.description}</li>
            <li>{props.event.location}</li>
            <li>{props.event.city}</li>
            <button onClick={() => props.deleteEvent(props.event.id)}>Delete</button>
        </ul>
    </div>
)

export default withRouter(eventIndexItem);