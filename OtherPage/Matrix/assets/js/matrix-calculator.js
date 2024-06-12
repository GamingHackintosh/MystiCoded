function calculateMatrix(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const dob = document.getElementById('year').value;

    if (!name || !dob) {
        alert('Пожалуйста, введите ваше имя и дату рождения.');
        return;
    }

    const dateParts = dob.split('-'); 
    if (dateParts.length !== 3) {
        alert('Пожалуйста, введите дату в формате ДД.ММ.ГГГГ.');
        return;
    }

    const day = parseInt(dateParts[2], 10);
    const month = parseInt(dateParts[1], 10);
    const year = parseInt(dateParts[0], 10);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        alert('Неверный формат даты.');
        return;
    }

    const birthDate = new Date(year, month - 1, day);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    const ageDisplay = document.getElementById('ageDisplay');
    const ageText = document.getElementById('ageText');
    ageText.innerText = `Возраст: ${age}`;
    ageDisplay.style.display = 'block';

    const soulNumber = calculateNumber(day + month + year);
    const purposeNumber = calculateNumber(soulNumber + day);

    const chakras = calculateChakras(day, month, year);

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

function calculateChakras(day, month, year) {
    const chakras = {};

    // Сахасрара
    chakras.a = calculateNumber(day);
    chakras.b = month;
    chakras.c = calculateNumber(year.toString().split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0));

    chakras.l = calculateNumber(chakras.a + chakras.b);

    // Манипура
    chakras.d = calculateNumber(chakras.a + chakras.b + chakras.c);
    chakras.e = calculateNumber(chakras.a + chakras.b + chakras.c + chakras.d);

    // Вишудха
    chakras.a1 = calculateNumber(chakras.a + chakras.e);

    // Аджна
    chakras.a2 = calculateNumber(chakras.a + chakras.a1);

    // Анахата
    chakras.a3 = calculateNumber(chakras.a1 + chakras.e);

    // Свадхистана
    chakras.c1 = calculateNumber(chakras.c + chakras.e);

    // Муладхара
    chakras.d1 = calculateNumber(chakras.d + chakras.e);

    // Энергия
    chakras.b1 = calculateNumber(chakras.b + chakras.e);
    chakras.b2 = calculateNumber(chakras.b + chakras.b1);
    chakras.b3 = calculateNumber(chakras.b1 + chakras.e);

    // Эмоции
    chakras.l1 = calculateNumber(chakras.a2 + chakras.b2);
    chakras.l2 = calculateNumber(chakras.a1 + chakras.b1);
    chakras.l3 = calculateNumber(chakras.a3 + chakras.b3);
    chakras.l4 = calculateNumber(chakras.e + chakras.e);
    chakras.l5 = calculateNumber(chakras.c1 + chakras.d1);
    chakras.l6 = calculateNumber(chakras.c + chakras.d);

    // Итого
    chakras.d3 = calculateNumber(chakras.a + chakras.a2 + chakras.a1 + chakras.a3 + chakras.e + chakras.c1 + chakras.c);
    chakras.c3 = calculateNumber(chakras.b + chakras.b2 + chakras.b1 + chakras.b3 + chakras.e + chakras.d1 + chakras.d);
    chakras.e3 = calculateNumber(chakras.l + chakras.l1 + chakras.l2 + chakras.l3 + chakras.l4 + chakras.l5 + chakras.l6);

    // Обновление таблицы
    // Сахасрара
    document.getElementById("n33").innerText = chakras.a;
    document.getElementById("n34").innerText = chakras.b;
    document.getElementById("n35").innerText = chakras.l;

    // Аджна
    document.getElementById("n36").innerText = chakras.a2;
    document.getElementById("n37").innerText = chakras.b2;
    document.getElementById("n38").innerText = chakras.l1;

    // Вишудха
    document.getElementById("n39").innerText = chakras.a1;
    document.getElementById("n40").innerText = chakras.b1;
    document.getElementById("n41").innerText = chakras.l2;

    // Анахата
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

    // ИТОГО
    document.getElementById("n54").innerText = chakras.d3;
    document.getElementById("n55").innerText = chakras.c3;
    document.getElementById("n56").innerText = chakras.e3;

    return chakras;
}


document.addEventListener("DOMContentLoaded", () => {
    const calculateButton = document.querySelector('.btn');
    calculateButton.addEventListener('click', calculateMatrix);
});
