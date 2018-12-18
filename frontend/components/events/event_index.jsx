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
            <div>
                <ul>
                    {eventItems}
                </ul>
                {/* <CreateEventFormContainer /> */}
            </div>
        )
    }
}

export default EventIndex;