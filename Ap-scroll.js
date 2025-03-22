window.addEventListener('scroll', function() {
    const apword = document.querySelector('.apword');
    const scrollPosition = window.scrollY;
    
    // Calculate new position with a max limit (adjust as needed)
    let newTop = 80 + scrollPosition * 0.05;

    // Set an upper limit to prevent infinite movement
    const maxTop = 100; // Adjust this value as needed
    if (newTop > maxTop) {
        newTop = maxTop;
    }

    apword.style.top = newTop + '%';
});