function docEl(v) {
  return document.getElementById(v).value;
};//makes a shorthand version of this document method
function alertName() {
  if((docEl('firstName') === "")||(docEl('lastName') === "")) {
    alert("Please enter your name.")
	} else {
    alert("Your full name is "+docEl("firstName") + " "+ docEl("lastName") )
  }
};//alerts input from name dialog boxes
function changeColor() {
  var col=docEl("colorSelect");
  document.body.style.backgroundColor=col;
};//color change function for dropdown colors, NOT for input/random hex colors
function validateInput() {
	var username=docEl('username');
	var password = docEl('password');
	var verify = docEl('verifyPassword');
	if(username===""|| password==="" || verify==="") {
		alert("Please fill out all fields");
	} else if(password!==verify) {
		alert("Passwords do not match.");
	} else {
		alert("Email: "+ username + "\nPassword: " + password);
	}
};//used to check if form has valid unputs for foux contact form.
function validate() {
	var company = docEl("company");
	var email = docEl("email");
	var zip = docEl("zip");
	if(company===""|| email===""|| zip==="") {
		alert("Please fill out all forms (company, email, zip)")
	} else if(email.indexOf('@')===-1||email.length>6){
		alert("Please enter a valid email address.")
	} else if(isNaN(zip)) {
		alert("Please enter a valid zip code")
	} else {
		alert(company+", "+email+", "+zip);
	}
};//used to check if form has valid unputs for foux contact form.
function updatePref() {
	var color=docEl("colorPref");
	var font=docEl("fontPref");
	var regexp = new RegExp(/(#?([A-Fa-f0-9]){3}(([A-Fa-f0-9]){3})?)/);
	if(((color.length===4)||(color.length===7))&&regexp.test(color)) {
		console.log("valid hex code");
		console.log("color entry is :"+color + " and length is "+color.length);
		document.body.style.backgroundColor = color
	} else if(color===""|| color.indexOf(' ')!==-1|| color.indexOf('#')!==-1||!isNaN(color)) {
			alert("invalid entry for color")
		} else {
			document.body.style.backgroundColor = color;
	}
	if(font===""||isNaN(font)) {
		alert("invalid entry for font");
	} else {
		document.body.style.fontSize=font+"px";
	}
};//used to change background and font size. Accepts Hex and string inputs, but will fail if you give it a string that's invalid.
function Write(message) {
	var node = document.createTextNode(message);
	document.getElementById("output").appendChild(node);
};// function to write a message to the document without losing the page contents
function randomColor() {
	var hex = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
	build="#";
	for(var i=0;i<6;i++) {
		RNten = Math.floor(Math.random()*15);
		build+=hex[RNten];
	}
	document.body.style.backgroundColor = build;
	Write(build+" | ");
};//random hex generator sets color for a random color
function diceRoll() {
	var sides = docEl("diceSides");
	var rolls = docEl("diceNumber");
	if(isNaN(sides)||isNaN(rolls)||sides===""||rolls==="") {
		alert("Invalid Input")
	} else {
		var output = [];
			for(var i=0;i<rolls;i++) {
				output[i] = Math.floor(Math.random()*sides+1);
		};
		var message = "You roll " + rolls + " " + sides + "-sided dice and get: " + output + " | "
		Write(message);
	}
};//Dice rolling function, accepts input from the page. DocEl is shorthand for document.getElementById().value 
function numberGuess() {
	var correctGuess = false;
	var randomNumber = Math.floor(Math.random()*6+1);
	var guess = prompt("I am thinking of a number between 1 and 6. What is it?");
	if(parseInt(guess)===randomNumber) {
			correctGuess = true;
	} else if(parseInt(guess)>randomNumber) {
		guess = prompt("Too high, one more guess!");
		if(parseInt(guess)===randomNumber) {
			correctGuess = true;
		};
	} else if(parseInt(guess)<randomNumber)  {
		var guess = prompt("Too low, one more guess!");
		if(parseInt(guess)===randomNumber) {
			correctGuess = true;
		};
	};
	if(correctGuess) {
		alert("You guessed right!");
	} else {
		alert("Sorry, the number was "+randomNumber);
	}
};//number guessing game, gives 2 guesses with a clue if you're wrong the first time.