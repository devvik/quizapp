$(document).ready(function(){
    let quiz = {
        name:"JS Quiz",
        questions:[
            {
                text:"Which of the following can't be done with client-side JavaScript?",
                answers:["Validating a form","Sending a form's contents by email",
                        "Storing the form's contents to a database file on the server","None of the above"
                        ],
                correct:2
            }
        ]
    }
    $("#startPage").show();
    $("#questionPage").hide();
    $("#answerPage").hide();
    $("#scorePage").hide();
    $("#title").text(quiz.name);
    
    let currentQuestion = 0;
    let score=0;

    $("#start").click(function(){
        $("#startPage").hide();
        $("#questionPage").show();
        displayQuestion();
    })



    function displayQuestion() {
        let htmlQuest=`
            <p> ${quiz.questions[currentQuestion].text}</p>
            <form id="questionForm">`

        for(let i=0; i<quiz.questions[currentQuestion].answers.length;i++) {
            htmlQuest += `<input type="radio" name="answer" value="${i}">
            ${quiz.questions[currentQuestion].answers[i]}
            <br>`
        }
        
        htmlQuest += `
            <button type="submit">Submit</button>
            </form>`

        $("#questionPage").html(htmlQuest);
    }


    $(document).on("submit","questionForm",function(e){
        e.preventDefaultEvent();
        //get value of selected radio button
        //compare to correct value
        //if correct, increment score
        //Display feedback (correct or right answer is...)
        //setTimeout 
        //currentQ++
        //If currentQ === quiz.ques.len --> Display Results, else call to display Question


    });
})