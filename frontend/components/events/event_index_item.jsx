import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import ProgressBar from '../progress/progress_bar';
import moment from 'moment';


const eventIndexItem = ({event,deleteEvent, image}) => {
    ///// moment calc ////////////
    let dayOfWeek = moment(event.date).format('dddd')
    let monthDay = moment(event.date).format("MMM Do").toUpperCase();
    let eventTime = moment(event.date).format('LT');

    ///////// old date calc /////////////
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL','AUG','SEPT','OCT','NOV','DEC'];
    let utcFull = new Date(event.date);
    
    // debugger
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
    let displaySpots = `${event.spots} spots left!`
  let images = [
    "https://cdn0.iconfinder.com/data/icons/city-elements-9/128/City_New_York-512.png",
    "https://cdn3.iconfinder.com/data/icons/vol-1-1/128/bridge-512.png"
  ];
  let imageSource;

  if (event.city === 'San Francisco') {
    imageSource = images[1];
  } else {
    imageSource = images[0];
  }
    
    
    return <div className="event-wrap">
        <Link to={`/events/${event.id}`}>
          <div className="tt-container">
            <div className="tt-date-pic">
              <div className="tt-date">
                <p className="displayDay">{dayOfWeek}</p>
                <p className="displayDate">{monthDay}</p>
                <p className="displayHour">{eventTime}</p>
               
              </div>
              <div className="event-corner-pic">
              <img src={image} alt="" height='100%' width='100%' background-color='black' />
              </div>
            </div>
            <div className="tt-address">
              <h4>{displayAddress}</h4>
              
            </div>
          
          </div>
          <div className="displaySpots">
            <p>{displaySpots}</p>
            <div className="spots-images">
              
              <ProgressBar spots={event.spots}/>
            </div>
           
          </div>
        </Link>
      </div>;
}

export default withRouter(eventIndexItem);