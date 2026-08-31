// Logic to check available coins vs required amount (1000/2000), deduct balance, generate dummy redeem code (DEMO-XXXX-YYYY), and show copyable Modal popup
function checkRedeem() {
    const availableCoins = parseFloat(localStorage.getItem('availableCoins')) || 0;
    const requiredAmount = document.getElementById('redeem-amount').value;

    if (requiredAmount === '1000') {
        if (availableCoins >= 1000) {
            const redeemCode = 'DEMO-' + Math.floor(Math.random() * 9000).toString().padStart(4, '0');
            showCopyableModal(redeemCode);
        } else {
            alert('Insufficient coins for the required amount.');
        }
    } else if (requiredAmount === '2000') {
        if (availableCoins >= 2000) {
            const redeemCode = 'DEMO-' + Math.floor(Math.random() * 9000).toString().padStart(4, '0');
            showCopyableModal(redeemCode);
        } else {
            alert('Insufficient coins for the required amount.');
        }
    }
}

function showCopyableModal(code) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <p>Redeem code: ${code}</p>
            <button id="copy-button">Copy Code</button>
        </div>
    `;
    document.body.appendChild(modal);

    const copyButton = document.getElementById('copy-button');
    copyButton.addEventListener('click', function() {
        navigator.clipboard.writeText(code).then(function() {
            alert('Code copied to clipboard!');
        }, function(err) {
            console.error('Failed to copy code:', err);
        });
    });

    modal.style.display = 'block';
    document.querySelector('.overlay').style.display = 'block';

    setTimeout(function() {
        modal.style.display = 'none';
        document.querySelector('.overlay').style.display = 'none';
    }, 5000);
}
