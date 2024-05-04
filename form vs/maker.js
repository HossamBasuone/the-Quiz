let form=document.getElementById("form");
let counter=0;

function add(){

    let question=document.createElement("input");
    question.type="text";
    question.classList.add('question');
    form.appendChild(question);
//question


    let answerdiv=document.createElement("div");
    answerdiv.style.display = "flex";
    answerdiv.style.direction = "row";
    for(let i=0;i<4;i++){
    let radioTag=document.createElement("input");
    let answer=document.createElement("input");
    answer.id=i+(counter+1)*100;//100 101 102 103
    radioTag.name=counter;//0 0 0 0 1 1 1 1
    radioTag.value=answer.id;
    radioTag.type="radio";
    answer.type="text";
    answer.classList.add('answer');
    answerdiv.appendChild(radioTag);
    answerdiv.appendChild(answer);
    form.appendChild(answerdiv);


    }
    counter++;//0 1 2

}

function submit() {
   
    let questions = document.getElementsByClassName('question');
    let answers = document.getElementsByClassName('answer');
    let data = [];

    for(let i = 0; i < questions.length; i++) {
        let obj = {};
        obj.question = questions[i].value;
        obj.answers = [];


        for(let j = i*4; j < 4*(i+1); j++) {
            let answerObj = {};
            answerObj.text = answers[j].value;
            let ae =document.querySelector(`input[name="${i}"]:checked`).value;//0 0 0 0//100 101 102 103
            if(ae==answers[j].id) {
                answerObj.correct = true;
            } else {
                answerObj.correct = false;
            }
            obj.answers.push(answerObj);
        }
        data.push(obj);
        
    }


    localStorage.setItem("myKey",JSON.stringify(data));
   let test =  localStorage.getItem("myKey");
   console.log(JSON.parse(test));

    
}
