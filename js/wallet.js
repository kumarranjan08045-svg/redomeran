// State management for pendingCoins and availableCoins
const pendingCoins = localStorage.getItem('pendingCoins') || 0;
const availableCoins = localStorage.getItem('availableCoins') || 0;

function transferPendingToAvailable() {
    if (pendingCoins > 0) {
        const newAvailableCoins = parseFloat(availableCoins) + parseFloat(pendingCoins);
        localStorage.setItem('availableCoins', newAvailableCoins);
        localStorage.removeItem('pendingCoins');
    }
}

// 5-second simulation countdown, Captcha verification logic, updating pendingCoins (+25), and decrementing daily limit (30 max)
function startCaptchaChallenge() {
    // Simulate a CAPTCHA challenge (replace with actual API call)
    if (Math.random() < 0.8) {
        return true;
    } else {
        alert('Please solve the captcha.');
        return false;
    }
}

document.getElementById('captcha-input').addEventListener('input', function(event) {
    const userInput = event.target.value;

    if (!startCaptchaChallenge()) {
        // Clear input on invalid CAPTCHA
        event.target.value = '';
    } else if (userInput === 'captcha-solution') {
        transferPendingToAvailable();
        alert('Coins transferred successfully!');
        updateDailyLimit();
    }
});

function updateDailyLimit() {
    const dailyLimit = localStorage.getItem('dailyLimit') || 30;
    const newDailyLimit = Math.min(dailyLimit + 1, 45);
    localStorage.setItem('dailyLimit', newDailyLimit);

    if (newDailyLimit === 45) {
        alert('Your daily limit has been reached. Please transfer coins to earn more.');
    }
}
