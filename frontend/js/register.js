// register.js
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    })
    .then(res => res.json())
    .then(data => {
        if (res.ok) {
            alert('Registration successful! Check your email for the verification code.');
            // Дополнительная логика после регистрации
        } else {
            throw new Error(data.message || 'Registration failed');
        }
    })
    .catch(err => alert(err.message));
});