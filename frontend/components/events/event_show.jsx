import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

class EventShow extends React.Component {
    constructor(props) {
        super(props);
        this.handleSignup = this.handleSignup.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleJoin = this.handleJoin.bind(this);
        this.handleLeave = this.handleLeave.bind(this);
        
    }

    componentDidMount() {
        let Id = this.props.match.params.eventId
        this.props.fetchEvent(Id)
        
    }
    
    handleSignup(e) {
        e.preventDefault()
        return (
            this.props.history.push('/signup')
        )
    }

    handleCancel(e) {
        // debugger
        e.preventDefault()
        const {deleteEvent, event} = this.props;
        
        return (
            deleteEvent(event.id)
                .then(res => this.props.history.goBack())

        )
    }

    handleJoin(e) {
        e.preventDefault()
        const {createJoin, currentUserId, event, updateEvent} = this.props;
       
        // debugger
        event.spots -= 1;
        
            createJoin({
                user_id: currentUserId,
                event_id: event.id
            })
            updateEvent(event)
        
    }

    handleLeave(e) {
        e.preventDefault();
        // debugger
        const {removeJoin, event, updateEvent} = this.props;
        event.spots += 1;
        
        removeJoin(event.id);
        updateEvent(event)
    }

    render() {
        
        let event = this.props.event

        if (!event) {
            return <div>There is none</div>
        }
       
        let joinButton = (
          <button
            className="show-signup"
            onClick={this.handleJoin}>
            Join the event!
          </button>
        );

        
        let leaveButton = (
          <button
            className="show-signup"
            onClick={this.handleLeave}
          >
            Leave the event :(
          </button>
        );

        let signupButton = <button className="show-signup" onClick={this.handleSignup}>
                                Sign Me Up
                            </button>

       
        let deleteButton = <button className="show-signup" onClick={this.handleCancel}>
            Cancel Your Event :(
        </button>

        let capacityButton = <button className="show-signup">Event is full</button>

        let showPageButton;
        let hostEditButton = <button className="show-signup" onClick={() => this.props.history.push(`/events/${event.id}/edit`)}>Update Event</button>
        
       
        if(this.props.currentUserId) {
            if (this.props.currentUserId === event.host_id) {
                showPageButton = deleteButton;

            } else if (this.props.currentUserJoin) {
                showPageButton = leaveButton;
            } else {
                if (event.spots !== 0) {
                    showPageButton = joinButton;
                } else {
                    showPageButton = capacityButton;
                }
            }
        } else if (!this.props.currentUserId) {
            if(this.props.event.spots !== 0) {
                showPageButton = signupButton;
            } else {
                showPageButton = capacityButton;
            }
        }
        
       
        let eventDate = moment(event.date).format('LL');
        let eventTime = moment(event.date).format('LT')
    
        // debugger;
        // if (!event) {
        //     return (<div> Theres no event</div>);
        // }
        
        return (
            <div className="show-container">
                <div className="show-content-container">
                    <div className="left-show">
                        <div className="left-first">
                            <div className="left-first-inner">
                                <h2 className="event-name">Join us at {event.name}</h2>
                                <h3 className="left-date"> 🗓 {eventDate}</h3>
                                <h3 className="left-date"> ⏰ {eventTime}</h3>
                                <h3 className="left-date"> 📍 {this.props.event.location}</h3>
                                <h3 className="left-date"> 🌇 {this.props.event.city}</h3>
                                <h3 className="left-date"> {this.props.event.spots === 0 ? "🔒 Sorry, this one's full!" : `🔓${this.props.event.spots} spots left`}</h3>
                                <h3 className="left-date"> 💯 Send to a friend 💯 </h3>
                                
                            </div>
                            
                        </div>

                        <div className="left-second">
                            {showPageButton}
                            {showPageButton === deleteButton ? hostEditButton : ''}
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
                        <h3>We won't be strangers much longer!!</h3>
                        <h3>(Look for the "Meals With Strangers" sign)</h3>
                        <div className="host-pic-container">
                            <img src={event.image} width="100%" height="100%" alt=""/>
                        </div>
                        <div className="host-information">
                            <h4>Do you sometimes crave uninterrupted conversation? </h4>
                            <p>Have you ever looked at someone in the street and wished to know what it would be like to view life through their eyes? </p>
                            <h4>Do you enjoy dining out?</h4>
                            <p>If so, you've come to the right place. Join me for a meal and let's exchange stories, and learn about the world through each other.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default EventShow;