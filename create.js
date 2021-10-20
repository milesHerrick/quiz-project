document.getElementById("addCheck").addEventListener('click',addQuestion);
let questionNum = 1;
/*var question = {
    rname = 'qtype',
    qnum = 0,
    answer = 1
}*/

function addQuestion(){ 
    questionNum++;
    let qtype = 'qtype' + questionNum;
    let description = 'description' + questionNum;
    let answers = 'answers' + questionNum;
    var linebreak = document.createElement("br");

    //Appends the text to the top
    var choosetext = document.createElement("p");
    var t = document.createTextNode("Choose type of question.");
    choosetext.appendChild(t);
    
    //Creates new question type radio buttons and labels
    var multradio = document.createElement("input");
    multradio.setAttribute("type", "radio");
    multradio.setAttribute("id", "multchoice");
    multradio.setAttribute("name", qtype);
    multradio.setAttribute("value", "multchoice");

    var multlabel = document.createElement("label");
    multlabel.htmlFor = "multchoice";
    multlabel.innerHTML = "Multiple Choice";

    var selectradio = document.createElement("input");
    selectradio.setAttribute("type", "radio");
    selectradio.setAttribute("id", "selectmult");
    selectradio.setAttribute("name", qtype);
    selectradio.setAttribute("value", "selectmult");

    var selectlabel = document.createElement("label");
    selectlabel.htmlFor = "selectmult";
    selectlabel.innerHTML = "Select Multiple";

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
    questiononelabel.setAttribute("placeholder", "Question 1");
    
    var questiontwo = document.createElement("input");
    questiontwo.setAttribute("type", "radio");
    questiontwo.setAttribute("id", "multchoice");
    questiontwo.setAttribute("name", answers);
    questiontwo.setAttribute("value", "question2");

    var questiontwolabel = document.createElement("input");
    questiontwolabel.setAttribute("type", "text");
    questiontwolabel.setAttribute("name", answers);
    questiontwolabel.setAttribute("placeholder", "Question 2");

    var questionthree = document.createElement("input");
    questionthree.setAttribute("type", "radio");
    questionthree.setAttribute("id", "multchoice");
    questionthree.setAttribute("name", answers);
    questionthree.setAttribute("value", "question3");

    var questionthreelabel = document.createElement("input");
    questionthreelabel.setAttribute("type", "text");
    questionthreelabel.setAttribute("name", answers);
    questionthreelabel.setAttribute("placeholder", "Question 3");

    var questionfour = document.createElement("input");
    questionfour.setAttribute("type", "radio");
    questionfour.setAttribute("id", "multchoice");
    questionfour.setAttribute("name", answers);
    questionfour.setAttribute("value", "question4");

    var questionfourlabel = document.createElement("input");
    questionfourlabel.setAttribute("type", "text");
    questionfourlabel.setAttribute("name", answers);
    questionfourlabel.setAttribute("placeholder", "Question 4");

    //Puts all of the new inputs and labels into the HTML file
    document.getElementById("addNew").appendChild(choosetext);
    document.getElementById("addNew").appendChild(multradio);
    document.getElementById("addNew").appendChild(multlabel);
    document.getElementById("addNew").appendChild(selectradio);
    document.getElementById("addNew").appendChild(selectlabel);
    document.getElementById("addNew").appendChild(linebreak);
    linebreak = document.createElement("br");

    document.getElementById("addNew").appendChild(textarea);
    document.getElementById("addNew").appendChild(linebreak);
    linebreak = document.createElement("br");

    document.getElementById("addNew").appendChild(questionone);
    document.getElementById("addNew").appendChild(questiononelabel);
    document.getElementById("addNew").appendChild(linebreak);
    linebreak = document.createElement("br");

    document.getElementById("addNew").appendChild(questiontwo);
    document.getElementById("addNew").appendChild(questiontwolabel);
    document.getElementById("addNew").appendChild(linebreak);
    linebreak = document.createElement("br");

    document.getElementById("addNew").appendChild(questionthree);
    document.getElementById("addNew").appendChild(questionthreelabel);
    document.getElementById("addNew").appendChild(linebreak);
    linebreak = document.createElement("br");

    document.getElementById("addNew").appendChild(questionfour);
    document.getElementById("addNew").appendChild(questionfourlabel);
    document.getElementById("addNew").appendChild(linebreak);
    linebreak = document.createElement("br");

}