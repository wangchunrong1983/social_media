import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import { socialLogin, authenticate } from '../auth';

class SocialLogin extends Component {
    constructor() {
        super();
        this.state = {
            redirectToReferrer: false
        };
    }

    responseGoogle = response => {
        const tokenId = response.tokenId;
        const user = {tokenId: tokenId};

        socialLogin(user).then(data => {
            if (data.error) {
                console.log('Error Login. Please try again..');
            } else {
                authenticate(data, () => {
                    console.log('social login response from api', data);
                    this.setState({ redirectToReferrer: true });
                });
            }
        });
    };

    render() {
        const { redirectToReferrer } = this.state;
        if (redirectToReferrer) {
            return <Redirect to="/" />;
        }

        return (
            <GoogleLogin
                clientId="780838291522-j64vj869q1s6q54vr5mpu2ejgujlej1u.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
            />
        );
    }
}

export default SocialLogin;