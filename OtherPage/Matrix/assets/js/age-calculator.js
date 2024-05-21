function calculateAge(event) {
    event.preventDefault();
    
    const dob = document.getElementById('dob').value;
    if (!dob) {
        alert("Пожалуйста, выберите дату рождения.");
        return;
    }

    const dobDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - dobDate.getFullYear();
    const monthDiff = today.getMonth() - dobDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
        age--;
    }

    document.getElementById('ageText').innerText = `Ваш возраст: ${age} лет`;
    document.getElementById('ageDisplay').style.display = 'block';
}