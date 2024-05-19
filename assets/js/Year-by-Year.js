const yearInfo = {
    0: "Описание для возраста 0.",
    1: "Описание для возраста 1-2.",
    2: "Описание для возраста 2-3.",
    3: "Описание для возраста 3-4.",
    4: "Описание для возраста 5.",
    // добавьте остальные описания
};

function displayYearInfo() {
    const year = document.getElementById('year-select').value;
    const info = yearInfo[year] || "Нет информации для этого возраста.";
    document.getElementById('year-info').innerText = info;
}

function changeYear(direction) {
    const select = document.getElementById('year-select');
    const currentIndex = select.selectedIndex;
    if (direction === 'prev' && currentIndex > 0) {
        select.selectedIndex = currentIndex - 1;
    } else if (direction === 'next' && currentIndex < select.options.length - 1) {
        select.selectedIndex = currentIndex + 1;
    }
    displayYearInfo();
}

document.addEventListener('DOMContentLoaded', displayYearInfo);