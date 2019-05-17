import React from 'react';
import { connect } from 'react-redux';

import Friend from './Friend';

class Friends extends React.Component {
    state = {
        friends: []
    }

    componentDidMount() {
        this.props.getFriends();
        //call action to get friends
    }


    render() {
        if(this.props.fetching) {
            return <div> Grabbing Friend Info </div>
        }

        return (
            <div> </div>
        )
    }
}

export default Friends;