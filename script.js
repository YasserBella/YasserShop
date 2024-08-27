document.addEventListener('DOMContentLoaded', () => {
    // Example of a dynamic feature: Product Card Hover Effect
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.05)';
            card.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
        });

        card.addEventListener('mouseout', () => {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        });
    });
});
