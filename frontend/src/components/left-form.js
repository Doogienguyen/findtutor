import React, { Component } from 'react';

class LeftForm extends Component {
    state = {
        username: '',
        password:'',
    }

    onUsernameChange = e => {
        this.setState({
            username: e.target.value
        })
    }

    onPasswordChange = e => {
        this.setState({
            password: e.target.value
        })
    }

    formSubmit = e => {
        e.preventDefault();

        this.props.addToUsers(this.state);

        this.setState({
            username: '',
            password: ''
        });
    }



    render() {
        return (
            <form onSubmit={this.formSubmit}>
                <div className="form-group custom-form">
                    <label>Username</label>
                    <input value={this.state.username} onChange={this.onUsernameChange} type="text" className="form-control" placeholder="Enter Username" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input value={this.state.password} onChange={this.onPasswordChange} type="text" className="form-control" placeholder="Enter Password" />
                </div>

                <button type="submit" className="btn btn-light float-right mt-5 custom-button">Login</button>
            </form>
        );
    }


}


export default LeftForm;