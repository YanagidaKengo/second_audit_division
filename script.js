'use strict'

function quiz() {
const quiz1 = document.getElementById('quiz');
  if (quiz1.answer.value === 'a') {
   } else if (quiz1.answer.value === 'b') {
    score++;
   } else if (quiz1.answer.value === 'c') {
   } else {
  }
}

let score = 0;
function lastScore(){
  const totalScore = document.getElementById('score-message');
  if(score === 1) {
    totalScore.innerHTML = "正解です。ありがとうございます。";
  } else {
    totalScore.innerHTML = "残念...柳田に聞いてみましょう。";
  }   
}

function lastmessage(){
  const last = document.getElementById('last-message');
  return last.innerHTML = "ご要望は柳田まで！！ ";
} 
