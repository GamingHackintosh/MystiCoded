document.getElementById('verifyForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const verificationCode = document.getElementById('verificationCode').value;

    const res = await fetch('http://localhost:3000/verify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ verificationCode }),
    });

    const data = await res.json();
    if (res.ok) {
        alert('Email подтвержден. Теперь вы можете войти.');
        window.location.href = 'login.html';
    } else {
        alert(data.message || 'Ошибка подтверждения');
    }
});
