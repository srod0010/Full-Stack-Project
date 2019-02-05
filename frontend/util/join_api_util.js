import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';


export const createJoin = join => {
    return (
        $.ajax({
            method: 'POST',
            url: 'api/joins',
            data: { join }
        })
    )
}


export const deleteJoin = id => {
    return (
        $.ajax({
            method: 'DELETE',
            url: `api/joins/${id}`
        })
    )
}