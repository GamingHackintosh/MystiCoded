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
    const yearSum = sumDigits(year);
    const daySum = day > 22 ? sumDigits(day) : day;
    const d = (day);
    const m = (month);
    const y = (year);
    
    // Сахасрара
    const n33 = d; // Сахасрара: Физика
    const n34 = m; // Сахасрара: Энергия
    const n35 = (daySum + m); // Сахасрара: Эмоции
    
    // Аджна
    const n36 = ;
    const n37 = ;
    const n38 = ;
    
    return {
        n33: n33,
        n34: n34,
        n35: n35
    };
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
