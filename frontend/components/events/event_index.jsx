import React from 'react';
import { Link } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import EventIndexItem from './event_index_item';
import CreateEventFormContainer from './create_event_form_container';

class EventIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
      // debugger
        this.props.fetchEvents();
    }

    render() {
        // let eventItems = this.props.events.map(event => {
        //     return <EventIndexItem event={event} key={event.id} deleteEvent={this.props.deleteEvent} />
        // })

        let sf = this.props.events.filter(event => {
            return (event.city === 'San Francisco' || event.city === 'sf')
        })
        let ny = this.props.events.filter(event => {
            return event.city === 'New York'
        })

        let sfEvents = sf.map(event => {
            return <EventIndexItem event={event} key={event.id} deleteEvent={this.props.deleteEvent}/>
        })

        let nyEvents = ny.map(event => {
            return <EventIndexItem event={event} key={event.id} deleteEvent={this.props.deleteEvent}/>
        })

        

        return <div className="events-wrapper">
            <div className="events-pic">
              <div className="events-layer">
                <div className="events-pic-text">
                  <h1 className="events-outer-text">
                    GOOD CONVERSATIONS
                  </h1>
                  <h2 className="events-inner-text">
                    They're hard to find
                  </h2>
                </div>
              </div>
            </div>
            <div className="events-center-wrap">
              <div className="events-center-top">
                <div className="events-center-content">
                  <div className="events-center-month">
                    <h4>📆 MEAL TIMES THIS MONTH</h4>
                  </div>
                  <div className='events-jump-times'>
                      <h5>Jump to your city's meal times</h5>
                      <div className='jump-buttons'>
                            <HashLink smooth='true' to='/events#sanfrancisco'>San Francisco</HashLink>
                            <HashLink smooth='true' to='/events#newyork'>New York</HashLink>
                            
                            
                      </div>
                  </div>
                </div>
              </div>
              <div className="city-events-container">
                <div className="event-wrap city">
                  <h1 id="sanfrancisco" className="city-title-header">
                    San Francisco <br /> 👉
                  </h1>
                </div>
                <ul className="city-events-list">{sfEvents}</ul>
              </div>

              <div className="city-events-container">
                <div className="event-wrap city">
                  <h1 id="newyork" className="city-title-header">
                    New York <br /> 👉{" "}
                  </h1>
                </div>
                <ul className="city-events-list">{nyEvents}</ul>
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
          </div>;
    }
}

export default EventIndex;