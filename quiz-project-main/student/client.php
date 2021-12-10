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
    <div id="joinQuiz">
        <div id="welcome">
            <h1>Welcome to QuizMaster!</h1>
            <h2>Please enter your name and team name below</h2>
        </div>
        <div id="quizCode">
            <form>
            <div class="team">
                <label for="code" >First Name</label>
                <input type="text" id="name" name='name' placeholder="Chase">
            </div>

            <div class="team">
                <label for="code" >Team Name</label>
                <input type="text" id="teamName" placeholder="Ex: Team A">
            </div>

            <button type="button" id='joinBtn'>Join</button>
            </form>
        </div>
    </div>
    <div id="question">
        <div id="top">
            <div id="prompt">
                <h1 id="qnum">Question 1</h1>
                <h2 id="promptText">Lorem ipsum</h2>
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
                <button type="button" id="goResults">Finish</button>
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

$result = $_GET['data'];

function getQuestions() {
    global $result;

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

    $query = "SELECT * FROM cs330_group3.questions WHERE ID=" . $result;
    //assign the db to $dbase

    $queryResult =  mysqli_query($con, $query);



//if fetch is successful it is going to be a table
    $result = array(); //create array object
    if ($queryResult) {
        while($row = mysqli_fetch_array($queryResult)) {    //this fetches a row from a table, each call returns next row
            $result[] = $row;
        }
    }
    mysqli_close($con);



    return json_encode($result);

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
    quizID = 0;
    var parsedQuestions = [];
    var resultsName = [];
    var timerVisual;
    var limit = 60;
    var prompt = document.getElementById('promptText');
    var answers = document.getElementsByClassName('ansText');
    var timer = document.getElementById('timerNum');
    var finish = document.getElementById('goResults');



    var score = 0;
    var quizNum = 0;         // q keeps track of current question number


    document.getElementById('joinBtn').onclick = function(){join()};
    nextBtn = document.getElementById('next').onclick = function(){iterateQuiz()};
    finish.onclick = function(){results()};

    //this fetches from the db and parses it ino an array and also displays first question
    function parseSQL(){
        quiz = '<?php echo getQuestions() ?>';
        //console.log(quiz);

        var questions = JSON.parse(quiz);

        for(var objID in questions) {
            // here you can use construction questions[objId].your_key
            quizID = questions[objID].ID;
            var temp = [];
            // temp will have this format:
            // prompt, qtype, ans1, ans2, ans3, ans4, array of solutions

            temp.push(questions[objID].Question);
            temp.push(questions[objID].QType);
            temp.push(questions[objID].Answer1);
            temp.push(questions[objID].Answer2);
            temp.push(questions[objID].Answer3);
            temp.push(questions[objID].Answer4);
            temp.push(questions[objID].Solution.split(','));

            //console.log(temp);
            parsedQuestions.push(temp);
        }

        displayQuiz();
    }

    function displayQuiz() {
        document.getElementById("qnum").innerText = "Question " + (quizNum + 1);
        // q keeps track of current question number
        //console.log(parsedQuestions[quizNum][0]);


        if(parsedQuestions[quizNum][1] === 'short') {
            var temp = document.getElementsByClassName('answer');
            for(var i = 0; temp[i]; i++) {
                temp[i].style.display = "none";
            }
            document.getElementById('shortAnswers').style.display = "flex";
        }
        else {

            var temp = document.getElementsByClassName('answer');
            for(var i = 0; temp[i]; i++) {
                temp[i].style.display = "flex";
            }
            document.getElementById('shortAnswers').style.display = "none";

            var typeq = document.getElementsByName('ansQ');
            if (parsedQuestions[quizNum][1] === 'multiple') {
                for (var i = 0; typeq[i]; i++) {
                    for (var i = 0; typeq[i]; i++) {
                        typeq[i].type = 'checkbox';
                    }
                }
            } else if (parsedQuestions[quizNum][1] === 'single') {
                for (var i = 0; typeq[i]; i++) {
                    for (var i = 0; typeq[i]; i++) {
                        typeq[i].type = 'radio';
                    }
                }
            }
        }



        prompt.innerText = parsedQuestions[quizNum][0];
        answers[0].innerText = parsedQuestions[quizNum][2];
        answers[1].innerText = parsedQuestions[quizNum][3];
        answers[2].innerText = parsedQuestions[quizNum][4];
        answers[3].innerText = parsedQuestions[quizNum][5];
        limit = 60;
    }

    function iterateQuiz(){
        checkCorrect();
        quizNum++;

        console.log("Current score is " +   score);
        //updateScore();
        if(quizNum < parsedQuestions.length-1) {
            displayQuiz();

        }
        else if(quizNum === parsedQuestions.length-1){
            displayQuiz();

            setButton();
        }

    }

    function checkCorrect() {
        var qType = parsedQuestions[quizNum][1];
        if(qType === 'short') {
            if(document.getElementById('shortPrompt').value.includes(parsedQuestions[quizNum][3])) {
                score++;
            }

        }
        else{
            var radios = document.getElementsByName('ansQ');

            if(qType === 'single') {
                for( i = 0; i < radios.length; i++ ) {
                    if( radios[i].checked && radios[i].value === parsedQuestions[quizNum][6][0]) {
                        console.log("checked answer is " + radios[i].value + "correct is " + parsedQuestions[quizNum][6])
                        score++;
                    }
                }
            }
            else if(qType === 'multiple') {
                var temp = [];
                for(var i = 0; i < radios.length; i++ ) {
                    if(radios[i].checked) {
                        temp.push(radios[i].value);
                    }
                }
                for(var i = 0; i < temp.length; i++) {
                    if(parsedQuestions[quizNum][6].includes(temp[i])) {
                        score++;
                    }
                    else {
                        score--;
                    }
                }
            }

            for(var i = 0; i < radios.length; i++) {
                radios[i].checked = false;
            }

        }
    }


    function join() {
        resultsName[0] = document.getElementById('name').value;
        resultsName[1] = document.getElementById('teamName').value;
        console.log(resultsName);
        document.getElementById('joinQuiz').style.display = 'none';
        document.getElementById('question').style.display = 'flex';
        parseSQL();
        console.log(parsedQuestions.length);
        timerVisual = setInterval(decrementTime, 1000);
    }

    function decrementTime() {
        timer.innerText = limit;
        //console.log(limit);
        limit= limit-1;
        if(limit < 1) {
            limit = 60;
            timer.innerText = limit;
            iterateQuiz();
        }
    }

    function setButton(){
        document.getElementById('next').style.display = 'none';
        finish.style.display = 'flex';
    }

    function results() {
        let xhr = new XMLHttpRequest();
        var url = "submitResults.php";
        xhr.open("POST", url, true);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // Print received data from server
                console.log(this.responseText);
                window.location.href ='result.php';
            }
        };

        var data = JSON.stringify({
            "quizID": quizID,
            "teamName": resultsName[1],
            "name": resultsName[0],
            "score": (score/parsedQuestions.length)*100
        });
        console.log(data);
        xhr.send(data);
    }

    //to do: get the elements in array and change the text on the page
    //then keep track of correct answers
    //send results back to server.php at the end of quiz
</script>
