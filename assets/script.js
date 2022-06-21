
q1 = {question:"Which of the following best describes a Web API?"
    , a1: {
        answer:"Web APIs are not built into the browser by default, and you generally have to retrieve their code and information from somewhere on the Web."
        , correct:false
    }
    , a2: {
        answer:"Web APIs are built into your web browser and contain methods that allow us to manipulate a web page via JavaScript."
        , correct:true
    }
    , a3: {
        answer:"Web APIs are a part of the JavaScript language itself and are built into your browser."
        , correct:false
    }
    , a4: {
        answer:"Web APIs are low level code (say C or C++) that directly control the computer's GPU or other graphics functions."
        , correct:false
    }
}

q2 = {question:"Which of the following would change an element's background to red?"
    , a1: {
        answer:'element.setAttribute("style", "red");'
        , correct:false
    }
    , a2: {
        answer:'element.setAttribute("red");'
        , correct:false
    }
    , a3: {
        answer:'element.setAttribute("class", "background: red");'
        , correct:false
    }
    , a4: {
        answer:'element.setAttribute("style", "background-color: red");'
        , correct:true
    }
}

q3 = {question:'How would you append the following to the DOM? var myDiv = document.createElement(""div"");'
    , a1: {
        answer:'document.body.appendChild(myDiv);'
        , correct:true
    }
    , a2: {
        answer:'myDiv.appendChild.document.body;'
        , correct:false
    }
    , a3: {
        answer:'document.body.appendChild = myDiv;'
        , correct:false
    }
    , a4: {
        answer:'document.body.appendChild("div");'
        , correct:false
    }
}

q4 = {question:'What value would we add to setInterval() if we want a function called, myTimer() to run every 3 seconds?'
    , a1: {
        answer:'setInterval(myTimer, 3)'
        , correct:true
    }
    , a2: {
        answer:'setInterval(myTimer, 3000)'
        , correct:false
    }
    , a3: {
        answer:'setInterval(myTimer, 300)'
        , correct:false
    }
    , a4: {
        answer:'setInterval(myTimer, 30)'
        , correct:false
    }
}

q5 = {question:'Which attribute would we use to send an alert to the user when they click a specific element?'
    , a1: {
        answer:"onchange='alert('You clicked me.')'"
        , correct:false
    }
    , a2: {
        answer:"onclick='alert('You clicked me.')'"
        , correct:true
    }
    , a3: {
        answer: "onclose='alert('You clicked me.')'"
        , correct:false
    }
    , a4: {
        answer:"ontoggle='alert('You clicked me.')'"
        , correct:false
    }
}

q6 = {question:'While creating a form for a client, you decide that you do not want the corresponding browser actions to happen, and you want to implement another behavior instead. What would you use to make this possible?'
    , a1: {
        answer:"event.stopPropagation()"
        , correct:false
    }
    , a2: {
        answer:"event.dispatchEvent()"
        , correct:false
    }
    , a3: {
        answer: "event.preventDefault()"
        , correct:true
    }
    , a4: {
        answer:"event.stopAction()"
        , correct:false
    }
}

q7 = {question:"You need to add an event listener to an element, pressEl, that checks to see if the element has been clicked and then runs myFunction(). Which of the following would you add to your code?"
    , a1: {
        answer:'pressEl.addEventListener("keydown", myFunction())'
        , correct:false
    }
    , a2: {
        answer:'addEventListener(pressEL, "mouseover", myFunction())'
        , correct:false
    }
    , a3: {
        answer: 'pressEl.addEventListener("click", myFunction)'
        , correct:true
    }
    , a4: {
        answer:'addEventListener(pressEL, "click", myFunction)'
        , correct:false
    }
}

q8 = {question:"Your colleague notices that when she clicks on a <p> element on her page, handlers run on <p> and on <p>'s parent elements as well. She asks you to help her debug. Which of the following is most likely?"
    , a1: {
        answer:"A bubbling event is occurring that starts with the target element, <p>, and is then running handlers on <p>'s parent and other ancestors."
        , correct:true
    }
    , a2: {
        answer:'She forgot to add event.preventDefault() in her script.js file.'
        , correct:false
    }
    , a3: {
        answer: 'She added an event listener in the wrong place in her html file.'
        , correct:false
    }
    , a4: {
        answer:'The parent node of <p> is triggering a bubbling event that is bubbling down towards <p> when it is clicked.'
        , correct:false
    }
}

q9 = {question:"Which property can you use in order to implement event delegation?"
    , a1: {
        answer:"event.preventDefault()"
        , correct:true
    }
    , a2: {
        answer:'event.target'
        , correct:false
    }
    , a3: {
        answer: 'event.addEventListener()'
        , correct:false
    }
    , a4: {
        answer:'event.stopPropagation()'
        , correct:false
    }
}

q10 = {question:"Which statement best describes what is happening to data when it is persisted to local storage."
    , a1: {
        answer:"The data is stored in the database in the backend."
        , correct:false
    }
    , a2: {
        answer:'The data is stored in the window called localStorage.'
        , correct:false
    }
    , a3: {
        answer: 'The data is stored under the Applications tab in Chrome Dev Tools.'
        , correct:false
    }
    , a4: {
        answer:'The data is stored in the client or browser.'
        , correct:true
    }
}

