<?php
$data = json_decode(file_get_contents("php://input"));

include("connect.php");

$sql = "INSERT INTO cs330_group3.results VALUES ('$data->quizID', '$data->teamName', '$data->name', '$data->score', NOW())";

$result = mysqli_query($con, $sql);

if($result) {
    echo "updated db successfully";
}
else {
    echo "db failed to update";
}

mysqli_close($con);