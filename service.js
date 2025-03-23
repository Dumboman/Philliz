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
    }, 600);
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

    if (currentPage === 0 && event.deltaY < 0) {
        // 🚀 Exit upwards and align at the top
        isScrolling = true;
        scrollToPage(0, () => {
            exitScrollableSection('up');
        });
        return;
    }

    if (currentPage === totalPages - 1 && event.deltaY > 0) {
        // 🚀 Exit downwards smoothly
        exitScrollableSection('down');
        return;
    }

    if (currentPage === totalPages - 1 && !hasScrolledFromPage3 && event.deltaY > 0) {
        // Check if the user has reached the bottom of Page 3 and trigger the scroll up to Page 1
        if (window.scrollY + window.innerHeight >= page3Bottom) {
            isScrolling = true;
            hasScrolledFromPage3 = true; // Lock to prevent triggering again
            scrollToPage(0, () => {
                exitScrollableSection('up');
            });
            return;
        }
    }

    isScrolling = true;

    if (event.deltaY > 0) {
        currentPage = Math.min(currentPage + 1, totalPages - 1);
    } else {
        currentPage = Math.max(currentPage - 1, 0);
    }

    // Correct full-screen transition
    scrollToPage(currentPage, () => {
        isScrolling = false;
    });
});

// Initial page load setup
scrollToPage(currentPage);
