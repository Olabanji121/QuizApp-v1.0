let questionsList = [
	{
		question: "Inside which HTML element do we put the JavaScript??",
		options: ["<script>", "<javascript>", "<js>", "<scripting>"],
		answer: "<script>"
	},
	{
		question:
			"What is the correct syntax for referring to an external script called 'xxx.js'?",
		options: [
			"<script href='xxx.js'>",
			"<script name='xxx.js'>",
			"<script src='xxx.js'>",
			"<script file='xxx.js'>"
		],
		answer: "<script src='xxx.js'>"
	},
	{
		question: " How do you write 'Hello World' in an alert box?",
		options: [
			"msgBox('Hello World');",
			"alertBox('Hello World');",
			"msg('Hello World');",
			"alert('Hello World');"
		],
		answer: "alert('Hello World');"
	},
	{
		question: "What is the capital city?",
		options: ["Lagos", "Abuja", "Ibadan", "Jos"],
		answer: "Abuja"
	},
	{
		question: "How old is the president?",
		options: ["26", "35", "76", "56"],
		answer: "76"
	},
	{
		question: "Who invented the telephone? ",
		options: ["26", "35", "bell", "56"],
		answer: "bell"
	},
	{
		question: "Which nail grows fastest? ",
		options: ["middle", "35", "76", "56"],
		answer: "middle"
	},
	{
		question: "What temperature does water boil at",
		options: ["26", "100c", "76", "56"],
		answer: "100c"
	},
	{
		question: "Who discovered penicillin? ",
		options: ["26", "Fleming", "76", "56"],
		answer: "Fleming"
	},
	{
		question: "What Spanish artist said he would eat his wife when she died?",
		options: ["26", "Dali", "76", "56"],
		answer: "Dali"
	},
	{
		question: "Who did Prince Rainier of Monaco marry?",
		options: ["26", "Grace Kelly", "76", "56"],
		answer: "Grace Kelly"
	},
	{
		question: "What year did the Spanish Civil War end?",
		options: ["26", "Dali", "76", "1939"],
		answer: "1939"
	},
	{
		question: "Where is the smallest bone in the body",
		options: ["26", "Dali", "ear", "56"],
		answer: "ear"
	},
	{
		question: "What does the roman numeral C represent?",
		options: ["26", "Dali", "100", "56"],
		answer: "100"
	},
	{
		question: "What nationality was Chopin?",
		options: ["26", "Dali", "Polish", "56"],
		answer: "Polish"
	},
	{
		question: "When did the Second World War end?",
		options: ["26", "Dali", "1945", "56"],
		answer: "1945"
	},
	{
		question: " What are the first three words of the bible?",
		options: ["26", "In the beginning", "76", "56"],
		answer: "In the beginning"
	},
	{
		question: "What’s the name of the famous big clock in London? ",
		options: ["26", "Dali", "Big Ben", "56"],
		answer: "Big Ben"
	},
	{
		question: "What did the 7 dwarves do for a job?",
		options: ["26", "Dali", "miners", "56"],
		answer: "miners"
	},
	{
		question: "Who painted the Sistine Chapel?",
		options: ["Michelangelo", "Dali", "76", "56"],
		answer: "Michelangelo"
	}
];

let questions = [];

while (questions.length < 5) {
	let que = questionsList[Math.floor(Math.random() * questionsList.length)];
	questions.push(que);
}

// console.log(questions);
let scoreUI = document.getElementById("scores");
let pageUI = document.getElementById("pages");

let index = 0;
let score = 0;
scoreUI.textContent = `score: ${score}`;
let nextpic = document.querySelector(".right-pic");
let poor = document.getElementById("poor");
let gamepage = document.getElementById("checkAnswer");
let playagain = document.getElementById("playagain");
playagain.style.display = "none";
poor.style.display = "none";
nextpic.style.display = "none";

playagain.addEventListener("click", e => {
	startQuiz();
	loadDetails();
});


startQuiz = () => {
	loadDetails();

	// checking answer//
	const checkAnswer = document.querySelectorAll(".option");
	checkAnswer.forEach(e => {
		e.addEventListener("click", () => {
			if (e.value === questions[index].answer) {
				score++;
				console.log(score);
				scoredisplay();
				if (index <= questions.length - 1) {
					index++;
					loadDetails();
					// scoredisplay();
				}
			} else {
				index++;
				scoredisplay();
				loadDetails();
			}
		});
	});

	
};

loadDetails = () => {
	let displayQuestion = document.getElementById("question");
	displayQuestion.textContent = questions[index].question;
	pageUI.textContent = `${index + 1}  / ${questions.length} `;
	let displayOptions = Array.from(document.querySelectorAll(".opt"));
	let optionValue = Array.from(document.querySelectorAll(".option"));

	for (let i = 0; i < questions[index].options.length; i++) {
		displayOptions[i].textContent = questions[index].options[i];
		optionValue[i].value = questions[index].options[i];
	}
};

scoredisplay = () => {
	if (index === questions.length - 1) {
		if (score >= 3) {
			nextpic.style.display = "block";
			scoreUI.style.display = "none";
			gamepage.style.display = "none";
			playagain.style.display = "block";
		} else {
			poor.style.display = "block";
			scoreUI.style.display = "none";
			gamepage.style.display = "none";
			playagain.style.display = "block";
		}
	} else {
		scoreUI.textContent = `score: ${score}`;
	}
};

scoredisplay();

startQuiz();
