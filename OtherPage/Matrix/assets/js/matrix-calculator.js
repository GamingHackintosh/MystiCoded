 // Функция для расчета значений матрицы
function calculateMatrixValues(n1, n2, n3, n4, n5, n6, n7, n8) {
    return {
        n33: n1 + n5,
        n34: n3 + n7,
        n35: n5 + n7,
        n36: n2 + n6,
        n37: n4 + n8,
        n38: n6 + n8,
        n39: n1 + n3,
        n40: n5 + n7,
        n41: n3 + n5,
        n42: n2 + n4,
        n43: n6 + n8,
        n44: n4 + n6,
        n45: n1 + n5 + n7,
        n46: n3 + n5 + n7,
        n47: n3 + n5 + n7,
        n48: n2 + n6 + n8,
        n49: n4 + n6 + n8,
        n50: n4 + n6 + n8,
        n51: n1 + n3 + n5 + n7,
        n52: n2 + n4 + n6 + n8,
        n53: n1 + n4 + n7 + n8
    };
}

// Функция для преобразования даты рождения в числа для матрицы
function getNumbersFromDate(day, month) {
    const n1 = day;
    const n2 = month;
    const n3 = day + month;
    const n4 = Math.abs(day - month);
    const n5 = Math.floor(day / 2);
    const n6 = Math.floor(month / 2);
    const n7 = day * 2;
    const n8 = month * 2;
    return { n1, n2, n3, n4, n5, n6, n7, n8 };
}

// Функция для заполнения таблицы
function populateTable(values) {
    for (const key in values) {
        if (values.hasOwnProperty(key)) {
            const cell = document.getElementById(key);
            if (cell) {
                cell.textContent = values[key];
            }
        }
    }
}

// Функция для заполнения SVG
function populateSVG(values) {
    for (const key in values) {
        if (values.hasOwnProperty(key)) {
            const element = document.querySelector(`[data-id="${key}"]`);
            if (element) {
                element.textContent = values[key];
            }
        }
    }
}

// Пример использования
document.addEventListener('DOMContentLoaded', () => {
    const day = 12; // Пример дня рождения
    const month = 8; // Пример месяца рождения
    const numbers = getNumbersFromDate(day, month);
    const matrixValues = calculateMatrixValues(numbers.n1, numbers.n2, numbers.n3, numbers.n4, numbers.n5, numbers.n6, numbers.n7, numbers.n8);
    populateTable(matrixValues);
    populateSVG(matrixValues);
});