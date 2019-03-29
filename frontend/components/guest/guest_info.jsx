import React from 'react';

const GuestInfo = ({guest}) => {
    let {city, email, username, id, image} = guest;
    
    return (
      <div className="guest-card">
        <img src={image} alt={username} width="100%" height="100%" />
        <h5 className="guest-info">{username}</h5>
      </div>
    );
}

export default GuestInfo;