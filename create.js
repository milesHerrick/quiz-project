document.getElementById("addCheck").addEventListener('click',addQuestion);
let questionNum = 1;

//Replaces question boxes with short answer box
function replaceanswer(event){
    
    let num = event.substring(8);
    let stringtonum = parseInt(num, 10);
    let basenum = ((stringtonum-1)*4)+1;

    let shortname = 'shortansbox' + stringtonum;
    let optionsid = "options" + stringtonum;
    
    var shortansbox = document.createElement("textarea");
    shortansbox.setAttribute("id", shortname);
    shortansbox.setAttribute("class", "shortansbox");
    shortansbox.setAttribute("rows", "5");
    shortansbox.setAttribute("name", "shortansbox");
    shortansbox.setAttribute("Placeholder", "Enter a rough summation of what the answer should be:");
    document.getElementById(optionsid).replaceWith(shortansbox);    
}

//Replaces short answer box with multiple choice boxes
function replaceshort(radioid){
    let num = radioid.substring(10);
    let stringtonum = parseInt(num, 10);
    let basenum = ((stringtonum-1)*4)+1;
    var linebreak = document.createElement("br");

    let shortname = "shortansbox" + stringtonum;
    //Finds what numbers the answers are throughout the entire quiz
    let ans1 = "answer" + basenum;
    let ans2 = "answer" + (basenum + 1);
    let ans3 = "answer" + (basenum + 2);
    let ans4 = "answer" + (basenum + 3);

    let options = "options" + stringtonum;
    let answers = "answers" + stringtonum;

    var optionsdiv = document.createElement("div");
    optionsdiv.setAttribute("class", "options");
    optionsdiv.setAttribute("id", options);

    var questionone = document.createElement("input");
    questionone.setAttribute("type", "radio");
    questionone.setAttribute("id", ans1);
    questionone.setAttribute("name", answers);
    questionone.setAttribute("value", "question1");
    
    var questiononelabel = document.createElement("input");
    questiononelabel.setAttribute("type", "text");
    questiononelabel.setAttribute("id", ans1);
    questiononelabel.setAttribute("name", answers);
    questiononelabel.setAttribute("placeholder", "Answer 1");
              
    var questiontwo = document.createElement("input");
    questiontwo.setAttribute("type", "radio");
    questiontwo.setAttribute("id", ans2);
    questiontwo.setAttribute("name", answers);
    questiontwo.setAttribute("value", "question2");
    
    var questiontwolabel = document.createElement("input");
    questiontwolabel.setAttribute("type", "text");
    questiontwolabel.setAttribute("name", answers);
    questiontwolabel.setAttribute("id", ans2);
    questiontwolabel.setAttribute("placeholder", "Answer 2");
    
    var questionthree = document.createElement("input");
    questionthree.setAttribute("type", "radio");
    questionthree.setAttribute("id", ans3);
    questionthree.setAttribute("name", answers);
    questionthree.setAttribute("value", "question3");
    
    var questionthreelabel = document.createElement("input");
    questionthreelabel.setAttribute("type", "text");
    questionthreelabel.setAttribute("id", ans3);
    questionthreelabel.setAttribute("name", answers);
    questionthreelabel.setAttribute("placeholder", "Answer 3");
    
    var questionfour = document.createElement("input");
    questionfour.setAttribute("type", "radio");
    questionfour.setAttribute("id", ans4);
    questionfour.setAttribute("name", answers);
    questionfour.setAttribute("value", "question4");
    
    var questionfourlabel = document.createElement("input");
    questionfourlabel.setAttribute("type", "text");
    questionfourlabel.setAttribute("id", ans4);
    questionfourlabel.setAttribute("name", answers);
    questionfourlabel.setAttribute("placeholder", "Answer 4");
    
    //Append everything

    optionsdiv.appendChild(questionone);
    optionsdiv.appendChild(questiononelabel);
    optionsdiv.appendChild(linebreak);
    linebreak = document.createElement("br");
    
    optionsdiv.appendChild(questiontwo);
    optionsdiv.appendChild(questiontwolabel);
    optionsdiv.appendChild(linebreak);
    linebreak = document.createElement("br");
    
    optionsdiv.appendChild(questionthree);
    optionsdiv.appendChild(questionthreelabel);
    optionsdiv.appendChild(linebreak);
    linebreak = document.createElement("br");
    
    optionsdiv.appendChild(questionfour);
    optionsdiv.appendChild(questionfourlabel);
    optionsdiv.appendChild(linebreak);
    linebreak = document.createElement("br");
    
    document.getElementById(shortname).replaceWith(optionsdiv);

}

