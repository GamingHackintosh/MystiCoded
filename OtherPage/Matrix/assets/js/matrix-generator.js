function generateMatrix(matrixData) {
    const svgContainer = document.getElementById('svg-container');
    svgContainer.innerHTML = ''; // Очистка существующего содержимого

    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttributeNS(null, "viewBox", "0 0 850 850");
    svg.setAttributeNS(null, "width", "570px");
    svg.setAttributeNS(null, "height", "570px");

    matrixData.forEach(data => {
        const rect = document.createElementNS(svgNS, "rect");
        rect.setAttributeNS(null, "x", data.x);
        rect.setAttributeNS(null, "y", data.y);
        rect.setAttributeNS(null, "width", data.width);
        rect.setAttributeNS(null, "height", data.height);
        rect.setAttributeNS(null, "fill", data.color);

        const text = document.createElementNS(svgNS, "text");
        text.setAttributeNS(null, "x", data.textX);
        text.setAttributeNS(null, "y", data.textY);
        text.setAttributeNS(null, "fill", "black");
        text.setAttributeNS(null, "font-size", "12");
        text.setAttributeNS(null, "text-anchor", "middle");
        text.textContent = data.value;

        svg.appendChild(rect);
        svg.appendChild(text);
    });

    svgContainer.appendChild(svg);
}

function getMatrixData() {
    const matrixData = [
        {x: 10, y: 10, width: 50, height: 50, color: '#ae309a', textX: 35, textY: 35, value: 7},
        // Добавьте другие прямоугольники с позициями, цветами и значениями
    ];
    return matrixData;
}

document.addEventListener("DOMContentLoaded", () => {
    const matrixData = getMatrixData();
    generateMatrix(matrixData);
});
