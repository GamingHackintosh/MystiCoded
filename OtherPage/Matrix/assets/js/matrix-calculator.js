function calculateMatrix(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;

    if (!name || !dob) {
        alert('Пожалуйста, введите ваше имя и дату рождения.');
        return;
    }

    // Преобразование даты в формат ДД.ММ.ГГГГ
    const dateParts = dob.split('.');
    if (dateParts.length !== 3) {
        alert('Пожалуйста, введите дату в формате ДД.ММ.ГГГГ.');
        return;
    }

    const day = parseInt(dateParts[0], 10);
    const month = parseInt(dateParts[1], 10);
    const year = parseInt(dateParts[2], 10);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        alert('Неверный формат даты.');
        return;
    }

    // Расчет возраста
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    // Показать возраст
    const ageDisplay = document.getElementById('ageDisplay');
    const ageText = document.getElementById('ageText');
    ageText.innerText = `Возраст: ${age}`;
    ageDisplay.style.display = 'block';

    // Пример простых расчетов
    const soulNumber = calculateNumber(day + month + year);
    const purposeNumber = calculateNumber(soulNumber + day);

    // Обновить HTML результатами
    const matrixResult = document.getElementById('matrixResult');
    matrixResult.innerHTML = `
        <p>Здравствуйте, ${name}!</p>
        <p>Ваше число души: ${soulNumber}</p>
        <p>Ваше число предназначения: ${purposeNumber}</p>
    `;

    // Рассчитать чакры
    const chakras = calculateChakras(day, month);

    // Отобразить результаты
    displayChakras(chakras);
    displayMatrixSVG(chakras);
}

function calculateNumber(num) {
    while (num > 22) {
        num = num
            .toString()
            .split('')
            .reduce((acc, digit) => acc + parseInt(digit, 10), 0);
    }
    return num;
}

function calculateChakras(day, month) {
    const chakras = {};

    // Формулы для расчета значений чакр
    chakras.a = day;
    chakras.b = month;
    chakras.l = calculateNumber(chakras.a + chakras.b);

    // Обновление значений в таблице
        // Сахасрара
        document.getElementById("n33").innerText = chakras.a;
        document.getElementById("n34").innerText = chakras.b;
        document.getElementById("n35").innerText = chakras.l;

        // Аджна
        document.getElementById("n36").innerText = chakras.a2;
        document.getElementById("n37").innerText = chakras.b2;
        document.getElementById("n38").innerText = chakras.l2;

        // Вишудха
        document.getElementById("n39").innerText = chakras.a1;
        document.getElementById("n40").innerText = chakras.b1;
        document.getElementById("n41").innerText = chakras.l2;

        // Анахта
        document.getElementById("n42").innerText = chakras.a3;
        document.getElementById("n43").innerText = chakras.b3;
        document.getElementById("n44").innerText = chakras.l3;

        // Манипура
        document.getElementById("n45").innerText = chakras.e;
        document.getElementById("n46").innerText = chakras.e;
        document.getElementById("n47").innerText = chakras.l4;

        // Свадхистана
        document.getElementById("n48").innerText = chakras.c1;
        document.getElementById("n49").innerText = chakras.d1;
        document.getElementById("n50").innerText = chakras.l5;

        // Муладхара
        document.getElementById("n51").innerText = chakras.c;
        document.getElementById("n52").innerText = chakras.d;
        document.getElementById("n53").innerText = chakras.l6;

        // TOTAL
        document.getElementById("n54").innerText = chakras.d3;
        document.getElementById("n55").innerText = chakras.c3;
        document.getElementById("n56").innerText = chakras.e3;

    return chakras;
}

function displayChakras(chakras) {
    const chakraTable = document.getElementById('chakraTable');
    chakraTable.innerHTML = '<table>' +
        Object.entries(chakras).map(([chakra, value]) => `<tr><td>${chakra}</td><td>${value}</td></tr>`).join('') +
        '</table>';
}

function displayMatrixSVG(chakras) {
    const svgContent = `
    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="90" stroke="black" stroke-width="2" fill="none" />
        <text x="50" y="50">${chakras.a}</text>
        <text x="150" y="50">${chakras.b}</text>
        <text x="50" y="150">${chakras.l}</text>
        <text x="150" y="150">${chakras.l}</text>
        <text x="100" y="100">${chakras.l}</text>
    </svg>
    `;
    document.getElementById('matrixResult').innerHTML = svgContent;
}
