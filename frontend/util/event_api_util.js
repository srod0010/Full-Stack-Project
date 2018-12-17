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