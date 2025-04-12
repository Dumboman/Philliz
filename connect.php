<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $servername = 'localhost';
    $username = 'root';
    $password = '';
    $dbname = 'form';
    $port = 3307;  // Specify the port here

    // Create a new MySQL connection with the specified port
    $con = new mysqli($servername, $username, $password, $dbname, $port);

    if ($con->connect_error) {
        die("Connection failed: " . $con->connect_error);
    }

    // Prepared statement to insert data safely
    $sql = "INSERT INTO `data` (name, email, phone, message) VALUES (?, ?, ?, ?)";
    $stmt = $con->prepare($sql);
    $stmt->bind_param("ssss", $name, $email, $phone, $message);  // "ssss" indicates 4 string parameters

    if ($stmt->execute()) {
        echo "Data inserted successfully";
    } else {
        die("Error inserting data: " . $stmt->error);
    }

    $stmt->close();
    $con->close();
}
?>
