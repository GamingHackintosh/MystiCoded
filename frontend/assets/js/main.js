document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form');
    const nameInput = document.getElementById('name');
    const dateInput = document.getElementById('date');
    const genderInputs = document.querySelectorAll('input[name="gender"]');
    const matrixBox = document.querySelector('.matrixBox');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = nameInput.value;
        const date = dateInput.value;
        let gender;
        
        for (const input of genderInputs) {
            if (input.checked) {
                gender = input.value;
                break;
            }
        }
        
        if (name && date && gender) {
            calculateMatrix(name, date, gender);
        } else {
            alert('Пожалуйста, заполните все поля формы.');
        }
    });
    
    // Логика переключения вкладок
    function updateMatrixDisplay(data) {
        document.querySelector('.name').textContent = data.name;
        document.querySelector('.date_birthJS').textContent = data.date;
        document.querySelector('.ageJS').textContent = data.age;
        
        document.getElementById('sevenPhisic').textContent = data.chakras.sahasrara;
        document.getElementById('sixPhisic').textContent = data.chakras.ajna;
        document.getElementById('fivePhisic').textContent = data.chakras.vishudha;
        document.getElementById('fourPhisic').textContent = data.chakras.anahata;
        document.getElementById('threePhisic').textContent = data.chakras.manipura;
        document.getElementById('twoPhisic').textContent = data.chakras.svadhisthana;
        document.getElementById('onePhisic').textContent = data.chakras.muladhara;
        
        matrixDisplay.style.display = 'block';
    }
});

function calculateMatrix(dateOfBirth) {
    function sumDigits(n) {
        return n.toString().split('').reduce((sum, num) => sum + parseInt(num, 10), 0);
    }

    function reduceToOneDigit(n) {
        while (n > 9) {
            n = sumDigits(n);
        }
        return n;
    }

    const [day, month, year] = dateOfBirth.split('.').map(Number);
    
    // Основные числа
    const lifePathNumber = reduceToOneDigit(day + month + year);
    const soulNumber = reduceToOneDigit(day);
    const karmaNumber = reduceToOneDigit(month);
    const giftNumber = reduceToOneDigit(year);
    
    // Числа матрицы
    const firstPair = reduceToOneDigit(soulNumber + karmaNumber);
    const secondPair = reduceToOneDigit(giftNumber + lifePathNumber);
    const centerNumber = reduceToOneDigit(firstPair + secondPair);

    return {
        lifePathNumber,
        soulNumber,
        karmaNumber,
        giftNumber,
        firstPair,
        secondPair,
        centerNumber
    };
}

