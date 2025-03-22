document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            if (this.hash !== "") {
                event.preventDefault();
                const target = document.querySelector(this.hash);

                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 50, // Adjust for fixed navbar if needed
                        behavior: "smooth"
                    });
                }
            }
        });
    });
});
