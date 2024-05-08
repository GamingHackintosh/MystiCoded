document.getElementById('dateForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвратить стандартную отправку формы
    const name = document.getElementById('name').value;
    const birthdate = document.getElementById('birthdate').value;

    // Вы можете здесь добавить AJAX запрос или какую-либо логику для обработки данных
    console.log("Имя:", name, "Дата рождения:", birthdate);
    alert('Форма отправлена! Проверьте консоль для деталей.');

    // Тут может быть вызов функции для отправки данных на сервер или другие действия
});
