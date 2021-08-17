import React, {Component } from 'react';

class Authform extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            profileImageUrl: '',
        };
    }

    

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        const { email, username, password, profileImageUrl } = this.state;
        const { heading, buttonText, signUp } = this.props;
        return (
            <div>
                <div className="row-justify-content-md-center text-center">
                    <div className="col-md-6">
                        <form onSubmit={this.handleSubmit}>
                            <h2>{heading}</h2>
                            <label htmlFor="email">Email:</label>
                            <input 
                                className="form-control" 
                                id="email" 
                                name="email" 
                                type="text" 
                                onChange={this.handleChange} 
                                value={email}
                            />
                            <label htmlFor="password">Password:</label>
                            <input 
                                className="form-control" 
                                id="password" 
                                name="password" 
                                type="password" 
                                onChange={this.handleChange} 
                                value={password}
                                />
                                {signUp && (
                                    <div>
                                        <label htmlFor="username">Username:</label>
                                            <input 
                                                className="form-control" 
                                                id="username" 
                                                name="username" 
                                                type="text" 
                                                onChange={this.handleChange} 
                                                value={username}
                                            />
                                        <label htmlFor="profileImageUrl">Profile Image URL:</label>
                                            <input 
                                                className="form-control" 
                                                id="profileImageUrl" 
                                                name="profileImageurl" 
                                                type="text" 
                                                onChange={this.handleChange} 
                                                value={profileImageUrl}
                                            />
                                    </div>
                                )}
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}




export default Authform;