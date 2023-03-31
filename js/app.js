// Not sure if this is supposed to be here..

import { Amplify, Auth, Hub } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

// SIGN UP

async function signUp() {
    try {
        const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
            email,          // optional
            phone_number,   // optional - E.164 number convention
            // other custom attributes 
        },
        autoSignIn: { // optional - enables auto sign in after user is confirmed
            enabled: true,
        }
        });
        console.log(user);
    } catch (error) {
        console.log('error signing up:', error);
    }
}

// Resend Activation Code

async function resendConfirmationCode() {
    try {
        await Auth.resendSignUp(username);
        console.log('code resent successfully');
    } catch (err) {
        console.log('error resending code: ', err);
    }
}

// Auto sign in after sign up

function listenToAutoSignInEvent() {
    Hub.listen('auth', ({ payload }) => {
        const { event } = payload;
        if (event === 'autoSignIn') {
        const user = payload.data;
        // assign user
        } else if (event === 'autoSignIn_failure') {
        // redirect to sign in page
        }
    })
}

// Sign in function

async function signIn() {
    try {
        const user = await Auth.signIn(username, password);
    } catch (error) {
        console.log('error signing in', error);
    }
}


// Sign out function

async function signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}