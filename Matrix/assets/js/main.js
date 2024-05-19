document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form-matrixBox');
    const nameInput = document.getElementById('name');
    const dateInput = document.getElementById('date');
    const genderInputs = document.querySelectorAll('input[name="gender"]');
    
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
            const matrix = calculateMatrix(date);
            const svg = generateSVG(matrix);
            document.getElementById('svgContainer').innerHTML = svg;
            document.querySelector('.name').innerText = name;
            document.querySelector('.date_birthJS').innerText = date.split('-').reverse().join('.');
            document.querySelector('.ageJS').innerText = calculateAge(date);
        } else {
            alert('Пожалуйста, заполните все поля формы.');
        }
    });
});

function calculateAge(dateOfBirth) {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function calculateMatrix(dateOfBirth) {
    function sumDigits(n) {
        return n.toString().split('').reduce((sum, num) => sum + parseInt(num, 10), 0);
    }

    function reduceToTwoDigits(n) {
        while (n > 22) {
            n = sumDigits(n);
        }
        return n;
    }

    const [year, month, day] = dateOfBirth.split('-').map(Number);

    const lifePathNumber = reduceToTwoDigits(day + month + year);
    const soulNumber = reduceToTwoDigits(day);
    const karmaNumber = reduceToTwoDigits(month);
    const giftNumber = reduceToTwoDigits(year);
    
    const firstPair = reduceToTwoDigits(soulNumber + karmaNumber);
    const secondPair = reduceToTwoDigits(giftNumber + lifePathNumber);
    const centerNumber = reduceToTwoDigits(firstPair + secondPair);

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
        <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
            <circle cx="200" cy="200" r="180" stroke="black" stroke-width="3" fill="none" />
            <text x="50%" y="20%" text-anchor="middle" dy=".3em" font-size="20">${matrix.lifePathNumber}</text>
            <text x="50%" y="30%" text-anchor="middle" dy=".3em" font-size="20">${matrix.soulNumber}</text>
            <text x="50%" y="40%" text-anchor="middle" dy=".3em" font-size="20">${matrix.karmaNumber}</text>
            <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-size="20">${matrix.giftNumber}</text>
            <text x="50%" y="60%" text-anchor="middle" dy=".3em" font-size="20">${matrix.firstPair}</text>
            <text x="50%" y="70%" text-anchor="middle" dy=".3em" font-size="20">${matrix.secondPair}</text>
            <text x="50%" y="80%" text-anchor="middle" dy=".3em" font-size="20">${matrix.centerNumber}</text>
        </svg>
    `;
}
