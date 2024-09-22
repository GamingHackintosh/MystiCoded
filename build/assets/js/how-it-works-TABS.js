document.addEventListener('DOMContentLoaded', () => {
    // Сначала скрываем все вкладки, кроме первой
    document.querySelectorAll('.tab-content').forEach((content, index) => {
        if (index !== 0) {
            content.classList.add('hidden');
        } else {
            content.classList.remove('hidden');
        }
    });

    // Добавляем обработчики на кнопки вкладок
    document.querySelectorAll('.tab').forEach(button => {
        button.addEventListener('click', () => {
            const contentId = button.getAttribute('data-content');

            // Убираем классы 'active' у всех кнопок и скрываем контент
            document.querySelectorAll('.tab').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(content => content.classList.add('hidden'));

            // Добавляем класс 'active' нажатой кнопке и показываем соответствующий контент
            button.classList.add('active');
            document.getElementById(contentId).classList.remove('hidden');
        });
    });
});
