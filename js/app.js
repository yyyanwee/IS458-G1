// Get the username from sessionStorage
const username = sessionStorage.getItem('username');

console.log(username);

// Get references to the login and logout div elements
const loginDiv = document.getElementById('acc-login');
const logoutDiv = document.getElementById('acc-logout');

// Show/hide the div elements based on the username value
if (username !== null && username !== '') {
    loginDiv.style.display = 'flex';
    logoutDiv.style.display = 'none';
} else {
    loginDiv.style.display = 'none';
    logoutDiv.style.display = 'flex';
}

const management = document.getElementById('management');

if (username == 'brandon.chris972@gmail.com') {
    management.style.display = 'flex';
} else {
    management.style.display = 'none';
}


function logout() {
    // Clear the sessionStorage
    sessionStorage.clear();

    alert('You have been logged out. You will now be redirected to the home page.');

    // Redirect to index.html
    window.location.href = "index.html";
}
