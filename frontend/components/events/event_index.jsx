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
        let eventItems = this.props.events.map(event => {
            return <EventIndexItem event={event} key={event.id} deleteEvent={this.props.deleteEvent} />
        })

        return(
            <div className="events-wrapper">

                <div className="events-img">
                    <div className="events-img-cover"></div>
                    <div className="events-img-text">
                        <h1>Good meals</h1>
                        <h3>Are hard to make</h3>
                    </div>
                </div>
                
                <ul>
                    {eventItems}
                </ul>
                
            </div>
        )
    }
}

export default EventIndex;