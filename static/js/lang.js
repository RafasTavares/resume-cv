(function () {
    var STORAGE_KEY = 'resume-cv-lang';
    var baseurl = document.documentElement.getAttribute('data-baseurl') || '/';
    if (!baseurl.endsWith('/')) {
        baseurl += '/';
    }

    var lang = document.documentElement.getAttribute('lang') || 'en';
    try {
        localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}

    var path = window.location.pathname;
    var isPtPage = path.indexOf('/pt/') !== -1 || path.endsWith('/pt');
    var isRootEn = !isPtPage && (path === baseurl || path === baseurl.slice(0, -1) || path.endsWith('/index.html'));

    if (isRootEn) {
        try {
            if (localStorage.getItem(STORAGE_KEY) === 'pt-BR') {
                window.location.replace(baseurl + 'pt/');
            }
        } catch (e) {}
    }

    document.addEventListener('click', function (event) {
        var link = event.target.closest('.lang-switcher__btn');
        if (!link) {
            return;
        }
        var targetLang = link.getAttribute('data-lang');
        if (!targetLang) {
            return;
        }
        try {
            localStorage.setItem(STORAGE_KEY, targetLang);
        } catch (e) {}
    });
})();
