import React from 'react';
import {withRouter, Link} from 'react-router-dom';


const eventIndexItem = ({event}) => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let utcDate = new Date(event.date);
    let utcDay = utcDate.getUTCDay();

    let displayDay = days[utcDay];
    
    return (
        <div className="event-wrap">
            <h3>{displayDay}</h3>
            <h1 className="event-header">Join us for: {event.name}</h1>
            <ul>
                <div className="event-date">
                    <h3>{event.date}</h3>
                </div>
                <li>{event.description}</li>
                <li>{event.location}</li>
                <li>{event.city}</li>
                <button onClick={() => deleteEvent(event.id)}>Delete</button>
                <button onClick={() => history.push(`/events/${event.id}/edit`)}>Edit</button>
                <Link to={`/events/${event.id}`}>show</Link>
            </ul>
            
        </div>
    )
}

export default withRouter(eventIndexItem);