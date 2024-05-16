document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab');
    const forms = document.querySelectorAll('.form');

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            // Убираем активный класс со всех вкладок и форм
            tabs.forEach(t => t.classList.remove('active'));
            forms.forEach(f => f.classList.remove('active'));

            // Добавляем активный класс к выбранной вкладке и соответствующей форме
            this.classList.add('active');
            const targetForm = document.querySelector(`.form-${this.dataset.tab}`);
            if (targetForm) {
                targetForm.classList.add('active');
            }
        });
    });
});
