document.addEventListener("DOMContentLoaded", () => {
  const quoteContainers = document.querySelectorAll('.quote-container');

  const options = {
      root: null, // Observe the viewport
      threshold: 0.5, // Trigger when 50% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
              // Apply staggered delay and make it appear once
              entry.target.classList.add('visible');
              entry.target.style.transitionDelay = `${index * 0.2}s`;
              observer.unobserve(entry.target); // Stop observing after appearing
          }
      });
  }, options);

  quoteContainers.forEach((container) => {
      observer.observe(container);
  });
});
