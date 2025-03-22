window.addEventListener('scroll', function() {
    const apword = document.querySelector('.apword');
    const scrollPosition = window.scrollY;
    apword.style.top = 80 + scrollPosition * 0.05 + '%';  // Reduced multiplier for slower movement
  });
  