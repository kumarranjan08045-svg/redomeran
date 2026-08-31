// Tester control logic (+500 pending, +1000 available, simulate 15th auto-transfer, reset ad limits)
document.getElementById('admin-login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate admin login process (replace with actual API call)
    if (username === 'admin' && password === 'password') {
        localStorage.setItem('isAdmin', true);
        showScreen('admin-dashboard');
    } else {
        alert('Invalid username or password. Please try again.');
    }
});

function resetAdLimits() {
    localStorage.removeItem('dailyLimit');
    localStorage.setItem('dailyLimit', 30);

    alert('Ad limits reset successfully!');
}

document.getElementById('reset-ad-button').addEventListener('click', function() {
    resetAdLimits();
});
