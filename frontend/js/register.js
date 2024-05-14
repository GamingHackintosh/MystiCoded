document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const res = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (res.ok) {
        alert('Регистрация успешна. Проверьте свою электронную почту для подтверждения.');
        window.location.href = 'verify.html';
    } else {
        alert(data.message || 'Ошибка регистрации');
    }
});
