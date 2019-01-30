import React from 'react';
import {withRouter, Link} from 'react-router-dom';


const eventIndexItem = ({event}) => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL','AUG','SEPT','OCT','NOV','DEC'];
    let utcFull = new Date(event.date);
    
    let utcMonth = utcFull.getUTCMonth(); // 0-12 month of year
    let utcDate = utcFull.getUTCDate(); // day of month
    let utcDay = utcFull.getUTCDay(); // 0-7 day of week
    let utcHour = utcFull.getHours() % 12;

    let displayMonth = months[utcMonth]; // feb
    let displayDay = days[utcDay]; // sunday

    let displayDate = displayMonth + ' ' + utcDate; // feb 4
    let displayAddress = `${event.location}, ${event.city}, CA`;

    
    return (
        <div className="event-wrap">
            <h5>{displayDay}</h5>
            <h3>{displayDate}</h3>
            <h3> Join us for: {event.name}</h3>
            <ul>
                
                {/* <h5>{event.description}</h5> */}
                <h4>{displayAddress}</h4>
                <h4>{utcHour}</h4>
                <button onClick={() => deleteEvent(event.id)}>Delete</button>
                <button onClick={() => history.push(`/events/${event.id}/edit`)}>Edit</button>
                <Link to={`/events/${event.id}`}>show</Link>
            </ul>
            
        </div>
    )
}

export default withRouter(eventIndexItem);