import React from 'react';

const eventIndexItem = (props) => (
    <div>
        <h1>{props.event.name}</h1>
        <ul>
            <li>{props.event.description}</li>
            <li>{props.event.location}</li>
            <li>{props.event.city}</li>
            <li>{props.event.date}</li>
            <button onClick={() => props.deleteEvent(props.event.id)}>Delete</button>
        </ul>
    </div>
)

export default eventIndexItem;