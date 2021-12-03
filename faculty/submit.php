<?php

$data = json_decode(file_get_contents("php://input"));

include("connect.php");

$sql = "INSERT INTO cs330_group3.questions VALUES ('$data->qID', '$data->prompt', '$data->qtype', '$data->ans1', '$data->ans2', '$data->ans3', '$data->ans4', '$data->solutions')";

$result = mysqli_query($con, $sql);

if($result) {
    echo "updated db successfully";
}
else {
    echo "db failed to update";
}

mysqli_close($con);
?>