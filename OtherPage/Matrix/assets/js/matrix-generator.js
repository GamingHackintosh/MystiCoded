document.addEventListener("DOMContentLoaded", function() {
    // Массив с идентификаторами кругов и соответствующих ячеек
    const elements = [
        { circleId: "n33", cellId: "n33" },
        { circleId: "n34", cellId: "n34" },
        { circleId: "n35", cellId: "n35" },
        { circleId: "n36", cellId: "n36" },
        { circleId: "n37", cellId: "n37" },
        { circleId: "n38", cellId: "n38" },
        { circleId: "n39", cellId: "n39" },
        { circleId: "n40", cellId: "n40" },
        { circleId: "n41", cellId: "n41" },
        { circleId: "n42", cellId: "n42" },
        { circleId: "n43", cellId: "n43" },
        { circleId: "n44", cellId: "n44" },
        { circleId: "n45", cellId: "n45" },
        { circleId: "n46", cellId: "n46" },
        { circleId: "n47", cellId: "n47" },
        { circleId: "n48", cellId: "n48" },
        { circleId: "n49", cellId: "n49" },
        { circleId: "n50", cellId: "n50" },
        { circleId: "n51", cellId: "n51" },
        { circleId: "n52", cellId: "n52" },
        { circleId: "n53", cellId: "n53" },
        { circleId: "n54", cellId: "n54" },
        { circleId: "n55", cellId: "n55" },
        { circleId: "n56", cellId: "n56" },
        { circleId: "n57", cellId: "n57" },
        { circleId: "n58", cellId: "n58" },
        { circleId: "n59", cellId: "n59" },
        { circleId: "n60", cellId: "n60" },
        { circleId: "n61", cellId: "n61" },
        { circleId: "n62", cellId: "n62" },
        { circleId: "n63", cellId: "n63" },
        { circleId: "n64", cellId: "n64" },
    ];

    // Заполнение таблицы на основе данных из кругов
    elements.forEach(element => {
        const circle = document.getElementById(element.circleId);
        const cell = document.getElementById(element.cellId);
        if (circle && cell) {
            cell.innerText = circle.innerText;
        }
    });
});
