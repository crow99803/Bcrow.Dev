document.addEventListener("DOMContentLoaded", function() {
    const scrollText = document.getElementById('scroll-text');
    setTimeout(() => {
        scrollText.style.opacity = '1';
        scrollText.style.transform = 'translateY(0)';
    }, 500); // Delay for a faster effect
});