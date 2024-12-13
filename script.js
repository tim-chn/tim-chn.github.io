document.addEventListener("DOMContentLoaded", function() {
    // Check localStorage for theme preference
    const theme = localStorage.getItem('theme');
    const body = document.body;
    const themeIcon = document.querySelector('.theme-icon');
    const resumeIcon = document.querySelector('.resume-icon'); // Select the resume icon

    if (theme === 'dark') {
        body.classList.add('dark-mode');
        themeIcon.src = 'moon-icon.png';
        resumeIcon.src = 'resume-icon-dark.png'; // Dark mode resume icon
    } else {
        body.classList.remove('dark-mode');
        themeIcon.src = 'sun-icon.png';
        resumeIcon.src = 'resume-icon.png'; // Light mode resume icon
    }

    document.getElementById('theme-toggle').addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        
        // Update icons and local storage
        if (body.classList.contains('dark-mode')) {
            themeIcon.src = 'moon-icon.png';
            resumeIcon.src = 'resume-icon-dark.png'; // Dark mode resume icon
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.src = 'sun-icon.png';
            resumeIcon.src = 'resume-icon.png'; // Light mode resume icon
            localStorage.setItem('theme', 'light');
        }
    });
});
