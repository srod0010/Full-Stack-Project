import React from 'react';
import { withRouter } from 'react-router-dom';
import EventIndexItem from '../events/event_index_item';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hostedEvents: this.props.hostedEvents,
            joinedEvents: this.props.joinedEvents
        }
    }

    componentDidMount() {
        this.props.fetchEvents()
    }

    render() {
        if(!this.props.joinedEvents && !this.props.hostedEvents) {
            return <div>NO EVENTS</div>
        }
        let hosted = this.props.hostedEvents.map(event => {
            return <EventIndexItem event={event} key={event.id} deleteEvent={this.props.deleteEvent} />
        })

        let joined = this.props.joinedEvents.map(event => {
            return <EventIndexItem event={event} key={event.id} deleteEvent={this.props.deleteEvent} />
        })

        // debugger
        return(
            
            <div className="dashboard-wrapper">
                <div className="dashboard-content">
                    <div className="dashboard-content-text"> 
                        <h1>Welcome Home!</h1>
                        <h3>See all the events you are involved in!</h3>

                    </div>
                    <div className="dashboard-events-wrapper">
                        <div className="dashboard-content-text host">
                            <h1>Events you are hosting</h1>
                        </div>
                        <div className="dashboard-events">
                            {hosted}
                        </div>

                    </div>

                    <div className="dashboard-events-wrapper">
                        <div className="dashboard-content-text host">
                            <h1>Events you are attending</h1>
                        </div>
                        <div className="dashboard-events">
                            {joined}
                        </div>

                    </div>
                </div>
                <footer className="home-footer">
                    <div className="list">
                        <div className="list-position">
                            <a className="no-cursor" href="#">
                                About
                  </a>
                            <Link to="/events">Meal Times</Link>
                            <a className="no-cursor" href="#">
                                Facebook
                  </a>
                            <a href="https://www.linkedin.com/in/sfrodrigues/">
                                LinkedIn
                  </a>
                            <br />
                            <a className="no-cursor" href="#">
                                Terms of Service
                  </a>
                            <a className="no-cursor" href="#">
                                Privacy Policy
                  </a>
                        </div>
                    </div>
                    <div className="aboutus">
                        <p>
                            Meals With Strangers is all about making our cities
                            feel more like neighborhoods. We're more "connected"
                            than ever before, but we're also more alone. And all
                            we want to do is bring people together because, well,
                            the world is better that way.
                </p>
                        <p>
                            We're not doing anything groundbreaking. We're
                            creating something that would've been incredibly
                            unnecessary 20 years ago. But while we get busier,
                            it's easy to forget the value of a conversation for no
                            reason. A conversation that's intentionally
                            unintentional.
                </p>
                    </div>
                </footer>
                
            </div>

            

            
        )
    }

}

export default Dashboard;