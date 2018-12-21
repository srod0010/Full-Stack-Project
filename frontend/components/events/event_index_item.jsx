import React from 'react';
import {withRouter, Link} from 'react-router-dom';


const eventIndexItem = (props) => (

    <div className="event-wrap">
        <h1 className="event-header">Join us for: {props.event.name}</h1>
        <ul>
            <div className="event-date">
                <h3>{props.event.date}</h3>
            </div>
            <li>{props.event.description}</li>
            <li>{props.event.location}</li>
            <li>{props.event.city}</li>
            <button onClick={() => props.deleteEvent(props.event.id)}>Delete</button>
            <button onClick={() => props.history.push(`/events/${props.event.id}/edit`)}>Edit</button>
            <Link to={`/events/${props.event.id}`}>show</Link>
        </ul>
        {/* <div className="event-info-pic">
            <img src="https://cdn.dribbble.com/users/738700/screenshots/2689482/icon_city_02-02___.png" height="90" width="90"/>
        </div> */}
    </div>
)

export default withRouter(eventIndexItem);