export const fetchEvents = () => {
    return (
        $.ajax({
            method: 'GET',
            url: 'api/events',
            error: (err) => console.log(err)
        })
    )
}


export const createEvent = event => {
    return (
        $.ajax({
            method: 'POST',
            url: 'api/events',
            data: { event }
        })
    )
}

export const updateEvent = event => {
    return (
        $.ajax({
            method: 'PATCH',
            url: `api/events/${event.id}`,
            data: { event }
        })
    )
}

export const deleteEvent = id => {
    return (
        $.ajax({
            method: 'DELETE',
            url: `api/events/${id}`
        })
    )
}