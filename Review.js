document.addEventListener("DOMContentLoaded", () => {
    const quoteContainers = document.querySelectorAll('.quote-container');
  
    const options = {
      root: null, // Observe the viewport
      threshold: 0.5, // Trigger when 50% of the element is visible
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Apply staggered delay to each quote-container
          entry.target.classList.add('visible');
          entry.target.style.transitionDelay = `${index * 0.2}s`; // Delay for each element
        } else {
          // Remove visible class when the element is not in view (scrolling up)
          entry.target.classList.remove('visible');
        }
      });
    }, options);
  
    quoteContainers.forEach((container, index) => {
      observer.observe(container);
    });
  });
  