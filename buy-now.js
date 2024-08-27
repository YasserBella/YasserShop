// Function to handle the 'Add to Cart' button click
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButton = document.querySelector('#add-to-cart');
    
    if (addToCartButton) {
        addToCartButton.addEventListener('click', function() {
            alert('Item added to cart!');
            // Optionally, you can add logic to update cart and navigate to checkout
        });
    }
});
