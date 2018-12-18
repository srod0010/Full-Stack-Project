import React from 'react';

const eventIndexItem = (props) => (
    <div>
        <h1>{props.event.name}</h1>
        <ul>
            <li>{props.event.description}</li>
            <li>{props.event.location}</li>
            <li>{props.event.city}</li>
        </ul>
    </div>
)

export default eventIndexItem;