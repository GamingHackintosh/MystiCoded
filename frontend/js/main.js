document.addEventListener('DOMContentLoaded', () => {
    const showRegisterForm = document.getElementById('showRegisterForm');
    const showLoginForm = document.getElementById('showLoginForm');
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');

    showRegisterForm.addEventListener('click', () => {
        registerForm.style.display = 'block';
        loginForm.style.display = 'none';
    });

    showLoginForm.addEventListener('click', () => {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    });

    // Код для формы расчета даты
    const daySelect = document.getElementById('day');
    const monthSelect = document.getElementById('month');
    const yearSelect = document.getElementById('year');
    
    // Заполнить дни
    for (let i = 1; i <= 31; i++) {
        const option = document.createElement('option');
        option.value = option.text = i;
        daySelect.add(option);
    }
    
    // Заполнить месяцы
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    months.forEach((month, index) => {
        const option = document.createElement('option');
        option.value = index + 1;
        option.text = month;
        monthSelect.add(option);
    });
    
    // Заполнить годы
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= 1900; i--) {
        const option = document.createElement('option');
        option.value = option.text = i;
        yearSelect.add(option);
    }
});