q11 = {question:"Why do we need to convert an object into JSON in order for it to properly persist to local storage?"
    , a1: {
        answer:"Local storage can only store strings, so we convert the object to JSON to store it properly."
        , correct:true
    }
    , a2: {
        answer:'Local storage cannot read JavaScript, so we convert JavaScript into JSON.'
        , correct:false
    }
    , a3: {
        answer: 'Local storage only accepts JSON objects.'
        , correct:false
    }
    , a4: {
        answer:'It is convention to store objects using JSON, and we must follow that pattern so that our code is easy to read.'
        , correct:false
    }
}

q12 = {question:"You would like to set var classAttribute equal to an element's class attribute so that you can use the variable later in your code. Which of the following would accomplish this?"
    , a1: {
        answer:'var classAttribute = element.setAttribute("class");'
        , correct:false
    }
    , a2: {
        answer:'var classAttribute = element.getAttribute("class");'
        , correct:true
    }
    , a3: {
        answer: 'var classAttribute = element.setAttribute("class", "classAttribute);'
        , correct:false
    }
    , a4: {
        answer:'var classAttribute = element.removeAttribute("class);'
        , correct:false
    }
}

q13 = {question:'You need to retrieve data with the key name of "formData" from local storage and convert it into an object. How would you accomplish this?'
    , a1: {
        answer:'var formData = JSON.parse(localStorage.getItem("formData"));'
        , correct:false
    }
    , a2: {
        answer:'var formData = JSON.parse(localStorage.setItem("formData"));'
        , correct:true
    }
    , a3: {
        answer: 'var formData = JSON.parse("formData");'
        , correct:false
    }
    , a4: {
        answer:'var formData = JSON.stringify(localStorage.getItem("formData"));'
        , correct:false
    }
}
q14 = {question:"You just finished the feature that you've been working on a successfully merged your branch, feature-52. How would you delete branch, feature-52?"
    , a1: {
        answer:'git merge feature-52'
        , correct:false
    }
    , a2: {
        answer:'git branch -d feature-52'
        , correct:true
    }
    , a3: {
        answer: 'git branch feature-52'
        , correct:false
    }
    , a4: {
        answer:'git checkout feature-52'
        , correct:false
    }
}
q15 = {question:"Which of the following is NOT an example of why we use client-side storage?"
    , a1: {
        answer:"It is best practice to use client-side storage to store sensitive information, like a user's payment information."
        , correct:false
    }
    , a2: {
        answer:"It allows us to store the contents of a user's shopping cart from a previous session."
        , correct:true
    }
    , a3: {
        answer: "We can use it to remember a user's preferences."
        , correct:false
    }
    , a4: {
        answer:"It can allow a user to use a site without a network connection."
        , correct:false
    }
}

var indexCnt = 0;

var questions = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15];

var score = 0;
// main link
var mainEl = document.getElementById("root");
// question header link
var questionHead = document.getElementById("question");
// ol link
var answerOl = document.getElementById("answers");
// score link
var scoreEl = document.getElementById("score");
// timer link
var timerEl = document.getElementById("timer");
// time-left link
var timeLeftEl = document.getElementById("time-left");
// next link
var nextEl= document.getElementById("next");
// next-button link
var nextBtn= document.getElementById("next-btn");
// score link
var currentScore = document.getElementById("current-score");
// report card link
var reportCard = document.getElementById("report-card");
// final score link
var finalScore = document.getElementById("final-score");
// test btn link
var testBtn = document.getElementById("test-btn");
// init submit link
var initSubmit = document.getElementById("init-submit");
// navbar link
var navbarEl = document.getElementById("navbar");
// proceed
var proceedToNextQuestion = false;

var time;

var countdown = 50;

var wrongGuesses = 0;
// high score link
var highScores = document.getElementById("high-scores");

function renderQuestion(questionObj){
    wrongGuesses=0;
    countdown=50;
    nextBtn.classList.add("hidden");
    reportCard.classList.add("hidden");
    questionHead.textContent = questionObj.question;
    var a1 = document.createElement("li");
    a1.textContent = questionObj.a1.answer;
    a1.classList.add("answer-button");
    a1.dataset.correct = questionObj.a1.correct;
    var a2 = document.createElement("li");
    a2.textContent = questionObj.a2.answer;
    a2.classList.add("answer-button");
    a2.dataset.correct = questionObj.a2.correct;
    var a3 = document.createElement("li");
    a3.textContent = questionObj.a3.answer;
    a3.classList.add("answer-button");
    a3.dataset.correct = questionObj.a3.correct;
    var a4 = document.createElement("li");
    a4.textContent = questionObj.a4.answer;
    a4.classList.add("answer-button");
    a4.dataset.correct = questionObj.a4.correct;
    answerOl.append(a1);
    answerOl.append(a2);
    answerOl.append(a3);
    answerOl.append(a4);
    time = setTimer(50);
    answerOl.addEventListener('click', grade);
}

