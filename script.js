document.addEventListener("DOMContentLoaded", function() {
    // Check localStorage for theme preference
    const theme = localStorage.getItem('theme');
    const body = document.body;
    const themeIcon = document.querySelector('.theme-icon');

    if (theme === 'dark') {
        body.classList.add('dark-mode');
        themeIcon.src = 'moon-icon.png';
    } else {
        body.classList.remove('dark-mode');
        themeIcon.src = 'sun-icon.png';
    }

    document.getElementById('theme-toggle').addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        
        // Update icon and local storage
        if (body.classList.contains('dark-mode')) {
            themeIcon.src = 'moon-icon.png';
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.src = 'sun-icon.png';
            localStorage.setItem('theme', 'light');
        }
    });
});
