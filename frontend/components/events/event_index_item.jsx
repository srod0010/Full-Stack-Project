import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import ProgressBar from '../progress/progress_bar';
import moment from 'moment';


const eventIndexItem = ({event,deleteEvent, image}) => {
    
    let dayOfWeek = moment(event.date).format('dddd')
    let monthDay = moment(event.date).format("MMM Do").toUpperCase();
    let eventTime = moment(event.date).format('LT');
    
    let displayAddress = `${event.location}, ${event.city}, CA`;
    
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