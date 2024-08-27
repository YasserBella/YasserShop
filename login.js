// login.js

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('form');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Here you can add your form validation logic
        // For now, we'll assume the form submission is always successful

        // Redirect to the index page after successful login
        window.location.href = 'index.html';
    });
});
