document.getElementById("done").addEventListener("click", createQuiz);

function createQuiz() {
    if(confirm("Quiz has been created! The code is: JHW7T")) {
        window.open('/faculty/faculty.html', '_self');
    }
}