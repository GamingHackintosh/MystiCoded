document.addEventListener('DOMContentLoaded', async () => {
    const token = localStorage.getItem('token');
    if (!token) {
        window.location.href = 'login.html';
        return;
    }

    const res = await fetch('http://localhost:3000/user/dashboard', {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });

    const data = await res.json();
    if (res.ok) {
        document.getElementById('userInfo').innerHTML = `
            <p>Username: ${data.username}</p>
            <p>Balance: $${data.balance}</p>
        `;
    } else {
        alert('Failed to fetch user data');
    }
});

document.getElementById('topupForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const amount = document.getElementById('amount').value;
    const token = localStorage.getItem('token');

    const res = await fetch('http://localhost:3000/user/topup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ amount }),
    });

    const data = await res.json();
    if (res.ok) {
        const stripe = Stripe('your_stripe_public_key');
        const result = await stripe.confirmCardPayment(data.clientSecret);
        if (result.error) {
            alert('Payment failed');
        } else {
            alert('Payment successful');
            window.location.reload();
        }
    } else {
        alert('Top up failed');
    }
});
