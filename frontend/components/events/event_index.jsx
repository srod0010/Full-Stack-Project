import React from 'react';
import { Link } from 'react-router-dom';
import EventIndexItem from './event_index_item';

class EventIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchEvents();
    }

    render() {
        let eventItems = this.props.events.map(event => {
            return <EventItemIndex event={event} key={event.id} />
        })

        return(
            <div>
                <ul>
                    {eventItems}
                </ul>
            </div>
        )
    }
}

export default EventIndex;