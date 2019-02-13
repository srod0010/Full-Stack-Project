import React from 'react';
import { withRouter } from 'react-router-dom';
import EventIndexItem from '../events/event_index_item';


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
            
            <div>
                <div>
                    {hosted}
                    {joined}
                </div>
                <h1>hello</h1>
            </div>
        )
    }

}

export default Dashboard;