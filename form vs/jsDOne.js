const questions = [
  {
    question: "which is largest animal in the world?",

    answers: [
      { text: "shark", correct: false },
      { text: "blue whale ", correct: true },
      { text: "elephant", correct: false },
      { text: "Griaffe", correct: false },
    ],
  },
  {
    question: "which animal from those animal live in water",

    answers: [
      { text: "dog", correct: false },
      { text: "blue whale ", correct: true },
      { text: "elephant", correct: false },
      { text: "Griaffe", correct: false },
    ],
  },
  {
    question: "which continent Egypt in it ?",

    answers: [
      { text: "Africia", correct: true },
      { text: "North America", correct: false },
      { text: "South America", correct: false },
      { text: "Europe", correct: false },
    ],
  },
  {
    question: "which is larget desert in the world?",

    answers: [
      { text: "kalhari", correct: false },
      { text: "Gobe ", correct: false },
      { text: "sahara", correct: false },
      { text: "Antarctica", correct: true },
    ],
  },
  {
    question: "which is the samllest country in the world?",

    answers: [
      { text: "Vatican city", correct: true },
      { text: "Butan ", correct: false },
      { text: "Nepal", correct: false },
      { text: "shri", correct: false },
    ],
  },
];



function createQuestion(questionObject, i) {
  let blockDiv = document.createElement("div");
  blockDiv.classList.add("block");

  let questionTag = document.createElement("h1");
  questionTag.innerText = questionObject.question;
  blockDiv.appendChild(questionTag);

  questionObject.answers.forEach((bassuony) => {
    let answerTag = document.createElement("div");
    answerTag.style.display = "flex";
    answerTag.style.direction = "row";



    let radioTag = document.createElement("input");
    radioTag.name = i;
    radioTag.type = "radio";
    radioTag.value=bassuony.text;
    radioTag.id=Math.floor(Math.random()*20000);



    let textTag = document.createElement("label");
   textTag.htmlFor=radioTag.id;
   textTag.classList.add("text")
    textTag.innerText = bassuony.text;



    answerTag.appendChild(radioTag);
    answerTag.appendChild(textTag);
    

    blockDiv.appendChild(answerTag);
  });

  return blockDiv;
}

let drawQuestions = () => {
  let quizDiv = document.getElementById("quiz");
  questions.forEach((hossam, i) => {
    let questionHTML = createQuestion(hossam, i);
    quizDiv.appendChild(questionHTML);
  });
};
drawQuestions();


function sumbit(){
  let result=document.getElementById("result");
  let counter=0;
  for(let i=0;i<questions.length;i++){
    const selectedAnswer = document.querySelector(`input[name="${i}"]:checked`).value;
    questions[i].answers.forEach((bassuony) => {

if (bassuony.correct==true&&selectedAnswer==bassuony.text){
  counter ++ ;
}

    }); 

  }
result.innerText="your degree is "+ counter ;
}