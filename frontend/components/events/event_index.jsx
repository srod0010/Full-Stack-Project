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
            return <EventIndexItem event={event} key={event.id} deleteEvent={this.props.deleteEvent} />
        })

        let nyEvents = ny.map(event => {
            return <EventIndexItem event={event} key={event.id} deleteEvent={this.props.deleteEvent} />
        })

        

        return(
            <div className="events-wrapper">

                <div className="events-img">
                    <div className="events-img-cover">
                        <div className="events-img-text">
                            <h1>Good meals are hard to make</h1>
                            <h3>Having a good time with strangers is not</h3>
                        </div>
                    </div>
                   

                </div>
                
                <ul>
                    {sfEvents}
                </ul>

                <ul>
                    {nyEvents}
                </ul>
                
            </div>
        )
    }
}

export default EventIndex;