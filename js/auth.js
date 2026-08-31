// Dummy Phone/OTP login logic, session handling, showing/hiding screens, and logout
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const phoneNumber = document.getElementById('phone-number').value;
    const OTP = document.getElementById('otp').value;

    // Simulate a login process (replace with actual API call)
    if (phoneNumber === '1234567890' && OTP === '123') {
        localStorage.setItem('isLoggedIn', true);
        showScreen('main-dashboard');
    } else {
        alert('Invalid phone number or OTP. Please try again.');
    }
});

function logout() {
    localStorage.removeItem('isLoggedIn');
    hideScreen('login-screen');
    hideScreen('admin-tools-panel');
}

// Show/hide screens
function showScreen(screenId) {
    document.getElementById(screenId).style.display = 'block';
    document.querySelector('.overlay').style.display = 'block';
}

function hideScreen(screenId) {
    document.getElementById(screenId).style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';
}