function grade(event, timeLeft=true){
    var result = document.createElement("footer");
    result.classList.add("foot");
    if (timeLeft && wrongGuesses < 3){
        if (answerOl=== event.target) return;
        // correct
        if(event.target.dataset.correct=="true"){
            event.target.setAttribute("style", "background-color:green;")
            if(wrongGuesses==0){
                score++;
            } else {
                score = score + (1-(wrongGuesses*.33));
            }
            result.textContent = "Correct";
            answerOl.removeEventListener('click', grade)
            clearInterval(time);
            nextBtn.classList.remove("hidden");
            currentScore.textContent = (((score)/(indexCnt+1))*100).toFixed(2);
        } else {
            event.target.setAttribute("style", "background-color:red;")
            countdown -= 10;
            wrongGuesses++;
            result.textContent = "Wrong"
        }
    } else{
        for(i=0;i<answerOl.children.length;i++){
            var child = answerOl.children[i];
            if(child.dataset.correct=="true"){
                child.setAttribute("style", "background-color:green;")
            } else {
                child.setAttribute("style", "background-color:red;")
            }
            result.textContent = "Wrong"
            clearInterval(time);
            answerOl.removeEventListener('click', grade)
            nextBtn.classList.remove("hidden");
            currentScore.textContent = (((score)/(indexCnt+1))*100).toFixed(2);
        }
    }
    mainEl.append(result);
}

function setTimer(){
    var timeInterval = setInterval(function () {
      //
      if(countdown>1){
        timeLeftEl.textContent = countdown + " seconds remaining";
        countdown--;
      }else if (countdown>0){
        timeLeftEl.textContent = countdown + " second remaining";
        countdown--;
      }else{
        timeLeftEl.textContent = " ";
        grade(document.createEvent('Event'),false)
        clearInterval();
      }
    },1000);
    return timeInterval;
}

function clearQuestions () {
    var child = answerOl.lastElementChild;
    while (child) {
        answerOl.removeChild(child);
        child = answerOl.lastElementChild;
    }
    var footEl = document.querySelectorAll(".foot");
    footEl.forEach(foot => {
        foot.remove();
    })
    
}

function scoreTest () {
    clearQuestions();
    // hide all the things
    timeLeftEl.textContent = ' ';
    mainEl.classList.add("hidden");
    nextBtn.classList.add("hidden");
    navbarEl.classList.add("hidden");
    reportCard.classList.remove("hidden");
    // render scores
    renderScores();
    // report score
    finalScore.textContent= (((score)/(indexCnt))*100).toFixed(2);
    // enter initials
    // save
}

function testAgain () {
    indexCnt = 0;
    score = 0;
    currentScore.textContent = " ";
    // unhide all the things
    mainEl.classList.remove("hidden");
    nextBtn.classList.remove("hidden");
    navbarEl.classList.remove("hidden");
    // delete scores
    var scoreChild = highScores.lastElementChild;
    while (scoreChild) {
        highScores.removeChild(scoreChild);
        scoreChild = highScores.lastElementChild;
    }
    renderQuestion(questions[indexCnt]);
}

function proceedToNext(){
    indexCnt++;
    if (indexCnt<questions.length){
        clearQuestions();
        renderQuestion(questions[indexCnt]);
    } else {
        scoreTest();
    }
}

function saveScores(event) {
    event.preventDefault();
    var initialsSaved = document.getElementById("initials").value;
    var currentScores = localStorage.getItem('currentScores');
    if(currentScores!=null){
        //currentScores = currentScores.slice(1,-1);
        currentScores += ';{"id":"'+initialsSaved+'","score":'+(((score)/(indexCnt))*100).toFixed(2)+'}';
        //currentScores = "["+currentScores+"]";
    } else {
        currentScores = '{"id":"'+initialsSaved+'","score":'+(((score)/(indexCnt))*100).toFixed(2)+'}';
    }
    localStorage.setItem('currentScores',currentScores);
    document.getElementById("initials").value ='';
    var s1 = document.createElement("li");
    s1.textContent = initialsSaved + ": "+(((score)/(indexCnt))*100).toFixed(2);
    s1.classList.add("high-scores");
    highScores.append(s1);
    initSubmit.removeEventListener('submit',saveScores);
}

function renderScores() {
    var scoreArray = []
    var scores = localStorage.getItem('currentScores');
    if(scores) {
        scores = scores.split(';');
        scores.forEach(score => {
            scoreArray.push(JSON.parse(score));
        })
    }
    scoreArray.forEach(scor => {
        var s1 = document.createElement("li");
        s1.textContent = scor.id + ": "+scor.score;
        s1.classList.add("high-scores");
        highScores.append(s1);
    })
}

nextBtn.addEventListener('click',proceedToNext);
testBtn.addEventListener('click', testAgain);
initSubmit.addEventListener('submit',saveScores);
renderQuestion(questions[indexCnt]);

// todo: decrement time with incorrect answer
// render scores
// create link in navbar to highscores
