const nameInput = document.getElementById('name');
const dateInput = document.getElementById('date');
const genderInputs = document.querySelectorAll('input[name="gender"]');
const calculateButton = document.querySelector('.btn');
const attention = document.querySelector('.attention');
const attention2 = document.querySelector('.attention2');

// Function to check if all inputs are filled
function validateInputs() {
    return nameInput.value.trim() !== '' && dateInput.value.trim() !== '' && [...genderInputs].some(input => input.checked);
}

// Function to validate date format
function validateDateFormat(date) {
    const dateRegex = /^\d{2}\.\d{2}\.\d{4}$/;
    return dateRegex.test(date);
}

// Function to generate matrix
function generateMatrix(name, date, gender) {
    // Здесь должен быть ваш код для генерации матрицы
    // Вставьте соответствующие значения в SVG-элементы
    document.querySelector('.name').textContent = name;
    document.querySelector('.date_birthJS').textContent = date;
    // Добавьте логику для расчета и вставки значений в элементы SVG
}

// Event listener for calculate button
calculateButton.addEventListener('click', () => {
    if (!validateInputs()) {
        attention.style.display = 'block';
        return;
    } else {
        attention.style.display = 'none';
    }

    if (!validateDateFormat(dateInput.value)) {
        attention2.style.display = 'block';
        return;
    } else {
        attention2.style.display = 'none';
    }

    const name = nameInput.value;
    const date = dateInput.value;
    const gender = [...genderInputs].find(input => input.checked).value;

    generateMatrix(name, date, gender);
});
