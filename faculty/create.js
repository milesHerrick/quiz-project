var addbtn = document.getElementById('addQuestion');
var submitbtn = document.getElementById('submit');

var questionArr = [];
var qnum = 1;
var questionType = 'single';
var textAreas = document.getElementsByClassName('textprompt');
var textInput = document.getElementsByClassName('ansText');
var quizID = Math.floor(100000 + Math.random() * 900000);

addbtn.onclick = function () {addQuestion()};
submitbtn.onclick = function () {submitQuestions()};

function addQuestion() {
    var tempQuestion = [];


    tempQuestion.push(quizID);

    tempQuestion.push(document.getElementById('prompt').value);

    // get the checked radio button
    var temp = document.getElementsByClassName('qtype');
    for(var i = 0; temp[i]; i++) {
        if(temp[i].checked) {
            tempQuestion.push(temp[i].id);
        }
    }

    temp = document.getElementsByClassName('ansText');


    if(questionType !== 'shortanswer') {
        for(var i = 0; temp[i]; i++) {
            tempQuestion.push(temp[i].value);
        }

        temp = document.getElementsByName('ansQ');

        var sol = [];
        for (var i = 0; temp[i]; i++) {
            if (temp[i].checked) {
                sol.push(temp[i].value);
            }
        }
        tempQuestion.push(sol);
        console.log(sol.value);
    }
    else {
        tempQuestion.push(document.getElementById('shortPrompt').value);
        for(var i = 0; i<3; i++) {
            tempQuestion.push('');
        }
        tempQuestion.push([0]);
    }

    questionArr.push(tempQuestion);
    document.getElementById('myform').reset;
    console.log(questionArr);
    console.log(questionType);
    qnum++;
    for(var i = 0; textAreas[i]; i++) {
        textAreas[i].value = '';
    }
    for(var i = 0; textInput[i]; i++){
        textInput[i].value = '';
    }
    document.getElementById('qNum').innerText = "Question " + qnum;
}

function submitQuestions() {
    //push questionArr to database
    let xhr;
    let url = "submit.php"; // this should probably be different depending on what you have

    for(var i = 0; questionArr[i]; i++) {
        xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Quiz", "quiz/json");

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // Print received data from server
                console.log(this.responseText);
            }
        };

        var data = JSON.stringify({
            "qID": questionArr[i][0],
            "prompt": questionArr[i][1],
            "qtype": questionArr[i][2],
            "ans1": questionArr[i][3],
            "ans2": questionArr[i][4],
            "ans3": questionArr[i][5],
            "ans4": questionArr[i][6],
            "solutions": questionArr[i][7].toString()
        });
        console.log(data);
        console.log("Iteration " + i);
        console.log(xhr.send(data));
    }

    alert("Quiz stored successfully. Your access code is: " + quizID);


}



function showShort(radio) {
    var single = document.getElementById('multipleAnswers');
    var short = document.getElementById("shortAnswers");
    if (radio.checked === true && radio.id === 'short') {
        single.style.display = "none" ;
        short.style.display = "flex";
        questionType = 'shortanswer';
    }
    else {
        single.style.display = "flex";
        short.style.display = "none";
        if(radio.checked === true) {
            var typeRadio = document.getElementsByName('ansQ');

            if(radio.id === 'single') {
                for(var i = 0; typeRadio[i]; i++) {
                    typeRadio[i].type = 'radio';
                }
                questionType = 'single';

            }
            else if(radio.id === 'multiple') {
                for(var i = 0; typeRadio[i]; i++) {
                    typeRadio[i].type = 'checkbox';
                }
                questionType = 'multiple';
            }
        }

    }
}








