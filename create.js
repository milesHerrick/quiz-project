@@ -6,27 +6,124 @@ let questionNum = 1;
    answer = 1
}*/

function addQuestion(){ //pass parameter of the current elements and add the new one to those
function addQuestion(){ 
    questionNum++;
    let qtype = 'qtype' + questionNum;
    let output = `<p>Choose type of question.</p> 
    <input type="radio" id="multchoice" name="qtype" value="multchoice"> 
    <label for="multchoice">Multiple Choice</label>
    <input type="radio" id="selectmult" name="qtype" value="selectmult"> 
    <label for="selectmult">Select Multiple</label>
    <textarea id="description" name="description" rows="10" cols="40" placeholder="Enter description of question:"></textarea><br> 
    <input type="radio" id="multchoice" name="answers" value="question1">
    <input type="text" name="answers" placeholder="Question 1"/><br> 
    <input type="radio" id="selectmult" name="answers" value="question2">
    <input type="text" name="answers" placeholder="Question 2"/><br> 
    <input type="radio" id="multchoice" name="answers" value="question3">
    <input type="text" name="answers" placeholder="Question 3"/><br> 
    <input type="radio" id="selectmult" name="answers" value="question4">
    <input type="text" name="answers" placeholder="Question 4"/><br>`;
    output += `
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
    
                `
                
    document.getElementById("addNew").innerHTML = document.getElementById("addNew").innerHTML + output;
}
//<p>Choose type of question.</p> <input type="radio" id="multchoice" name="qtype" value="multchoice"> <label for="multchoice">Multiple Choice</label><br> <input type="radio" id="selectmult" name="qtype" value="selectmult"> <label for="selectmult">Select Multiple</label><br> <textarea id="description" name="description" rows="10" cols="40" placeholder="Enter description of question:"></textarea><br> <input type="radio" id="multchoice" name="answers" value="question1"><input type="text" name="answers" placeholder="Question 1"/><br> <input type="radio" id="selectmult" name="answers" value="question2"><input type="text" name="answers" placeholder="Question 2"/><br> <input type="radio" id="multchoice" name="answers" value="question3"><input type="text" name="answers" placeholder="Question 3"/><br> <input type="radio" id="selectmult" name="answers" value="question4"><input type="text" name="answers" placeholder="Question 4"/><br>';
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