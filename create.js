document.getElementById("addCheck").addEventListener('click',addQuestion);
let questionNum = 1;

function addQuestion(){ 
    questionNum++;
    let shortans = 'shortans' + questionNum;
    let selectmult = 'selectmult' + questionNum;
    let multchoice = 'multchoice' + questionNum;
    let qtype = 'qtype' + questionNum;
    let description = 'description' + questionNum;
    let answers = 'answers' + questionNum;
    var linebreak = document.createElement("br");

    //Creates the new divs
    var newDiv = document.createElement("div");
    newDiv.setAttribute("class", "question");

    var questionsdiv = document.createElement("div");
    questionsdiv.setAttribute("class", "questions");
    questionsdiv.setAttribute("id", "questions");

    var selectDiv = document.createElement("div");
    selectDiv.setAttribute("class", "selection");

    var optionsdiv = document.createElement("div");
    optionsdiv.setAttribute("class", "options");
    optionsdiv.setAttribute("id", "options");

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

    var multlabel = document.createElement("label");
    multlabel.setAttribute("for", multchoice)
    multlabel.htmlFor = multchoice;
    multlabel.innerHTML = "Multiple Choice";

    var selectradio = document.createElement("input");
    selectradio.setAttribute("type", "radio");
    selectradio.setAttribute("id", selectmult);
    selectradio.setAttribute("name", qtype);
    selectradio.setAttribute("value", selectmult);

    var selectlabel = document.createElement("label");
    selectlabel.htmlFor = selectmult;
    selectlabel.innerHTML = "Select Multiple";

    //short answer
    var shortradio = document.createElement("input");
    shortradio.setAttribute("type", "radio");
    shortradio.setAttribute("id", shortans);
    shortradio.setAttribute("name", qtype);
    shortradio.setAttribute("value", shortans);

    var shortlabel = document.createElement("label");
    shortlabel.htmlFor = shortans;
    shortlabel.innerHTML = "Short Answer";

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
    questionone.setAttribute("id", "multchoice");
    questionone.setAttribute("name", answers);
    questionone.setAttribute("value", "question1");

    var questiononelabel = document.createElement("input");
    questiononelabel.setAttribute("type", "text");
    questiononelabel.setAttribute("name", answers);
    questiononelabel.setAttribute("placeholder", "Answer 1");
                  
    var questiontwo = document.createElement("input");
    questiontwo.setAttribute("type", "radio");
    questiontwo.setAttribute("id", "multchoice");
    questiontwo.setAttribute("name", answers);
    questiontwo.setAttribute("value", "question2");

    var questiontwolabel = document.createElement("input");
    questiontwolabel.setAttribute("type", "text");
    questiontwolabel.setAttribute("name", answers);
    questiontwolabel.setAttribute("placeholder", "Answer 2");

    var questionthree = document.createElement("input");
    questionthree.setAttribute("type", "radio");
    questionthree.setAttribute("id", "multchoice");
    questionthree.setAttribute("name", answers);
    questionthree.setAttribute("value", "question3");

    var questionthreelabel = document.createElement("input");
    questionthreelabel.setAttribute("type", "text");
    questionthreelabel.setAttribute("name", answers);
    questionthreelabel.setAttribute("placeholder", "Answer 3");

    var questionfour = document.createElement("input");
    questionfour.setAttribute("type", "radio");
    questionfour.setAttribute("id", "multchoice");
    questionfour.setAttribute("name", answers);
    questionfour.setAttribute("value", "question4");

    var questionfourlabel = document.createElement("input");
    questionfourlabel.setAttribute("type", "text");
    questionfourlabel.setAttribute("name", answers);
    questionfourlabel.setAttribute("placeholder", "Answer 4");

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

    

    newDiv.appendChild(questionone);
    newDiv.appendChild(questiononelabel);
    newDiv.appendChild(linebreak);
    linebreak = document.createElement("br");

    optionsdiv.appendChild(newDiv);
    newDiv = document.createElement("div");
    newDiv.setAttribute("class", "question");

    newDiv.appendChild(questiontwo);
    newDiv.appendChild(questiontwolabel);
    newDiv.appendChild(linebreak);
    linebreak = document.createElement("br");

    optionsdiv.appendChild(newDiv);
    newDiv = document.createElement("div");
    newDiv.setAttribute("class", "question");

    newDiv.appendChild(questionthree);
    newDiv.appendChild(questionthreelabel);
    newDiv.appendChild(linebreak);
    linebreak = document.createElement("br");

    optionsdiv.appendChild(newDiv);
    newDiv = document.createElement("div");
    newDiv.setAttribute("class", "question");

    newDiv.appendChild(questionfour);
    newDiv.appendChild(questionfourlabel);
    newDiv.appendChild(linebreak);
    linebreak = document.createElement("br");

    optionsdiv.appendChild(newDiv);
    newDiv = document.createElement("div");
    newDiv.setAttribute("class", "timer");

    newDiv.appendChild(timerinvis);
    newDiv.appendChild(timer);
    newDiv.appendChild(linebreak);
    linebreak = document.createElement("br");

    questionsdiv.appendChild(optionsdiv);
    questionsdiv.appendChild(newDiv);

    document.getElementById("addNew").appendChild(questionsdiv);

}