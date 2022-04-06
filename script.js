// Arrays for special characters, lowercase letters, uppercase letters, and numbers
const specialArray = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+", "(", ")", "{", "}", "[", "]", "?", "/", ">", "<", ".", ",", "~", "|"];
const numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function for password options selected by user
function generatePassword() {
  var messageChar = parseInt(prompt("How many characters would you like your password to use?"));

  // Character amount more than 7 less than 130
  if (messageChar < 8 || messageChar > 128){
    alert("Password has to be between 8 and 128 characters. Please try again.");
    return ;
  }

  // Special characters
  var confirmSpec = confirm("Click ok to include special characters");
  // Numerical characters
  var confirmNum = confirm("Click ok to include numerical characters");
  // Upper case letters
  var upperCase = confirm("Click ok to include Upper case letters");
  // Lower case letters
  var lowerCase = confirm("Click ok to include Lower case letters");
  // Conditional statement 
  if(confirmSpec === false && confirmNum === false && upperCase === false && lowerCase === false){
    alert("You have to chose at least one character type. Please try again.");
    return 
  }
  var finalPassword = []

  if(confirmSpec){
    finalPassword = finalPassword.concat(specialArray)
  }
  if(confirmNum){
    finalPassword = finalPassword.concat(numberArray)
  }
  if(upperCase){
    finalPassword = finalPassword.concat(upperArray)
  }
  if(lowerCase){
    finalPassword = finalPassword.concat(lowerArray)
  }
console.log(finalPassword);
  var word = "";
  for (let index = 0; index < messageChar; index++) {
    word += finalPassword[Math.floor(Math.random() * finalPassword.length)];
  }
console.log(word);
  return word
}

// Assignment code
var generateBtn = document.querySelector("#generate");

// writes password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Event listener to generate button 
generateBtn.addEventListener("click", writePassword);

