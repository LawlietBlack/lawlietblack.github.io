alert("Each question has an underlined word followed by four answer choices. You will choose the word that is a necessary part of the underlined word.")
var correctAnswers = 0;
var answer1 = prompt("Harvest\nA. autumn\nB. stockpile\nC. tractor\nD. crop");
if(answer1==="D"||answer1==="d") {correctAnswers+=1}
var answer2 = prompt("Desert\nA. cactus\nB. arid\nC. oasis\nD.	flat");
if(answer2==="B"||answer2==="b") {correctAnswers+=1}
var answer3 = prompt("Book\nA. fiction\nB. pages\nC. pictures\nD.	learning");
if(answer3==="B"||answer3==="b") {correctAnswers+=1}
var answer4 = prompt("Language\nA. tongue\nB. slang\nC. writing\nD. words	");
if(answer4==="D"||answer4==="d") {correctAnswers+=1}
var answer5 = prompt("School\nA. student\nB. report card\nC. test\nD. learning");
if(answer5==="A"||answer5==="a") {correctAnswers+=1}
console.log("correct answers: "+correctAnswers);

if(correctAnswers>=5) {
	document.write("<p>CONGRATULATIONS!<br />You answered "+correctAnswers+" questions correctly!<br />You earned a gold crown!<br /><img src='img/goldcrown.jpg'></p>");
} else if(correctAnswers>=3) {
	document.write("<p>Congratulations!<br />You answered "+correctAnswers+" questions correctly.<br />You earned a silver crown!<br /><img src='img/silvercrown.jpg'></p>");
} else if(correctAnswers>=1) {
	document.write("You answered "+correctAnswers+" questions correctly.<br />You earned a bronze crown!<br /><img src='img/bronzecrown.jpg'></p>")
} else {
	document.write("You answered "+correctAnswers+" questions correctly. Please try again!")
}