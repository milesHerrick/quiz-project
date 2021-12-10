<?php
    include("connect.php");

    $query = "SELECT * FROM cs330_group3.results";

    $result = mysqli_query($con, $query);

    $query = "SELECT ID, count(ID) FROM cs330_group3.questions GROUP BY ID ORDER BY ID;";

    $quizzes = mysqli_query($con, $query);

    mysqli_close($con);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Page</title>
    <link rel="stylesheet" href="faculty.css">
    <link rel="stylesheet" href="../global.css">
    <script defer src="logout.js"></script>
</head>
<body>
    <div>
        <ul class="navleft">
            <li><a href="home.html">Home</a></li>
            <li><a href="create.html">Create</a></li>
            <li><a href="faculty.php">Faculty</a></li>
        </ul>
        <ul class="navright">
            <li id="out"><a>Sign Out</a></li>
        </ul>
    </div>
   <div id = "flexbox">
        <div id="container">
            <div class="login">
                <h1>Faculty Page</h1>
            </div>

            <div class="login">
                <h2>List of Quiz Results</h2>
            </div>
            <div class="quizTable">
                <table>
                    <tr>
                       <th>Quiz ID</th>
                       <th>Team</th>
                       <th>Name</th>
                       <th>Current Score</th>
                    </tr>
                    <?php while($row1 = mysqli_fetch_array($result)):;?>
                    <tr>
                        <td><?php echo $row1[0];?></td>
                        <td><?php echo $row1[1];?></td>
                        <td><?php echo $row1[2];?></td>
                        <td><?php echo $row1[3];?></td>

                    </tr>
                    <?php endwhile;?>

                </table>
            </div>
            <div class="login">
                <h2>Available Quiz Codes: </h2>
            </div>
            <div class="quizTable">
                <table>
                    <tr>
                        <th>Quiz ID</th>
                        <th>Number of Questions</th>

                    </tr>
                    <?php while($row1 = mysqli_fetch_array($quizzes)):;?>
                        <tr>
                            <td><?php echo $row1[0];?></td>
                            <td><?php echo $row1[1];?></td>
                        </tr>
                    <?php endwhile;?>
                </table>
            </div>

        </div>
   </div>
        

    
</body>
</html>