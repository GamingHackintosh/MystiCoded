document.getElementById('matrixForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const dob = document.getElementById('dob').value;
    if (dob) {
        const dateParts = dob.split('-');
        const day = parseInt(dateParts[2], 10);
        const month = parseInt(dateParts[1], 10);
        const year = parseInt(dateParts[0], 10);
        const chakraValues = calculateChakraValues(day, month, year);
        displayChakraValues(chakraValues);
    }
});

function sumDigits(num) {
    return String(num).split('').map(Number).reduce((acc, digit) => acc + digit, 0);
}

function reduceToSingleDigit(num) {
    while (num > 9 && num !== 11 && num !== 22) {
        num = sumDigits(num);
    }
    return num;
}

function calculateChakraValues(day, month, year) {
    const d = reduceToSingleDigit(day);
    const m = reduceToSingleDigit(month);
    const y = reduceToSingleDigit(year);
    const dm = reduceToSingleDigit(day + month);
    const dy = reduceToSingleDigit(day + year);
    const my = reduceToSingleDigit(month + year);
    const dmy = reduceToSingleDigit(day + month + year);

    const values = {
        // Сахасрара (Готова)
        n33: day, // Сахасрара: Физика
        n34: month, // Сахасрара: Энергия
        n35: day + month, // Сахасрара: Эмоции 

        // Аджна
        n36: reduceToSingleDigit(day + month - 6), // Аджна: Физика
        n37: reduceToSingleDigit(month + day - 11), // Аджна: Энергия
        n38: reduceToSingleDigit(year % 100 + 8), // Аджна: Эмоции

        // Вишудха
        n39: day + 2 * month, // Вишудха: Физика
        n40: 2 * month + reduceToSingleDigit(year), // Вишудха: Энергия
        n41: reduceToSingleDigit(year - month), // Вишудха: Эмоции

        // Анахата
        n42: reduceToSingleDigit(day - month), // Анахата: Физика
        n43: month, // Анахата: Энергия
        n44: reduceToSingleDigit(day - reduceToSingleDigit(year) + month), // Анахата: Эмоции

        // Манипура
        n45: day, // Манипура: Физика
        n46: month, // Манипура: Энергия
        n47: reduceToSingleDigit(day + month + year), // Манипура: Эмоции

        // Свадхистана
        n48: reduceToSingleDigit(day * 2), // Свадхистана: Физика
        n49: reduceToSingleDigit(month * 2), // Свадхистана: Энергия
        n50: reduceToSingleDigit(day + month - reduceToSingleDigit(year)), // Свадхистана: Эмоции

        // Муладхара
        n51: day, // Муладхара: Физика
        n52: month, // Муладхара: Энергия
        n53: reduceToSingleDigit(day + reduceToSingleDigit(year) - month), // Муладхара: Эмоции
    };

    // Итоговые значения
    values.n54 = reduceToSingleDigit(values.n33 + values.n36 + values.n39 + values.n42 + values.n45 + values.n48 + values.n51); // Итог: Физика
    values.n55 = reduceToSingleDigit(values.n34 + values.n37 + values.n40 + values.n43 + values.n46 + values.n49 + values.n52); // Итог: Энергия
    values.n56 = reduceToSingleDigit(values.n35 + values.n38 + values.n41 + values.n44 + values.n47 + values.n50 + values.n53); // Итог: Эмоции

    return values;
}

function displayChakraValues(values) {
    for (const key in values) {
        if (values.hasOwnProperty(key)) {
            const element = document.getElementById(key);
            if (element) {
                element.textContent = values[key];
            }
        }
    }
}
