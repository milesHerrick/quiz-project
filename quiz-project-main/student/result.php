<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz Results Page</title>
    <link rel="stylesheet" href="result.css">
    <link rel="stylesheet" href="../global.css">
    <script defer src="logout.js"></script>
</head>
<body>
    <div>
        <ul class="navleft">
            <li><a href="home.html">Home</a></li>
            <li><a href="join.html">Join</a></li>
        </ul>
        <ul class="navright">
            <li id="out"><a>Sign Out</a></li>
        </ul>
    </div>
    <div id = "flexbox">
        <div id="container">
            <h2>Scores:</h2>
            <h3 id="msg">Hello Terry, your team is: teamname</h3>
            <h3 id="scores">Your scores are: </h3>

            <div class="adminButtons">
                <form action="home.html">
                    <input type = "submit" id = "stopbtn" value = "Return Home"> 
                </form>
            </div>
        </div>
    </div>
    
</body>
</html>

<?php
/**
 * Created by IntelliJ IDEA.
 * User: Turuu
 * Date: 12/2/2021
 * Time: 3:50 AM
 */

//$result = $_GET['data'];

function getResults() {
    DEFINE ('DB_USER', 'CS330G3');
    DEFINE ('DB_PASSWORD', '6MISP7KE');
    DEFINE ('DB_HOST', 'alfred.cs.uwec.edu');
    DEFINE ('DB_NAME', 'CS330_GROUP3');

    $con = @mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME)
    OR die('Could not connect to MySQL: ' .
        mysqli_connect_error());


    if(!mysqli_select_db($con, 'CS330_GROUP3')){
        echo 'Database not selected';
    }


//query database should return an output like: ["prompt", "question type", "ans1", "ans2", "ans3", "ans4", "solution"
//solution is going to be a string with space separated numbers e.g. 1 3 4 if solutions are 1, 3 and 4

    $query = "SELECT * FROM cs330_group3.results ORDER BY date desc";
    //assign the db to $dbase

    $queryResult =  mysqli_query($con, $query);

//if fetch is successful it is going to be a table
    $row = mysqli_fetch_row($queryResult);    //this fetches a row from a table, each call returns next row

    mysqli_close($con);



    return json_encode($row);

}
?>

<script>
    var msg = document.getElementById('msg');
    var scores = document.getElementById('scores');


    function updateFields() {
        var results = '<?php echo getResults() ?>'

        results = JSON.parse(results);

        msg.innerText= "Hello " + results[2] + " your team is: " + results[1];
        scores.innerText = "Your score is: " + results[3] + "/100";

    }

    window.onload = updateFields;



</script>
