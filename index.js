var readlineSync = require("readline-sync");
var score = 0;
var highscore=5;
username=readlineSync.question("may i have your name: ");
console.log("welcome to the quiz "+username)
console.log("Let's see how well you know about vishnu!")
function play(question,answer)
{
var useranswer=readlineSync.question(question);
useranswer=useranswer.toLowerCase();
if(useranswer===answer){
  console.log("you were right");
  score++
 }
else{
  console.log("you were wrong");
  // score--;
}
}
play("where does he live ","coimbatore")
play("what is the name of his pet ","nandu")
play("which musical instrument does he play ","guitar")
play("what is his favorite color ","black")
play("what is his dream destination ","japan")
console.log("YAY...you completed the quiz! your final score is ",score)
console.log("THE HIGH SCORE IS ",highscore)
if(score>=highscore)
{
 console.log("YOU BEAT THE HIGH SCORE! YOU ARE THE NEW CHAMPION") 
}
else{
  console.log("TRY AGAIN ! YOU MAY BE THE NEXT CHAMPION")
}
