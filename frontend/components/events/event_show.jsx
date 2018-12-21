import React from 'react';
import { Link } from 'react-router-dom';

class EventShow extends React.Component {

    componentDidMount() {
        let Id = this.props.match.params.eventId
        this.props.fetchEvent(Id)
    }

    getDate() {
        let newDate = this.props.event.date;
        let dateShow = newDate.slice(0,10);
        return dateShow;
    }

    getTime() {
        let time = this.props.event.date;
        let timeSlice = time.slice(11);
        return timeSlice;
    }
    render() {
        let event = this.props.event
        if (!event) {
            return (<div> Theres no event</div>);
        }
        return (
            <div className="show-container">
                <div className="show-content-container">
                    <div className="left-show">
                        <div className="left-first">
                            <div className="left-first-inner">
                                <h2 className="event-name">Join us for {event.name}</h2>
                                <h3 className="left-date"> 🗓 {this.getDate()}</h3>
                                <h3 className="left-date"> ⏰ {this.getTime()} PM</h3>
                                <h3 className="left-date"> 📍 {this.props.event.location}</h3>
                                <h3 className="left-date"> 🌇 {this.props.event.city}</h3>
                                <h3 className="left-date"> 💯 Send to a friend 💯 </h3>
                            </div>
                            
                        </div>

                        <div className="left-second">
                            <button className="show-signup" onClick={() => this.props.history.push('/signup')}>
                                Sign Me Up
                            </button>
                        </div>

                        <div className="left-third">
                            <h3 className="third-header">What exactly is meal time? <br/>
                            😋
                            </h3>
                            <p className="show-p">
Meal Time is where five-ish strangers sit at a cafe with a Host to have a two hour conversation. It's not about anything in particular.
                            </p>
                            <p className="show-p">
You're meant to know pretty much nothing about the people that come, aside from the fact that they all signed up for this — just like you. It's self-selecting in that sense.
                            </p>
                            <p className="show-p">
However, it may bring you comfort to know a little something about your Host. If so, just keep reading
                            </p>

                            <h1 className="show-last-pointer"> 👉👉👉 </h1>

                        </div>
                    </div>

                    <div className="right-show">
                        <h2 className="meet-host">Get dinner with us!</h2>
                        <h3>We won't be strangers much longer!</h3>
                        <h3>(Look for the "Meals With Strangers" sign)</h3>
                        <div className="host-pic-container">
                            <div className="host-img"></div>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default EventShow;