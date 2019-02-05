import React from 'react';
import { withRouter } from 'react-router-dom';


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hostedEvents: this.props.hostedEvents,
            joinedEvents: this.props.joinedEvents
        }
    }

    render() {
        if(!this.props.joinedEvents && !this.props.hostedEvents) {
            return <div>NO EVENTS</div>
        }
        return(
            <h1>hey</h1>
        )
    }

}

export default Dashboard;