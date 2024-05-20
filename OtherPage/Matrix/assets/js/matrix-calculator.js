function generateMatrix() {
    const dob = document.getElementById('dob').value;
    if (!dob) {
        alert('Please enter a birth date.');
        return;
    }
    const matrixValues = calculateMatrixValues(dob);
    const personalValues = calculatePersonalValues(dob);
    renderSVG(matrixValues, personalValues);
}

function calculateMatrixValues(dob) {
    const values = [];
    const dateParts = dob.split('-');
    const year = parseInt(dateParts[0], 10);
    const month = parseInt(dateParts[1], 10);
    const day = parseInt(dateParts[2], 10);

    // Custom logic for matrix values
    values.push(day, month, year);
    values.push(day + month, month + year, day + year);
    values.push((day + month + year) % 10, (day + month + year) % 9, (day + month + year) % 8);
    
    // Additional values to fill in the matrix
    for (let i = 0; i < 9; i++) {
        values.push((day * month * year) % (i + 2));
    }

    return values;
}

function calculatePersonalValues(dob) {
    const values = [];
    const dateParts = dob.split('-');
    const year = parseInt(dateParts[0], 10);
    const month = parseInt(dateParts[1], 10);
    const day = parseInt(dateParts[2], 10);

    // Custom logic for personal values
    values.push(day % 10, month, year % 10);
    values.push((day + month) % 10, (month + year) % 10, (day + year) % 10);
    values.push((day + month + year) % 10, (day + month + year) % 9, (day + month + year) % 8);
    
    // Additional values for chakras
    for (let i = 0; i < 7; i++) {
        values.push((day + month + year) % (i + 2));
    }

    return values;
}

function renderSVG(matrixValues, personalValues) {
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttributeNS(null, "viewBox", "0 0 800 800");
    svg.setAttributeNS(null, "width", "800");
    svg.setAttributeNS(null, "height", "800");

    // Background image
    const image = document.createElementNS(svgNS, "image");
    image.setAttributeNS(null, "href", "path/to/your/background/image.png"); // Your image path here
    image.setAttributeNS(null, "x", 0);
    image.setAttributeNS(null, "y", 0);
    image.setAttributeNS(null, "width", "800");
    image.setAttributeNS(null, "height", "800");
    svg.appendChild(image);

    // Matrix values
    matrixValues.forEach((value, index) => {
        const x = (index % 3) * 250 + 100;
        const y = Math.floor(index / 3) * 250 + 100;

        const text = document.createElementNS(svgNS, "text");
        text.setAttributeNS(null, "x", x);
        text.setAttributeNS(null, "y", y);
        text.setAttributeNS(null, "text-anchor", "middle");
        text.setAttributeNS(null, "font-size", "40");
        text.setAttributeNS(null, "fill", "#000000");
        text.textContent = value;
        svg.appendChild(text);
    });

    // Displaying the SVG
    const container = document.getElementById('svg-container');
    container.innerHTML = '';
    container.appendChild(svg);
}