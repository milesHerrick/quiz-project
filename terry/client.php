<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Questions</title>
    <link rel="stylesheet" href="../student/questions.css">
    <link rel="stylesheet" href="../global.css">
    <script defer src="../student/logout.js"></script>
</head>
<body>

<div id="container">
    <div id="question">
        <div id="top">
            <div id="prompt">
                <h1>Question 1</h1>
                <h2>Lorem ipsum</h2>
            </div>
            <div id="timer">
                <div id="timerNum">60</div>
            </div>
        </div>
        <div id="multipleAnswers">
            <div class="answer">
                <input type="radio" name="ansQ" value="0">
                <div class="ansText">ANSWER ONE</div>
            </div>
            <br>
            <div class="answer">
                <input type="radio" name="ansQ" value="1">
                <div class="ansText">ANSWER TWO</div>
            </div>
            <br>
            <div class="answer">
                <input type="radio" name="ansQ" value="2">
                <div class="ansText">ANSWER THREE</div>
            </div>
            <br>
            <div class="answer">
                <input type="radio" name="ansQ" value="3">
                <div class="ansText">ANSWER FOUR</div>
            </div>
            <br>
            <div id="shortAnswers">
                <label for="shortPrompt">Answer To Question</label>
                <textarea class = "textprompt" id="shortPrompt" name="shortPrompt" placeholder="Enter Answer..."></textarea>
            </div>
            <div id="btns">
                <button type="button" id="next">Next Question</button>
            </div>
        </div>
    </div>
</div>

</div>

<div>
    <ul class="navleft">
        <li><a href="home.html">Home</a></li>
        <li><a href="join.html">Join</a></li>
    </ul>
    <ul class="navright">
        <li id="out"><a>Sign Out</a></li>
    </ul>
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



function getQuestions() {


//query database should return an output like: ["prompt", "question type", "ans1", "ans2", "ans3", "ans4", "solution"
//solution is going to be a string with space separated numbers e.g. 1 3 4 if solutions are 1, 3 and 4
/*
    $id = "1"; // this would be the quiz id
    $query = "SELECT * FROM cs330group3.questions WHERE qID = " + $id;
    //assign the db to $dbase
    $dbase = @mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME)

    $queryResult =  mysqli_query($dbase, $query);

//if fetch is successful it is going to be a table
    $result = array(); //create array object
    if ($queryResult) {
        while($row = mysqli_fetch_array($queryResult)) {    //this fetches a row from a table, each call returns next row
            $result[] = $row;
        }
    }

*/
    return json_encode("lol");

}



/*
$host = "127.0.0.1";
$port = "3000";
set_time_limit(0);

$sock = socket_create(AF_INET, SOCK_STREAM,0) or die ("Could not create socket \n");
$result = socket_connect($sock, $host, $port);

$message = "Hello world";

socket_write($sock, $message, strlen($message)) or die ("Could not send data to server");

$result = socket_read($sock, 1024) or die ("Could not read server response");


socket_close($sock);
*/
?>

<script>
    //quiz will be a json object with all the questions
    var quiz = {};

    window.onload = function () {myfunction()};

    function myfunction(){
        quiz = '<?php echo getQuestions() ?>';
        console.log(quiz);
    }
    //to do: get the elements in array and change the text on the page
    //then keep track of correct answers
    //send results back to server.php at the end of quiz
</script>
