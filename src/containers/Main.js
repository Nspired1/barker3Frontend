import React from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import Homepage from "../components/Homepage";
import Authform from "../components/Authform";

const Main = props => {
    return (
        <div className="container">
            <Switch>
                <Route exact path="/" render={props => <Homepage {...props}/> } />
                <Route exact path="/signin" render= {props => {
                    return(
                        <Authform buttonText="Log In" heading="Welcome Back" {...props} />
                    )
                }} />
                <Route exact path="/signup" render= {props => {
                    return(
                        <Authform signUp buttonText="Sign Up!" heading="Join Barker today." {...props} />
                    )
                }} />
            </Switch>
        </div>
    )
}

function mapStateToProps(state){
    return {
        currentUser: state.currentUser,
        errors: state.errors
    };
}

export default withRouter(connect(mapStateToProps, null)(Main));

//error message: Error: You must pass a component to the function returned by connect. Instead received {}