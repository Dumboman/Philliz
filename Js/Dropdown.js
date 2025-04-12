document.addEventListener("DOMContentLoaded", function () {
    let dropdown = document.querySelector(".dropdown");
    let dropdownMenu = document.querySelector(".dropdown-menu");

    dropdown.addEventListener("mouseenter", function () {
        dropdownMenu.style.display = "block";
    });

    dropdownMenu.addEventListener("mouseenter", function () {
        dropdownMenu.style.display = "block";
    });

    dropdown.addEventListener("mouseleave", function () {
        setTimeout(() => {
            if (!dropdownMenu.matches(":hover")) {
                dropdownMenu.style.display = "none";
            }
        }, 200); // Adds a slight delay to prevent flickering
    });

    dropdownMenu.addEventListener("mouseleave", function () {
        dropdownMenu.style.display = "none";
    });
});
