import React from 'react';
import { connect } from 'react-redux';
import { fetchFriends } from '../actions';
import Friend from './Friend';

// {
//     id: 1
//     name: 'Joe',
//     age: 24,
//     email: 'joe@lambdaschool.com',
//   }


class Friends extends React.Component {
    state = {
        friends: []
    }

    componentDidMount() {
        this.props.fetchFriends();
        //call action to get friends
    }


    render() {
        if(this.props.fetching) {
            return <div> Grabbing Friend Info </div>
        }
        return (
            
            <div className="friends-container">
                {this.props.friends.map(friend => <Friend key={friend.name} friend={friend}/>)}
                <button onClick={() => {localStorage.removeItem('token')}}> Logout </button>
            </div>

        )
    }
}

const mapStateToProps = state => ({
    friends: state.friends,
    fetching: state.fetchingFriends
})


export default connect(mapStateToProps, { fetchFriends })(Friends);