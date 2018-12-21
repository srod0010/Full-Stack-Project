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
            <div className="show-container">
                <div className="show-content-container">
                    <div className="left-show">
                        <div className="left-first">
                            <li>{event.name}</li>
                        </div>
                        <div className="left-second">
                            <button className="show-signup" onClick={() => this.props.history.push('/signup')}>
                                Sign Me Up
                            </button>
                        </div>
                    </div>

                    <div className="right-show">
                        <li>{event.city}</li>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default EventShow;