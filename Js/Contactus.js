document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the form from submitting in the traditional way

    // Get form data
    var formData = new FormData(this);

    // Send data via fetch
    fetch('connect.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())  // Wait for the response
    .then(data => {
        console.log(data);  // You can check this in your browser's console to see the result
        document.getElementById("successMessage").style.display = "block";  // Show success message
        document.getElementById("contactForm").reset();  // Reset form fields
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