function addQuestion(){ 
    questionNum++;
    //let shortansbox = "shortansbox" + questionNum;
    let options = 'options' + questionNum;
    let shortans = 'shortans' + questionNum;
    let selectmult = 'selectmult' + questionNum;
    let multchoice = 'multchoice' + questionNum;
    let qtype = 'qtype' + questionNum;
    let description = 'description' + questionNum;
    let answers = 'answers' + questionNum;
    var linebreak = document.createElement("br");

    let answer1 = "answer" + (((questionNum - 1) * 4) + 1);
    let answer2 = "answer" + (((questionNum - 1) * 4) + 2);
    let answer3 = "answer" + (((questionNum - 1) * 4) + 3);
    let answer4 = "answer" + (((questionNum - 1) * 4) + 4);

    //Creates the new divs
    var questionsdiv = document.createElement("div");
    questionsdiv.setAttribute("class", "questions");
    questionsdiv.setAttribute("id", "questions");

    var selectDiv = document.createElement("div");
    selectDiv.setAttribute("class", "selection");

    var optionsdiv = document.createElement("div");
    optionsdiv.setAttribute("class", "options");
    optionsdiv.setAttribute("id", options);
    optionsdiv.setAttribute("name", questionNum);

    //Appends the text to the top
    var choosetext = document.createElement("h2");
    var t = document.createTextNode("Choose type of question.");
    choosetext.appendChild(t);
    
    //Creates new question type radio buttons and labels
    var multradio = document.createElement("input");
    multradio.setAttribute("type", "radio");
    multradio.setAttribute("id", multchoice);
    multradio.setAttribute("name", qtype);
    multradio.setAttribute("value", multchoice);
    multradio.setAttribute("onclick", "replaceshort(this.id)")

    var multlabel = document.createElement("label");
    multlabel.setAttribute("for", multchoice)
    multlabel.htmlFor = multchoice;
    multlabel.innerHTML = "Multiple Choice";

    var selectradio = document.createElement("input");
    selectradio.setAttribute("type", "radio");
    selectradio.setAttribute("id", selectmult);
    selectradio.setAttribute("name", qtype);
    selectradio.setAttribute("value", selectmult);
    selectradio.setAttribute("onclick", "replaceshort(this.id)")

    var selectlabel = document.createElement("label");
    selectlabel.htmlFor = selectmult;
    selectlabel.innerHTML = "Select Multiple";

    //short answer
    var shortradio = document.createElement("input");
    shortradio.setAttribute("type", "radio");
    shortradio.setAttribute("id", shortans);
    shortradio.setAttribute("name", qtype);
    shortradio.setAttribute("value", shortans);
    shortradio.setAttribute("class", "shortans");
    shortradio.setAttribute("onclick", "replaceanswer(this.id)")

    var shortlabel = document.createElement("label");
    shortlabel.htmlFor = shortans;
    shortlabel.innerHTML = "Short Answer";
    shortlabel.setAttribute("for", shortans);

    //Creates new description area
    var textarea = document.createElement("textarea");
    textarea.setAttribute("id", "description");
    textarea.setAttribute("name", description);
    textarea.setAttribute("rows", "10");
    textarea.setAttribute("cols", "40");
    textarea.setAttribute("placeholder", "Enter description of question:");

    //Probably going to have to change around id values when setting up database
    //Creates new question answer areas
    var questionone = document.createElement("input");
    questionone.setAttribute("type", "radio");
    questionone.setAttribute("id", answer1);
    questionone.setAttribute("name", answers);
    questionone.setAttribute("value", "question1");
    
    var questiononelabel = document.createElement("input");
    questiononelabel.setAttribute("type", "text");
    questiononelabel.setAttribute("id", answer1);
    questiononelabel.setAttribute("name", answers);
    questiononelabel.setAttribute("placeholder", "Answer 1");
                  
    var questiontwo = document.createElement("input");
    questiontwo.setAttribute("type", "radio");
    questiontwo.setAttribute("id", answer2);
    questiontwo.setAttribute("name", answers);
    questiontwo.setAttribute("value", "question2");

    var questiontwolabel = document.createElement("input");
    questiontwolabel.setAttribute("type", "text");
    questiontwolabel.setAttribute("name", answers);
    questiontwolabel.setAttribute("id", answer2);
    questiontwolabel.setAttribute("placeholder", "Answer 2");

    var questionthree = document.createElement("input");
    questionthree.setAttribute("type", "radio");
    questionthree.setAttribute("id", answer3);
    questionthree.setAttribute("name", answers);
    questionthree.setAttribute("value", "question3");

    var questionthreelabel = document.createElement("input");
    questionthreelabel.setAttribute("type", "text");
    questionthreelabel.setAttribute("id", answer3);
    questionthreelabel.setAttribute("name", answers);
    questionthreelabel.setAttribute("placeholder", "Answer 3");

    var questionfour = document.createElement("input");
    questionfour.setAttribute("type", "radio");
    questionfour.setAttribute("id", answer4);
    questionfour.setAttribute("name", answers);
    questionfour.setAttribute("value", "question4");

    var questionfourlabel = document.createElement("input");
    questionfourlabel.setAttribute("type", "text");
    questionfourlabel.setAttribute("id", answer4);
    questionfourlabel.setAttribute("name", answers);
    questionfourlabel.setAttribute("placeholder", "Answer 4");

    var timerdiv = document.createElement("div");
    timerdiv.setAttribute("class", "timer");

    var timerinvis = document.createElement("input");
    timerinvis.setAttribute("type", "radio");
    timerinvis.setAttribute("id", "timerinvis");
    timerinvis.setAttribute("name", "timerinvis");
    timerinvis.setAttribute("value", "timerinvis");

    var timer = document.createElement("input");
    timer.setAttribute("type", "number");
    timer.setAttribute("name", "timer");
    timer.setAttribute("placeholder", "Time For This Question");

    //Puts all of the new inputs and labels into the HTML file
    questionsdiv.appendChild(choosetext);

    selectDiv.appendChild(multradio);
    selectDiv.appendChild(multlabel);
    selectDiv.appendChild(selectradio);
    selectDiv.appendChild(selectlabel);
    selectDiv.appendChild(shortradio);
    selectDiv.appendChild(shortlabel);
    selectDiv.appendChild(linebreak);
    linebreak = document.createElement("br");
    questionsdiv.appendChild(selectDiv);

    questionsdiv.appendChild(textarea);
    questionsdiv.appendChild(linebreak);
    linebreak = document.createElement("br");

    optionsdiv.appendChild(questionone);
    optionsdiv.appendChild(questiononelabel);
    optionsdiv.appendChild(linebreak);
    linebreak = document.createElement("br");

    optionsdiv.appendChild(questiontwo);
    optionsdiv.appendChild(questiontwolabel);
    optionsdiv.appendChild(linebreak);
    linebreak = document.createElement("br");

    optionsdiv.appendChild(questionthree);
    optionsdiv.appendChild(questionthreelabel);
    optionsdiv.appendChild(linebreak);
    linebreak = document.createElement("br");

    optionsdiv.appendChild(questionfour);
    optionsdiv.appendChild(questionfourlabel);
    optionsdiv.appendChild(linebreak);
    linebreak = document.createElement("br");

    questionsdiv.appendChild(optionsdiv);

    timerdiv.appendChild(timerinvis);
    timerdiv.appendChild(timer);
    timerdiv.appendChild(linebreak);
    linebreak = document.createElement("br");

    questionsdiv.appendChild(timerdiv);

    document.getElementById("addNew").appendChild(questionsdiv);

}