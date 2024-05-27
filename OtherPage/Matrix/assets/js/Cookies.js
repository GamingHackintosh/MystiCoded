document.getElementById('acceptAllCookies').addEventListener('click', function() {
    setCookie('cookieConsent', 'accepted', 365);
    document.getElementById('cookieConsent').style.display = 'none';
});

// Проверка состояния cookie согласия при загрузке страницы
window.onload = function() {
    let cookieConsent = getCookie('cookieConsent');
    if (!cookieConsent) {
        document.getElementById('cookieConsent').style.display = 'block';
    }
};

// Функция установки cookie
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Функция получения значения cookie
function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
