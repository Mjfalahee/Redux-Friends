import React from 'react';


class LoginPage extends React.Component {
    state = {
        auth: {
            username: '',
            password: ''
        }
    };

    render() {
    return (
        <div className="login-container">
            <form onSubmit=''>
                <input
                    type="text"
                    name="username"
                    value={this.state.auth.username}> 
                </input>

                <input
                    type="text"
                    name="username"
                    value={this.state.auth.password}> 
                </input>

                <button>Login</button>
            </form>
        </div>
        )
    }
}

export default LoginPage;