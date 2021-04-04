var errorLength = '!!! Only enter numbers that are between 8 - 128 !!!'
var upCasePrompt = "Do you want your password to include uppercase letters? Enter yes or no."
var loCasePrompt = "Do you want your password to include lowercase letters? Enter yes or no."
var numberPrompt = "Do you want your password to include numbers? Enter yes or no."
var symbolPrompt = "Do you want your password to include symbols? Enter yes or no."
var lengthPrompt = 'Enter preferred length of password? Enter a number between 8 and 128.'
var length = 0;
var characters = ''; 

var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password"); 

var pickUpCase = function(isUpCase) {
	if (isUpCase) { characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; }
	return '';
  };
  
var askUpCase = function() {
var answer = prompt(upCasePrompt);
	if (answer.toLowerCase() === "yes") {
		uppercase = true;
	} else if (answer.toLowerCase() === "no") {
	  uppercase = false;
	} else {
	  alert("Only enter yes or no");
	}
	pickUpCase(uppercase);
	return uppercase;
  };

var pickLowCase = function(isLowCase) {
  if (isLowCase) { characters = 'abcdefghijklmnopqrstuvwxyz'; }
  return '';
};

var askLoCase = function() {
var answer = prompt(loCasePrompt);
  if (answer.toLowerCase() === "yes") {
     lowercase = true;
	} else if (answer.toLowerCase() === "no") {
	 lowercase = false;
	} else {
	 alert("Only enter yes or no");
	 }
  pickLowCase(lowercase);
  return lowercase;
};

var pickNumber = function(isNumber) {
  if (isNumber) { characters += '0123456789'; }
  return '';
};

var askNumbers = function() {
var answer = prompt(numberPrompt)  
if (answer.toLowerCase() === "yes") {
    numbers = true;
} else if (answer.toLowerCase() === "no") {
    numbers = false;
} else {
    alert("Only enter yes or no");
  }
  pickNumber(numbers);
  return numbers;
};

var pickSymbol = function(isSymbol) {
  if (isSymbol) { characters += '!@#$%^&*()<>,.?/[]{}-=_+|/'; }
  return '';
};

var askSymbols = function() {
var answer = prompt(symbolPrompt);
  if (answer.toLowerCase() === "yes") {
  	symbol = true; 
} else if (answer.toLowerCase() === "no") {
	symbol = false;
} else { 
	alert("Only enter yes or no.");
}
  pickSymbol(symbol);
  return symbol;
};

var askLength = function() {
	length = parseInt(prompt(lengthPrompt));
  };

var randomNumber = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var passwordIn = function() {
  var password = ''; 
  if (characters.length) { 
    for (let i = 0; i < length; i++) { 
      password += characters[randomNumber(0, characters.length - 1)]; 
    } characters = '';
      length = 0;
      return password; }
};

var checkIn = function(password) {
  return password;
};

var generatePassword = function() { 
	return checkIn(passwordIn()); 
};

function createPassword() {
  askLength();
  if (length < 8) {
    alert(errorLength);
  } 
  else if (length > 128) {
    alert(errorLength);
  } else {
    askLoCase();
    askUpCase();
    askSymbols();
    askNumbers();
    passwordText.value = generatePassword();
  }
}

generateBtn.addEventListener("click", createPassword);