document.getElementById('acceptAllCookies').addEventListener('click', function() {
    setCookie('cookieConsent', 'accepted', 365);
    document.getElementById('cookieConsent').style.display = 'none';
    initializeYandexMetrika();
});

// Проверка состояния cookie согласия при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    const cookieContainer = document.getElementById('cookieConsent');
    const acceptAllCookiesButton = document.getElementById('acceptAllCookies');

    if (!localStorage.getItem('cookieAccepted')) {
        cookieContainer.style.display = 'block';
    }

    acceptAllCookiesButton.addEventListener('click', function() {
        localStorage.setItem('cookieAccepted', 'true');
        cookieContainer.style.display = 'none';
    });
});


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

// Функция инициализации Яндекс.Метрики
function initializeYandexMetrika() {
    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    ym(97411490, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true
    });

    // Добавление no-script
    var noscript = document.createElement('noscript');
    noscript.innerHTML = '<div><img src="https://mc.yandex.ru/watch/97411490" style="position:absolute; left:-9999px;" alt="" /></div>';
    document.body.appendChild(noscript);
}
