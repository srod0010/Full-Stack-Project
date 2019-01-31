import React from 'react';
import { Link } from 'react-router-dom';
import EventIndexItem from './event_index_item';
import CreateEventFormContainer from './create_event_form_container';

class EventIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchEvents();
    }

    render() {
        // let eventItems = this.props.events.map(event => {
        //     return <EventIndexItem event={event} key={event.id} deleteEvent={this.props.deleteEvent} />
        // })

        let sf = this.props.events.filter(event => {
            return event.city === 'San Francisco'
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

        

        return(
            <div className="events-wrapper">
                <div className="events-pic">
                    <div className="events-layer">
                        <div className="events-pic-text">
                            <h1 className="events-outer-text">
                                GOOD CONVERSATIONS
                            </h1>
                            <h2 className="events-inner-text">They're hard to find</h2>
                        </div>
                    </div>
                </div>
                <div className='events-center-wrap'>
                    <div className="events-center-top">
                    
                    </div>
                    <div className='city-events-container'>
                        <div className="event-wrap city">
                            <h1 className="city-title-header">San Francisco <br /> 👉</h1>
                            
                        </div>
                        <ul className="city-events-list">
                            {sfEvents}
                        </ul>
                    </div>

                    <div className='city-events-container'>
                        <div className="event-wrap city">
                            <h1 className="city-title-header">New York <br /> 👉 </h1>

                        </div>
                        <ul className="city-events-list">
                            {nyEvents}
                        </ul>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default EventIndex;