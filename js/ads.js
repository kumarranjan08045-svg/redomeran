// Ad watch trigger, 5-second simulation countdown, Captcha verification logic, updating pendingCoins (+25), and decrementing daily limit (30 max)
function startAdWatch() {
    // Simulate an ad watch process (replace with actual API call)
    if (Math.random() < 0.8) {
        return true;
    } else {
        alert('Please solve the captcha.');
        return false;
    }
}

document.getElementById('ad-watch-button').addEventListener('click', function() {
    if (!startAdWatch()) {
        // Clear button on invalid CAPTCHA
        document.getElementById('ad-watch-button').disabled = true;
        setTimeout(function() {
            document.getElementById('ad-watch-button').disabled = false;
        }, 5000);
    } else {
        pendingCoins += 25;
        localStorage.setItem('pendingCoins', pendingCoins);

        alert('Ad watched successfully!');
        updateDailyLimit();
    }
});
