// Update AWS SDK configuration with your AWS Region
AWS.config.update({
    region: 'ap-southeast-1'
});

// Create an instance of the Amazon Cognito Identity Provider
var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();



function verify() {
    var username = sessionStorage.getItem('username');

    var verificationCode = document.getElementById('verificationCode').value;

    // Specify the user and verification code information
    var params = {
        ClientId: '1855ip7rapu8d19einbgqvua8o',
        Username: username,
        ConfirmationCode: verificationCode
    };

    cognitoidentityserviceprovider.confirmSignUp(params, function (err, data) {
        if (err) {
            console.log(err, err.stack); // an error occurred
            alert('Verification failed. Please check your verification code and try again.'); // show error message
        } else {
            console.log(data); // successful response
            alert('Verification successful. You can now log in.'); // show success message

            // Redirect to the login page
            window.location.href = 'login.html';
        }
    })
}

// Define the resendCode function
function resendCode() {

    var username = sessionStorage.getItem('username');

    // Specify the user information
    var params = {
        ClientId: '1855ip7rapu8d19einbgqvua8o',
        Username: username
    };

    // Resend the verification code
    cognitoidentityserviceprovider.resendConfirmationCode(params, function (err, data) {
        if (err) {
            console.log(err, err.stack); // an error occurred
            alert('Verification failed. Please check your verification code and try again.'); // show error message
        } else {
            console.log(data); // successful response
            alert('Code sent again, please check your email'); // show success message
        }
    });
}