document.addEventListener("DOMContentLoaded", function() {
    const daySelect = document.getElementById('day');
    const monthSelect = document.getElementById('month');
    const yearSelect = document.getElementById('year');

    // Заполняем дни
    for (let i = 1; i <= 31; i++) {
        let option = document.createElement('option');
        option.value = option.textContent = i;
        daySelect.appendChild(option);
    }
    
    // Заполняем месяцы
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    months.forEach((month, index) => {
        let option = document.createElement('option');
        option.value = index + 1; // value от 1 до 12
        option.textContent = month;
        monthSelect.appendChild(option);
    });
    
    // Заполняем годы
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= 1900; i--) {
        let option = document.createElement('option');
        option.value = option.textContent = i;
        yearSelect.appendChild(option);
    }
});
