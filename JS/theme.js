const themeStorageKey = 'theme';

function getPreferredTheme() {
    const savedTheme = localStorage.getItem(themeStorageKey);

    if (savedTheme === 'light' || savedTheme === 'dark') {
        return savedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function updateThemeButton(theme) {
    const themeButton = document.querySelector('[data-theme-toggle]');

    if (!themeButton) {
        return;
    }

    const icon = themeButton.querySelector('span');
    const nextTheme = theme === 'dark' ? 'light' : 'dark';

    if (icon) {
        icon.textContent = theme === 'dark' ? '☀' : '🌙';
    }

    themeButton.setAttribute('aria-label', `Switch to ${nextTheme} mode`);
    themeButton.title = `Switch to ${nextTheme} mode`;
}

function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    updateThemeButton(theme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

    localStorage.setItem(themeStorageKey, nextTheme);
    applyTheme(nextTheme);
}

window.toggleTheme = toggleTheme;

document.addEventListener('DOMContentLoaded', () => {
    applyTheme(getPreferredTheme());
});