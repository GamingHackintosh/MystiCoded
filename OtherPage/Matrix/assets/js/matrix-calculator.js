function calculateMatrix(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const dob = new Date(form.dob.value);

    // Логика расчета матрицы на основе даты рождения
    const matrixValues = calculateMatrixValues(dob);

    // Обновление SVG матрицы
    const matrixData = generateMatrixData(matrixValues);
    generateMatrix(matrixData);

    // Обновление значений в таблице
    updateTable(matrixValues);
}

function calculateMatrixValues(dob) {
    // Ваша логика для расчета значений матрицы на основе даты рождения
    const values = {
        n33: 7, // Пример значения для Сахасрары
        // Рассчитайте другие значения
    };
    return values;
}

function generateMatrixData(matrixValues) {
    return [
        {x: 10, y: 10, width: 50, height: 50, color: '#ae309a', textX: 35, textY: 35, value: matrixValues.n33},
        // Добавьте другие прямоугольники с позициями, цветами и значениями
    ];
}

function updateTable(matrixValues) {
    document.getElementById('n33').textContent = matrixValues.n33;
    // Обновите другие ячейки таблицы
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('matrixForm').addEventListener('submit', calculateMatrix);
});
