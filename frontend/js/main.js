// main.js
document.addEventListener('DOMContentLoaded', function() {
    const token = localStorage.getItem('token');

    document.getElementById('showRegisterForm').addEventListener('click', function() {
        // Показать форму регистрации
        document.getElementById('registerForm').style.display = 'block';
    });

    document.getElementById('showLoginForm').addEventListener('click', function() {
        // Показать форму входа
        document.getElementById('loginForm').style.display = 'block';
    });

    if (token) {
        fetch('http://localhost:3000/user/dashboard', {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
        .then(res => res.json())
        .then(data => {
            if (res.ok) {
                document.getElementById('userInfo').innerHTML = `
                    <p>Username: ${data.username}</p>
                    <p>Balance: $${data.balance}</p>
                `;
            } else {
                alert('Failed to fetch user data');
            }
        })
        .catch(err => console.error(err));
    }
    
    document.getElementById('topupForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const amount = document.getElementById('amount').value;

        fetch('http://localhost:3000/user/topup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({ amount }),
        })
        .then(res => res.json())
        .then(data => {
            if (res.ok) {
                const stripe = Stripe('your_stripe_public_key');
                return stripe.confirmCardPayment(data.clientSecret);
            } else {
                throw new Error('Top up failed');
            }
        })
        .then(result => {
            if (result.error) {
                alert('Payment failed');
            } else {
                alert('Payment successful');
                window.location.reload();
            }
        })
        .catch(err => alert(err.message));
    });
});