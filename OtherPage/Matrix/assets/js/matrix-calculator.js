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
    while (num > 9) {
        num = sumDigits(num);
    }
    return num;
}

function calculateChakraValues(day, month, year) {
    const n1 = reduceToSingleDigit(day);
    const n2 = reduceToSingleDigit(month);
    const n3 = reduceToSingleDigit(year);
    const n4 = reduceToSingleDigit(day + month);
    const n5 = reduceToSingleDigit(day + year);
    const n6 = reduceToSingleDigit(month + year);
    const n7 = reduceToSingleDigit(day * month);
    const n8 = reduceToSingleDigit(day * year);
    const n9 = reduceToSingleDigit(month * year);

    const values = {
        n33: day, // Сахасрара: Физика
        n34: month, // Сахасрара: Энергия
        n35: reduceToSingleDigit(day + month), // Сахасрара: Эмоции 
        
        n36: // Аджна: Физика
        n37: // Аджна: Энергия
        n38: // Аджна: Эмоции
        
        n39: // Вишудха: Физика
        n40: // Вишудха: Энергия
        n41: // Вишудха: Эмоции
        
        n42: // Анахата: Физика
        n43: // Анахата: Энергия
        n44: // Анахата: Эмоции
        
        n45:// Манипура: Физика
        n46: // Манипура: Энергия
        n47: // Манипура: Эмоции
        
        n48: // Свадхистана: Физика
        n49: // Свадхистана: Энергия
        n50: // Свадхистана: Эмоции
        
        n51: // Муладхара: Физика
        n52: // Муладхара: Энергия
        n53: // Муладхара: Эмоции
    };

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
