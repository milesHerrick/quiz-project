document.getElementById("addCheck").addEventListener('click',addQuestion)

function addQuestion(){ //pass parameter of the current elements and add the new one to those
    let output = '<p>Choose type of question.</p> <input type="radio" id="multchoice" name="qtype" value="multchoice"> <label for="multchoice">Multiple Choice</label><br> <input type="radio" id="selectmult" name="qtype" value="selectmult"> <label for="selectmult">Select Multiple</label><br> <textarea id="description" name="description" rows="10" cols="40" placeholder="Enter description of question:"></textarea><br> <input type="radio" id="multchoice" name="answers" value="question1"><input type="text" name="answers" placeholder="Question 1"/><br> <input type="radio" id="selectmult" name="answers" value="question2"><input type="text" name="answers" placeholder="Question 2"/><br> <input type="radio" id="multchoice" name="answers" value="question3"><input type="text" name="answers" placeholder="Question 3"/><br> <input type="radio" id="selectmult" name="answers" value="question4"><input type="text" name="answers" placeholder="Question 4"/><br>';
    output += `
    
                `
                
    document.getElementById("addNew").innerHTML += output;
}
//<p>Choose type of question.</p> <input type="radio" id="multchoice" name="qtype" value="multchoice"> <label for="multchoice">Multiple Choice</label><br> <input type="radio" id="selectmult" name="qtype" value="selectmult"> <label for="selectmult">Select Multiple</label><br> <textarea id="description" name="description" rows="10" cols="40" placeholder="Enter description of question:"></textarea><br> <input type="radio" id="multchoice" name="answers" value="question1"><input type="text" name="answers" placeholder="Question 1"/><br> <input type="radio" id="selectmult" name="answers" value="question2"><input type="text" name="answers" placeholder="Question 2"/><br> <input type="radio" id="multchoice" name="answers" value="question3"><input type="text" name="answers" placeholder="Question 3"/><br> <input type="radio" id="selectmult" name="answers" value="question4"><input type="text" name="answers" placeholder="Question 4"/><br>';