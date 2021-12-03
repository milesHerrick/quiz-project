<?php

header("Quiz: quiz/json");

$data = json_decode(file_get_contents("php://input"));

include("connect.php");

$sql = "INSERT INTO cs330_group3.questions VALUES ($data->qID, $data->prompt, $data->qtype, $data->ans1, $data->ans2, $data->ans3, $data->ans4, $data->solutions)";

echo "loll";


mysqli_query($con, $sql);

mysqli_close($con);

return "lol";
?>