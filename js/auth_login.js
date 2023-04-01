function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const authenticationData = {
        Username: username,
        Password: password,
    };

    const authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);

    const poolData = {
        UserPoolId: 'ap-southeast-1_fuH1zjBoq',
        ClientId: '1855ip7rapu8d19einbgqvua8o'
    };

    const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

    const userData = {
        Username: username,
        Pool: userPool,
    };

    const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
            const accessToken = result.getAccessToken().getJwtToken();
            console.log('Access token:', accessToken);

            // Store the access token in sessionStorage
            sessionStorage.setItem('accessToken', accessToken);
            cart = [];
            sessionStorage.setItem('cart', JSON.stringify(cart));

            // Show an alert message before redirecting to the products page
            alert('Login successful! You will now be redirected to the products page.');

            // Redirect to the products page
            window.location.href = 'shop.html';
        },

        onFailure: function (err) {
            alert(err.message || JSON.stringify(err));
        },
    });
}
