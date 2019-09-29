// import qs from './question';
// const questionFile;
// console.log(qs);

// let questions = [];
// let noOfQuestion = 5;
// while (questions.length < noOfQuestion) {
// 	let que = questionFile[Math.floor(Math.random() * questionFile.length)];
// 	questions.push(que);
// }

// let totalQuestion = questions[Math.floor(Math.random() * questions.length)];

// console.log(questions)
let questions = [
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
	}
];

let totalQuestion = questions[Math.floor(Math.random() * questions.length)];
let scoreUI = document.getElementById("scores");

let index = 0;
let score = 0
const next = document.querySelector(".next");
next.addEventListener("click", () => {
	if (index < questions.length - 1) {
		index++;
		loadDetails();
		checkAnswer.style.display = "block";
		nextpic.style.display = "none";
		prev.disabled = false;
	} else {
		next.disabled = true;
		prev.disabled = true;
		next.textContent = "FInished";
	}
});

const prev = document.querySelector(".prev");
prev.addEventListener("click", () => {
	if (index > 0) {
		next.disabled = false;
		index--;
		loadDetails();
	} else {
		prev.disabled = true;
	}
});

let nextpic = document.querySelector('.right-pic')
nextpic.style.display = "none";

// console.log(totalQuestion[index].questions);
startQuiz = () => {
	loadDetails();

	// checking answer//
	const checkAnswer = document.getElementById("checkAnswer");
	// console.log(questions[index].answer);
	// to disable options
	const disableOpt = Array.from(document.querySelectorAll(".optionText"));
	console.log(disableOpt)

	checkAnswer.addEventListener("click", e => {
		// console.log(e.target.textContent)
		if (e.target.textContent === questions[index].answer) {
			console.log("right");
			checkAnswer.style.display = 'none'
			nextpic.style.display = "block"
			score++
			console.log(score)
			scoreUI.textContent = `score: ${score}`
		} else {
			console.log("wrong");
			// disableOpt.disabled = true;
			checkAnswer.style.display = "none";
			nextpic.style.display = "block";
		}
		// console.log('right answer' + questions[index].answer);
	});
};

loadDetails = () => {
	let displayQuestion = document.getElementById("question");
	displayQuestion.textContent = questions[index].question;

	// console.log(totalQuestion.options)

	let displayOptions = Array.from(document.querySelectorAll(".optionText"));
	// console.log(displayOptions)

	for (let i = 0; i < questions[index].options.length; i++) {
		displayOptions[i].textContent = questions[index].options[i];
	}
};

startQuiz();
