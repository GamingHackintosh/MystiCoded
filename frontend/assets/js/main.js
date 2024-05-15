/*=== Авторизация ===*/
function registerWithGoogle() {
    // Логика регистрации через Google
    console.log('Регистрация через Google');
}

function registerWithVK() {
    // Логика регистрации через ВКонтакте
    console.log('Регистрация через ВКонтакте');
}

function loginWithGoogle() {
    // Логика входа через Google
    console.log('Вход через Google');
}

function loginWithVK() {
    // Логика входа через ВКонтакте
    console.log('Вход через ВКонтакте');
}



document.addEventListener('DOMContentLoaded', () => {
    const userInfo = {
        name: 'Имя Пользователя',
        email: 'email@example.com',
        balance: 1000
    };

    if (document.getElementById('user-name')) {
        document.getElementById('user-name').textContent = userInfo.name;
        document.getElementById('user-email').textContent = userInfo.email;
        document.getElementById('user-balance').textContent = userInfo.balance;
    }

    const topUpForm = document.getElementById('top-up-form');
    if (topUpForm) {
        topUpForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const amount = document.getElementById('amount').value;
            console.log(`Пополнение баланса на ${amount} руб.`);
            // Логика пополнения баланса через RoboKassa
        });
    }
});
