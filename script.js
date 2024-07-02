// Function to check scroll position and toggle 'active' class on back to top button
function checkScroll() {
    const backToTop = document.querySelector('.back-to-top');
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (scrollPosition > 500) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
}

// Attach the function to the window's scroll event
window.addEventListener('scroll', checkScroll);