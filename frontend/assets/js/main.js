document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('name');
    const dateInput = document.getElementById('date');
    const calculateBtn = document.querySelector('.btn');
    const attention = document.querySelector('.attention');
    const attention2 = document.querySelector('.attention2');

    calculateBtn.addEventListener('click', () => {
        const name = nameInput.value.trim();
        const date = dateInput.value.trim();
        if (name === '' || date === '') {
            attention.style.display = 'block';
            attention2.style.display = 'none';
        } else if (!isValidDate(date)) {
            attention2.style.display = 'block';
            attention.style.display = 'none';
        } else {
            attention.style.display = 'none';
            attention2.style.display = 'none';
            // Вызов функции для отображения матрицы
            showMatrix();
        }
    });

    function isValidDate(date) {
        const regex = /^\d{2}\.\d{2}\.\d{4}$/;
        return regex.test(date);
    }

    function showMatrix() {
        // Логика для отображения матрицы
        const svg = document.getElementById('matrizca');
        // Обновить содержимое SVG
        // Пример:
        // document.getElementById('center').textContent = '1';
    }
});
