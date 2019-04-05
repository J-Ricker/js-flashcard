// event listeners

function eventListeners() {


    const showBtn = document.getElementById("show-btn");
    const questionCard = document.querySelector(".question-card");
    const closeBtn = document.querySelector(".close-btn");
    const form = document.getElementById("question-form");
    const feedback = document.querySelector(".feedback");
    const questionInput = document.getElementById("question-input");
    const answerInput = document.getElementById("answer-input");
    const questionList = document.getElementById("questions-list");
    
    let data = [];
    let id = 1;

    // new ui instance

    const ui = new UI();
    // show questions form
    showBtn.addEventListener('click', function () {
        ui.showQuestion(questionCard);
    });

    closeBtn.addEventListener('click', function () {
        ui.hideQuestion(questionCard);
    })
}

//UI constructor
function UI () {}
//show question card
UI.prototype.showQuestion = function(element) {
    element.classList.add('showItem');
}

//hide question card
UI.prototype.hideQuestion = function(element) {
    element.classList.remove('showItem');
}

// question constructor
function Question () {

}


// dom event listener

document.addEventListener('DOMContentLoaded', function() {
    eventListeners();
})