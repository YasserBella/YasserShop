// Function to handle the form submission on the checkout page
document.addEventListener('DOMContentLoaded', function() {
    const checkoutForm = document.querySelector('#checkout-form');
    
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Simulate form submission logic
            const formData = new FormData(checkoutForm);
            const data = Object.fromEntries(formData.entries());

            // You can send data to a server or process it here
            console.log('Checkout data:', data);
            
            // Simulate redirection to the thank you page
            window.location.href = 'thank-you.html';
        });
    }
});
