import React from 'react';
import EventForm from './event_form';

class EditEventForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.event;
    }

    componentDidMount() {
        let Id = this.props.match.params.eventId
        this.props.fetchEvent(Id);

    }

    render() {
        const { action, event } = this.props;
        return (
            <EventForm
                action={action}
                event={event} />
        );
    }
}

export default EditEventForm;