function generateSVG(matrix) {
    return `
        <svg id='matrizca' xmlns="http://www.w3.org/2000/svg" class="matrisza" width="650" height="601" viewBox="0 0 791 742" fill="none" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMinYMin meet">
        <rect id="svgEditorBackground" x="0" y="0" width="791" height="742" style="fill: none; stroke: none;" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M328.84 299.846L259.558 230.564L257.894 232.229L327.175 301.511L328.84 299.846ZM352.498 323.504L350.833 325.169L538.423 512.759L540.088 511.094L352.498 323.504Z" style="fill:rgb(89, 112, 234)" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M476.013 294.639L540.088 230.565L538.423 228.9L474.349 292.974L476.013 294.639ZM449.376 321.277L447.711 319.612L257.894 509.429L259.558 511.094L449.376 321.277Z" fill="#EA596E" />
        <line x1="399" y1="171.876" x2="399" y2="569.782" stroke="#0A1935" stroke-width="1.17724" />
        <line x1="596.182" y1="372.839" x2="398.069" y2="568.612" stroke="#C1C1C1" stroke-width="1.17724" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="16.48 16.48" />
        <line x1="399.946" y1="173.832" x2="201.832" y2="369.606" stroke="#C1C1C1" stroke-width="1.17724" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="16.48 16.48" />
        <line x1="597.364" y1="370.829" x2="199.459" y2="370.829" stroke="#0A1935" stroke-width="1.17724" />
        <rect x="200.636" y="173.054" width="395.551" height="395.551" stroke="#0A1935" stroke-width="2.35447" style="fill:none" />
        <rect x="398.411" y="91.1324" width="395.551" height="395.551" transform="rotate(45 398.411 91.1324)" stroke="#0A1935" stroke-width="2.35447" />
        <circle cx="398.411" cy="370.829" r="325.958" stroke="#0A1935" stroke-width="1.88358" />
        <circle cx="398.411" cy="77.6975" r="31.7854" fill="#9659E3" />
        <circle cx="191.135" cy="163.554" r="30.8436" fill="#FAF8F6" stroke="#0A1935" stroke-width="1.88358" />
        <circle cx="605.687" cy="163.554" r="30.8436" fill="#FAF8F6" stroke="#0A1935" stroke-width="1.88358" />
        <circle cx="398.411" cy="370.829" r="31.7854" fill="#EFDB28" />
        <circle cx="398.411" cy="133.028" r="23.5447" fill="#2F72F3" />
        <circle cx="398.411" cy="173.054" r="16.4813" fill="#27AEFB" />
        <text fill="#FAF8F6" xml:space="preserve" style="white-space: pre" font-family="Inter, sans-serif" font-size="18.8358" font-weight="500" letter-spacing="-0.376715px">
            <tspan x="398.411" y="175.054" dominant-baseline="middle" text-anchor="middle" id="upThree" />
        </text>
        <circle cx="596.187" cy="370.829" r="16.4813" stroke-width="1.88358" style="stroke:none;fill:#F7A648" />
        <circle cx="398.411" cy="263.701" r="16.4813" fill="#7DDC32" />
        <text fill="#FAF8F6" xml:space="preserve" style="white-space: pre" font-family="Inter, sans-serif" font-size="18.8358" font-weight="500" letter-spacing="-0.376715px">
            <tspan x="398.411" y="265.701" dominant-baseline="middle" text-anchor="middle" id="upGreen"></tspan>
        </text>
        <text fill="#0A1935" xml:space="preserve" style="white-space: pre" font-family="Inter, sans-serif" font-size="18.8358" font-weight="500" letter-spacing="-0.376715px">
            <tspan x="596.024" y="372.267" dominant-baseline="middle" text-anchor="middle" />
        </text>
        <circle cx="291.283" cy="370.829" r="16.4813" fill="#7DDC32" />
        <text fill="#FAF8F6" xml:space="preserve" style="white-space: pre" font-family="Inter, sans-serif" font-size="18.8358" font-weight="500" letter-spacing="-0.376715px">
            <tspan x="291.283" y="371.829" dominant-baseline="middle" text-anchor="middle" id='leftGreen'></tspan>
        </text>
        <path d="M509.093,471C509.093,477.679,503.679,483.093,497,483.093C490.321,483.093,484.907,477.679,484.907,471C484.907,464.321,490.321,458.907,497,458.907C503.679,458.907,509.093,464.321,509.093,471Z" fill="#FAF8F6" stroke="#0A1935" stroke-width="1.81381" />
        <circle cx="398.411" cy="568.605" r="16.4813" stroke-width="1.88358" style="fill:#F7A648;stroke:none" />
        <circle cx="200.636" cy="370.829" r="16.4813" fill="#27AEFB" />
        <circle cx="636.213" cy="370.829" r="22.6029" stroke-width="1.88358" style="fill:white;stroke:black" />
        <circle cx="398.984000" cy="609.204000" r="22.602900" stroke-width="1.88358" style="stroke:black;fill:white" />
        <text fill="#FAF8F6" xml:space="preserve" style="white-space: pre" font-family="Inter, sans-serif" font-size="23.5447" font-weight="500" letter-spacing="-0.376715px">
            <tspan x="398.411" y="610.631" dominant-baseline="middle" text-anchor="middle" style="fill:black;" id='downWhite'></tspan>
        </text>
        <circle cx="160.61" cy="370.829" r="23.5447" fill="#2F72F3" />
        <text fill="#FAF8F6" xml:space="preserve" style="white-space: pre" font-family="Inter, sans-serif" font-size="23.5447" font-weight="500" letter-spacing="-0.376715px">
            <tspan x="160.408" y="372.334" dominant-baseline="middle" text-anchor="middle" id='leftTwo'></tspan>
        </text>
        <text fill="#FAF8F6" xml:space="preserve" style="white-space: pre" font-family="Inter, sans-serif" font-size="18.8358" font-weight="500" letter-spacing="-0.376715px">
            <tspan x="200.144" y="372.267" dominant-baseline="middle" text-anchor="middle" id='leftThree'></tspan>
        </text>
        <circle cx="398.411" cy="663.961" r="31.7854" fill="#F24040" />
        <circle cx="605.687" cy="578.105" r="30.8436" fill="#FAF8F6" stroke="#0A1935" stroke-width="1.88358" />
        <circle cx="191.135" cy="578.105" r="30.8436" fill="#FAF8F6" stroke="#0A1935" stroke-width="1.88358" />
        <circle cx="691.543" cy="370.829" r="31.7854" fill="#F24040" />
        <circle cx="105.28" cy="370.829" r="31.7854" fill="#9659E3" />
        <text fill="#FAF8F6" xml:space="preserve" style="white-space: pre" font-family="Inter, sans-serif" font-size="30.6081" font-weight="500" letter-spacing="-0.376715px">
            <tspan x="398.366" y="80.4343" dominant-baseline="middle" text-anchor="middle" id='twentyAgePurple'></tspan>
        </text>
        <text fill="#FAF8F6" xml:space="preserve" style="white-space: pre" font-family="Inter, sans-serif" font-size="23.5447" font-weight="500" letter-spacing="-0.376715px">
            <tspan x="398.411" y="135.028" dominant-baseline="middle" text-anchor="middle" id='upTwo'></tspan>
        </text>
        <text fill="#FAF8F6" xml:space="preserve" style="white-space: pre" font-family="Inter, sans-serif" font-size="23.5447" font-weight="500" letter-spacing="-0.376715px">
            <tspan x="636.408" y="373.334" dominant-baseline="middle" text-anchor="middle" style="fill:black;" id='rightWhite'></tspan>
        </text>
        <text fill="#FAF8F6" xml:space="preserve" style="white-space: pre" font-family="Inter, sans-serif" font-size="18.8358" font-weight="500" letter-spacing="-0.376715px">
            <tspan x="595" y="371.615" dominant-baseline="middle" text-anchor="middle" style="fill:white" id="e1_tspan"></tspan>
        </text>
        <text fill="#FAF8F6" xml:space="preserve" style="white-space: pre" font-family="Inter, sans-serif" font-size="30.6081" font-weight="500" letter-spacing="-0.376715px">
            <tspan x="398.411" y="665.961" dominant-baseline="middle" text-anchor="middle" id='sixtyAgeRed'></tspan>
        </text>
        <text fill="#FAF8F6" xml:space="preserve" style="white-space: pre" font-family="Inter, sans-serif" font-size="30.6081" font-weight="500" letter-spacing="-0.376715px">
            <tspan x="691.626" y="374.434" dominant-baseline="middle" text-anchor="middle" id='fortyAgeRed'></tspan>
        </text>
        <text fill="#FAF8F6" xml:space="preserve" style="white-space: pre" font-family="Inter, sans-serif" font-size="30.6081" font-weight="500" letter-spacing="-0.376715px">
            <tspan x="104.6638" y="373.434" dominant-baseline="middle" text-anchor="middle" id='zeroAgePurple'></tspan>
        </text>
        <text fill="#FAF8F6" xml:space="preserve" style="white-space: pre" font-family="Inter, sans-serif" font-size="30.6081" font-weight="500" letter-spacing="-0.376715px">
            <tspan x="398.158" y="373.434" dominant-baseline="middle" text-anchor="middle" id='center'></tspan>
        </text>
        <text fill="#0A1935" xml:space="preserve" style="white-space: pre" font-family="Inter, sans-serif" font-size="30.6081" font-weight="500" letter-spacing="-0.376715px">
            <tspan x="190.912" y="166.434" dominant-baseline="middle" text-anchor="middle" id='upLeft'></tspan>
        </text>
        <text fill="#0A1935" xml:space="preserve" style="white-space: pre" font-family="Inter, sans-serif" font-size="30.6081" font-weight="500" letter-spacing="-0.376715px">
            <tspan x="190.255" y="580.434" dominant-baseline="middle" text-anchor="middle" id='downLeft'></tspan>
        </text>
        <text fill="#0A1935" xml:space="preserve" style="white-space: pre" font-family="Inter, sans-serif" font-size="30.6081" font-weight="500" letter-spacing="-0.376715px">
            <tspan x="605.687" y="581.105" dominant-baseline="middle" text-anchor="middle" id='downRight'></tspan>
        </text>
        <text fill="#0A1935" xml:space="preserve" style="white-space: pre" font-family="Inter, sans-serif" font-size="30.6081" font-weight="500" letter-spacing="-0.376715px">
            <tspan x="604.416" y="165.434" dominant-baseline="middle" text-anchor="middle" id='upRigth'></tspan>
        </text>
        <text fill="#0A1935" xml:space="preserve" style="white-space: pre" font-family="Inter, sans-serif" font-size="17.1793" font-weight="500" letter-spacing="-0.362763px">
            <tspan x="496.777" y="472.817" dominant-baseline="middle" text-anchor="middle" id='betweenHeartMoney'></tspan>
        </text>
        <text xml:space="preserve" style="white-space:pre;fill:white" font-family="Inter, sans-serif" font-size="18.8358" font-weight="500" letter-spacing="-0.376715px">
            <tspan x="397.888" y="570.267" dominant-baseline="middle" text-anchor="middle" id='downOrange'></tspan>
        </text>
        <text fill="#0A1935" xml:space="preserve" style="white-space: pre" font-family="Inter, sans-serif" font-size="18.8358" font-weight="500" letter-spacing="-0.376715px">
            <tspan x="385.567" y="16.2673">20</tspan>
        </text>
        <text fill="#0A1935" xml:space="preserve" style="white-space: pre" font-family="Inter, sans-serif" font-size="14.1268" font-weight="500" letter-spacing="-0.376715px">
            <tspan x="385.56" y="31.0361">лет</tspan>
        </text>
        <text fill="#0A1935" xml:space="preserve" style="white-space: pre" font-family="Inter, sans-serif" font-size="18.8358" font-weight="500" letter-spacing="-0.376715px">
            <tspan x="137.065" y="115.155">10</tspan>
        </text>
        <text fill="#0A1935" xml:space="preserve" style="white-space: pre" font-family="Inter, sans-serif" font-size="14.1268" font-weight="500" letter-spacing="-0.376715px">
            <tspan x="135.986" y="129.924">лет</tspan>
        </text>
        <text fill="#0A1935" xml:space="preserve" style="white-space: pre" font-family="Inter, sans-serif" font-size="18.8358" font-weight="500" letter-spacing="-0.376715px">
            <tspan x="135.437" y="626.267">30</tspan>
        </text>
        <text fill="#0A1935" xml:space="preserve" style="white-space: pre" font-family="Inter, sans-serif" font-size="14.1268" font-weight="500" letter-spacing="-0.376715px">
            <tspan x="135.513" y="641.036">лет</tspan>
        </text>
        <text fill="#0A1935" xml:space="preserve" style="white-space: pre" font-family="Inter, sans-serif" font-size="18.8358" font-weight="500" letter-spacing="-0.376715px">
            <tspan x="650.01" y="116.267">50</tspan>
        </text>
        <text fill="#0A1935" xml:space="preserve" style="white-space: pre" font-family="Inter, sans-serif" font-size="14.1268" font-weight="500" letter-spacing="-0.376715px">
            <tspan x="650.026" y="131.036">лет</tspan>
        </text>
        <text fill="#0A1935" xml:space="preserve" style="white-space: pre" font-family="Inter, sans-serif" font-size="18.8358" font-weight="500" letter-spacing="-0.376715px">
            <tspan x="654.263" y="629.267">40</tspan>
        </text>
        <text fill="#0A1935" xml:space="preserve" style="white-space: pre" font-family="Inter, sans-serif" font-size="14.1268" font-weight="500" letter-spacing="-0.376715px">
            <tspan x="654.026" y="644.036">лет</tspan>
        </text>
    </svg>
    `;
}

document.querySelector('.btn').addEventListener('click', () => {
    const dateOfBirth = document.getElementById('date').value;

    if (!dateOfBirth.match(/^\d{2}\.\d{2}\.\d{4}$/)) {
        alert('Введите дату рождения в формате ДД.ММ.ГГГГ');
        return;
    }

    const matrix = calculateMatrix(dateOfBirth);
    const svg = generateSVG(matrix);

    document.getElementById('svgContainer').innerHTML = svg;
});

