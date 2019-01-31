import React from 'react';
import {withRouter, Link} from 'react-router-dom';


const eventIndexItem = ({event}) => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL','AUG','SEPT','OCT','NOV','DEC'];
    let utcFull = new Date(event.date);
    
    let utcMonth = utcFull.getUTCMonth(); // 0-12 month of year
    let utcDate = utcFull.getUTCDate(); // day of month
    let utcDay = utcFull.getUTCDay(); // 0-7 day of week
    let utcHour = ((utcFull.getHours() + 11) % 12 + 1);
    let endHour = ((utcFull.getHours() + 13) % 12 + 1);

    let suffix = utcFull.getHours() >= 12 ? "PM" : "AM";
 

    let displayMonth = months[utcMonth]; // feb
    let displayDay = days[utcDay]; // sunday

    // let testDate = event.date.split('T')[1];
    let displayDate = displayMonth + ' ' + utcDate; // feb 4
    let displayAddress = `${event.location}, ${event.city}, CA`;
    let displayHour = `${utcHour} - ${endHour} ${suffix}`
    let displaySpots = `Only ${event.spots} spots left!`
    
    return (
        <div className="event-wrap">
            <Link to={`/events/${event.id}`}>
                <div className='tt-container'>
                    <div className='tt-date-pic'>
                        <div className="tt-date">
                            <p className='displayDay'>{displayDay}</p>
                            <p className='displayDate'>{displayDate}</p>
                            <p className='displayHour'>{displayHour}</p>
                            <p className='displaySpots'>{displaySpots}</p>
                        </div>
                        <div className='event-corner-pic'>
                            
                        </div>

                    </div>
                    <div className='tt-address'>
                        <h4>{displayAddress}</h4>
                    </div>
                </div>
                {/* <h3> Join us for: {event.name}</h3> */}
                    {/* <button onClick={() => deleteEvent(event.id)}>Delete</button>
                    <button onClick={() => history.push(`/events/${event.id}/edit`)}>Edit</button> */}
            
                

            </Link>
            
        </div>
        
    )
}

export default withRouter(eventIndexItem);