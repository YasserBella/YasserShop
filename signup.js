// signup.js

document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');

    signupForm.addEventListener('submit', function(event) {
        const password = document.getElementById('password').value;
        const repeatPassword = document.getElementById('repeat-password').value;

        if (password !== repeatPassword) {
            event.preventDefault(); // Prevent form submission
            alert('Passwords do not match. Please ensure both passwords are the same.');
        }
    });
});
