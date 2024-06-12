function displayMatrixSVG(chakras) {
    const matrixResult = document.getElementById('matrixResult');
    
    const chakrasPositions = [
        { x: 105, y: 105, value: chakras.a },
        { x: 285, y: 105, value: chakras.b },
        { x: 465, y: 105, value: chakras.l },
        { x: 105, y: 285, value: chakras.d },
        { x: 285, y: 285, value: chakras.e },
        { x: 465, y: 285, value: chakras.c },
        { x: 105, y: 465, value: chakras.b1 },
        { x: 285, y: 465, value: chakras.b2 },
        { x: 465, y: 465, value: chakras.b3 }
    ];

    chakrasPositions.forEach((chakra, index) => {
        const chakraElement = document.createElement('div');
        chakraElement.classList.add('chakra-number', `chakra-${index + 1}`);
        chakraElement.style.top = `${chakra.y - 12}px`; // Корректировка по вертикали
        chakraElement.style.left = `${chakra.x - 12}px`; // Корректировка по горизонтали
        chakraElement.textContent = chakra.value;
        matrixResult.appendChild(chakraElement);
    });
}

// Пример вызова функции
displayMatrixSVG({
    a: 'A1',
    b: 'B1',
    l: 'L1',
    d: 'D1',
    e: 'E1',
    c: 'C1',
    b1: 'B2',
    b2: 'B3',
    b3: 'B4'
});