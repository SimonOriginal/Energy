const toggleSwitch = document.querySelector('.theme-toggle input[type="checkbox"]');
const getCurrentTheme = () => localStorage.getItem('theme');
const setCurrentTheme = (theme) => {
    localStorage.setItem('theme', theme);
    document.documentElement.className = theme;
    toggleSwitch.checked = theme === 'dark';
};

// Установить начальную тему на основе предпочтений пользователя
const currentTheme = getCurrentTheme();
if (currentTheme) {
    setCurrentTheme(currentTheme);
} else {
// Использовать тему по умолчанию, если пользовательские настройки не установлены
    setCurrentTheme('light');
}

// Прослушивание изменений переключателя темы
toggleSwitch.addEventListener('change', (e) => {
    if (e.target.checked) {
    setCurrentTheme('dark');
        } else {
    setCurrentTheme('light');
    }
});
