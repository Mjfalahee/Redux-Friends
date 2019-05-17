import React from 'react';
import Loader from 'react-loader-spinner';

import { connect } from 'react-redux';
import { logIn } from '../actions';

class LoginPage extends React.Component {
    state = {
        auth: {
            username: '',
            password: ''
        }
    };

    handleChanges = e => {
        this.setState({
            auth: {
                ...this.state.auth,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        this.props.logIn(this.state.auth).then(() => {
            this.props.history.push('/private');
        })
    }

    render() {
    return (
        <div className="login-container">
            <form onSubmit={this.login}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={this.handleChanges}
                    value={this.state.auth.username}> 
                </input>

                <input
                    type="text"
                    name="password"
                    placeholder="Password"
                    onChange={this.handleChanges}
                    value={this.state.auth.password}> 
                </input>

                <button>Login</button>
            </form>


            <p>The login info may or may not be: taco taco </p>
        </div>
        )
    }
}

const mapStateToProps = state => ({
    isLogin : state.isLogin
});


export default connect(mapStateToProps, { logIn })(LoginPage);