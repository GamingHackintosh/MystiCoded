document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('matrixForm');
    form.addEventListener('submit', calculateMatrix);
});

function calculateMatrix(event) {
    event.preventDefault();

    const dateOfBirth = document.getElementById('date').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    if (!dateOfBirth) {
        alert("Пожалуйста, введите дату рождения.");
        return;
    }

    const matrixValues = calculateMatrixValues(dateOfBirth, gender);
    const svg = generateMatrixSVG(matrixValues);

    const svgContainer = document.getElementById('svg-container');
    svgContainer.innerHTML = '';
    svgContainer.appendChild(svg);
}

function calculateMatrixValues(dateOfBirth, gender) {
    // Пример простой логики для вычисления значений матрицы на основе даты рождения
    const values = [];
    const dateParts = dateOfBirth.split('-');
    const year = parseInt(dateParts[0], 10);
    const month = parseInt(dateParts[1], 10);
    const day = parseInt(dateParts[2], 10);

    values.push(year % 10, month, day);

    // Добавьте свою логику для вычисления остальных значений
    for (let i = 0; i < 6; i++) {
        values.push(Math.floor(Math.random() * 10));
    }

    return values;
}

function generateMatrixSVG(values) {
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttributeNS(null, "viewBox", "0 0 200 200");

    values.forEach((value, index) => {
        const circle = document.createElementNS(svgNS, "circle");
        circle.setAttributeNS(null, "cx", (index % 3) * 50 + 50);
        circle.setAttributeNS(null, "cy", Math.floor(index / 3) * 50 + 50);
        circle.setAttributeNS(null, "r", 20);
        circle.setAttributeNS(null, "fill", "#009688");

        const text = document.createElementNS(svgNS, "text");
        text.setAttributeNS(null, "x", (index % 3) * 50 + 50);
        text.setAttributeNS(null, "y", Math.floor(index / 3) * 50 + 55);
        text.setAttributeNS(null, "text-anchor", "middle");
        text.setAttributeNS(null, "font-size", "20");
        text.setAttributeNS(null, "fill", "#fff");
        text.textContent = value;

        svg.appendChild(circle);
        svg.appendChild(text);
    });

    return svg;
}
