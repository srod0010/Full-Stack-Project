import { connect } from "react-redux";

import { receiveJoin, deleteJoin } from "../../actions/join_actions";
import { updateEvent, deleteEvent, fetchEvents } from "../../actions/event_actions";
import Dashboard from './dashboard';


const mapStateToProps = state =>{
    // debugger;
    return  ({
    joinedEvents: Object.values(state.entities.joins)
        .filter(join => join.user_id === state.session.id)
        .map(join => state.entities.events[join.event_id]),
    hostedEvents: Object.values(state.entities.events)
        .filter(event => event.host_id === state.session.id)
})
}


const mapDispatchToProps = dispatch => {
    return ({
        deleteJoin: id => dispatch(deleteJoin(id)),
        deleteEvent: id => dispatch(deleteEvent(id)),
        updateEvent: event => dispatch(updateEvent(event)),
        fetchEvents: () => dispatch(fetchEvents())
    })
}


export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);