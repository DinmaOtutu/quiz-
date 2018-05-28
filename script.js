
var questions = [{
	"question": "choose the correct HTML element for the largest heading:",
	"option1": "<head>",
	"option2":"<h6>",
	"option3":"<heading>",
	"option4":"<h1>",
	"answer": "4"
}, {
	"question": "what does html stand for?",
	"option1": "home tool markup language",
	"option2":"hyperlinks and text markup language",
	"option3":"hyper text markup language",
	"option4":"hyper text text",
	"answer": "3"

}, {
	"question": "who is making the web standards?",
	"option1": "the world web consortium",
	"option2":"google",
	"option3":"microsoft",
	"option4":"mozilla",
	"answer": "1"
}, {
	"question": "whats the correct element for inserting a line break?",
	"option1": "<break>",
	"option2":"<br>",
	"option3":"<bk>",
	"option4":"<lb>",
	"answer": "2"
}, {
	"question": "what is the correct HTML for adding a background color?",
	"option1": "<body style= 'background-color:yellow'>",
	"option2":"<body bg= 'yellow'>",
	"option3":"<background>yellow</background>",
	"option4":"<background color>yellow</background>",
	"answer": "1"
}, {
	"question": "choose the correct HTML element to define important text",
	"option1": "<important>",
	"option2":"<br>",
	"option3":"<imp>",
	"option4":"<strong>",
	"answer": "4"
}, {
	"question": "choose the correct HTML element to define emphasized text",
	"option1": "<important>",
	"option2":"<lb>",
	"option3":"<em>",
	"option4":"<break>",
	"answer": "3"
}, {
	"question": "what is the correct HTML for creating a hyperlink?",
	"option1":"<a>http://www.w3schools.com</a>",
	"option2":"<a href= 'http://www.w3schools.com'>w3schools</a>",
	"option3":"<a name= 'http://www.w3schools.com'>w3schools</a>",
	"option4":"<a url= 'http://www.w3schools.com'>w3schools</a>",
	"answer": "2"
}, {
	"question": " which character is used to indicate an end tag?",
	"option1": "^",
	"option2":"*",
	"option3":"/",
	"option4":"&",
	"answer": "3"
}, {
	"question": "how can you open a link in a new tab/browser window?",
	"option1": "<a href='url' target='_new'>",
	"option2":"<a href='url' target='_blank'>",
	"option3":"<a href='url' new>",
	"option4":"<a href='url' newlink>",
	"answer": "2"
}
];

var currentQuestion = 0;
var score = 0; 
var totQuestions= questions.length;
var container = document.getElementById('quizContainer');
var questionexample = document.getElementById('question');
var opt1 = document.getElementById('option1');
var opt2 = document.getElementById('option2');
var opt3 = document.getElementById('option3');
var opt4 = document.getElementById('option4');
var nextButton = document.getElementById('nextButtons');

var resultCont = document.getElementById('result');

function loadQuestion (questionIndex) {
	var q = questions[questionIndex];
	questionexample.textContent = (questionIndex + 1) + '.' + q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent= q.option4;
	document.getElementById('nextButton').disabled=true;
}

//setting event listeners for the radio buttons
var radd = document.getElementsByClassName('rad');
for(var i=0; i<radd.length; i++){
radd[i].addEventListener("change",function(){
  document.getElementById('nextButton').disabled=false;


});
  
  
}

function loadNextQuestion(){
	
	var selectedOption = document.querySelector('input[type=radio]:checked');

	//content value of radio button
	var ans = selectedOption.value;
	if(questions[currentQuestion].answer==ans){
		score+=1;
	}
	
	//uncheck radio
	selectedOption.checked = false;
	
	
	if((currentQuestion+1)<totQuestions-1){
	currentQuestion++;
	loadQuestion(currentQuestion);
	}
	else if((currentQuestion+1)==totQuestions-1){
		currentQuestion++;
		document.getElementById('nextButton').innerHTML= 'Submit';
		loadQuestion(currentQuestion);
}else {

		document.getElementById("quizContainer").style.display = 'none';
		resultCont.style.display="block";
		resultCont.innerHTML = 'your score:' + score;
}

	}
	
loadQuestion(currentQuestion);
