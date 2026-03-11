
const question= [
  {
    questionNo: "fill in the blanks: without __ i can't live ?",
    answers: ["u"],
  },
  {
    questionNo: "give yourself a rating from 1-10?",
    answers: ["9"]
  },
];

// const active=document.getElementsByClassName("active");
const front=document.getElementById("front");
const button=document.getElementById("start-app");
const secondscreen=document.getElementById("second-screen");
const questionIs=document.getElementById("question-in");
const spanUpdate=document.getElementById("question-no");
const maxquestion=document.getElementById("total-question");
const showing=document.getElementById("showing");
const parag=document.getElementById("answer-is");
const answerQuestion=document.getElementById("answerQuestion");
const enddd=document.getElementById("end");


button.addEventListener("click",showNext);
 const again=document.getElementById("restart-btn");
// again.addEventListener("click",restartagain);

let currentindex=0;
    

   spanUpdate.textContent=currentindex;
 maxquestion.textContent=question.length;

    

function showNext(){
    currentindex=0;

    secondscreen.classList.add("active");
    front.remove("active");

showQuestion();
}
function showQuestion(){
    
   
    const CurrentQuestion= question[currentindex];
    questionIs.textContent=CurrentQuestion.questionNo;
    
    spanUpdate.textContent=currentindex+1;
   // currentindex++;
    answerQuestion.value=""
parag.textContent=""

  
}
showing.addEventListener("click",()=>{
  
  const answerQuestions=answerQuestion.value.trim().toLowerCase();
  const correctAnswer=question[currentindex].answers;

  if(answerQuestions==correctAnswer){
    parag.textContent="yoooooooooooooooooooooooooooo";
  }else{
    parag.textContent=`try again ${correctAnswer}`;
  }
  setTimeout(()=>{
  currentindex++;
    if(currentindex<question.length){
      
      showQuestion();
    }else{
    secondscreen.classList.remove("active");
    enddd.classList.add("active");
    }
  },1000)
});

again.addEventListener("click",restartbtn);
function restartbtn(){
  enddd.classList.remove("active");
showNext();
}