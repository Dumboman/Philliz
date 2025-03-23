let currentPage = 0;
const pages = document.querySelectorAll('.page');
const totalPages = pages.length;
let isScrolling = false;
let isInScrollableSection = false;

const scrollableSection = document.getElementById('scrollable-section');

// Function to smoothly scroll to a specific page
function scrollToPage(pageIndex, callback = null) {
    const offset = -pageIndex * 100; // Convert to vh for full-screen transition
    document.querySelector('.pages-container').style.transition = 'transform 0.6s ease-in-out';
    document.querySelector('.pages-container').style.transform = `translateY(${offset}vh)`; // Make sure it fits the screen properly

    setTimeout(() => {
        if (callback) callback();
    }, 600); // The timeout here matches the transition duration
}

// Function to smoothly exit before leaving the section
function exitScrollableSection(direction) {
    document.body.classList.remove('no-scroll');

    setTimeout(() => {
        if (direction === 'up') {
            // Ensures smooth exit back to the previous section
            window.scrollTo({ top: scrollableSection.offsetTop - window.innerHeight, behavior: 'smooth' });
        } else if (direction === 'down') {
            window.scrollTo({ top: scrollableSection.offsetTop + scrollableSection.clientHeight, behavior: 'smooth' });
        }
    }, 300);

    isScrolling = false;
}

// Observe when the user enters/leaves the full-page scroll section
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            isInScrollableSection = entry.isIntersecting;

            if (isInScrollableSection) {
                document.body.classList.add('no-scroll');
            } else {
                document.body.classList.remove('no-scroll');
            }
        });
    },
    { threshold: 0.75 }
);
observer.observe(scrollableSection);

// Track the bottom of Page 3
const page3 = pages[2]; // Page 3 is the 3rd page (index 2)
const page3Bottom = page3.offsetTop + page3.clientHeight; // Calculate the bottom position of Page 3
let hasScrolledFromPage3 = false; // Track if we started the scroll from Page 3

// Listen for scroll events inside the section
document.addEventListener('wheel', function(event) {
    if (!isInScrollableSection || isScrolling) return;

    // Scroll Up from Page 1 (exit upwards)
    if (currentPage === 0 && event.deltaY < 0) {
        isScrolling = true;
        scrollToPage(0, () => {
            exitScrollableSection('up');
        });
        return;
    }

    // Scroll Down from Page 4 (exit downwards)
    if (currentPage === totalPages - 1 && event.deltaY > 0) {
        exitScrollableSection('down');
        return;
    }

    // Scroll Up from Page 4: Only allow scroll when Page 4 is fully out
    if (currentPage === totalPages - 1 && event.deltaY < 0) {
        // Lock scrolling until the page has completely moved out
        isScrolling = true;
        scrollToPage(currentPage - 1, () => {
            currentPage--;
            isScrolling = false;
        });
        return;
    }

    // Scroll Down or Up normally
    isScrolling = true;

    if (event.deltaY > 0) {
        currentPage = Math.min(currentPage + 1, totalPages - 1);
    } else {
        currentPage = Math.max(currentPage - 1, 0);
    }

    // Smooth scroll transition
    scrollToPage(currentPage, () => {
        isScrolling = false;
    });
});

// Initial page load setup
scrollToPage(currentPage);
