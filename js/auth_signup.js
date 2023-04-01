function signUp() {
    const username = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;

    const poolData = {
        UserPoolId: 'ap-southeast-1_fuH1zjBoq',
        ClientId: '1855ip7rapu8d19einbgqvua8o'
    };

    const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

    const attributeList = [];
    const dataEmail = {
        Name: 'email',
        Value: email
    };
    const attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);
    attributeList.push(attributeEmail);

    userPool.signUp(username, password, attributeList, null, function (err, result) {
        if (err) {
            alert(err.message || JSON.stringify(err));
            return;
        }
        const cognitoUser = result.user;
        console.log('user name is ' + cognitoUser.getUsername());

        // Store the username in sessionStorage
        sessionStorage.setItem('username', cognitoUser.getUsername());

        // Show an alert message before redirecting to the products page
        alert('Sign up successful! Verify your account.');


        // Redirect to the products page
        window.location.href = 'verify.html';
    });
}
