import React from 'react';
import { Link } from 'react-router-dom';

class EventShow extends React.Component {

    componentDidMount() {
        let Id = this.props.match.params.eventId
        this.props.fetchEvent(Id)
    }
    render() {
        let event = this.props.event
        if (!event) {
            return (<div> Theres no event</div>);
        }
        return (
            <div>
                
                   {/* <li>{console.log(event.name)}</li> */}
                   <li>{event.name}</li>
                    <h1>hey</h1>
            </div>
        );
    }
}

export default EventShow;