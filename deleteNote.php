<?php
    session_start();
    include 'dbConnect.php';
    $userName = $_SESSION['username'];
    $id = $_POST['id'];
    $query = "DELETE FROM `notes` WHERE `notes`.`note_id` =".$id.";";
    mysqli_query($dbcnx, $query);
     mysqli_close($dbcnx);
?>
