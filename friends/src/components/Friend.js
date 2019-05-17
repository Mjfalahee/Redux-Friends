import React from 'react';

function Friend(props) {
    console.log(props);
    return(
        <div>
            <h3>{props.friend.name}</h3>
            <p>Age: {props.friend.age}</p>
            <p>Email: {props.friend.email} </p>
        </div>
    );
}

export default Friend;