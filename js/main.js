document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const languageSelect = document.getElementById('language-select');
    const body = document.body;

    // Theme Toggle
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        body.classList.toggle('light-theme');
        themeToggle.innerHTML = body.classList.contains('dark-theme')
            ? '<i class="bi bi-moon-stars-fill"></i>'
            : '<i class="bi bi-sun-fill"></i>';
        localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark' : 'light');
    });

    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    body.classList.add(savedTheme + '-theme');
    themeToggle.innerHTML = savedTheme === 'dark'
        ? '<i class="bi bi-moon-stars-fill"></i>'
        : '<i class="bi bi-sun-fill"></i>';

    // Language Switch
    function updateLanguage(lang) {
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            element.innerHTML = translations[lang][key] || element.innerHTML;
        });
        localStorage.setItem('language', lang);
    }

    // Load saved language
    const savedLanguage = localStorage.getItem('language') || 'en';
    languageSelect.value = savedLanguage;
    updateLanguage(savedLanguage);

    languageSelect.addEventListener('change', () => {
        updateLanguage(languageSelect.value);
    });
});