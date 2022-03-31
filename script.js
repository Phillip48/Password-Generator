// Arrays for special characters, lowercase letters, uppercase letters, and numbers
const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+", "(", ")", "{", "}", "[", "]", "?", "/", ">", "<", ".", ",", "~", "|"];
const numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];



// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function for password options selected by user
function userSelected() {
  var messageChar = parseInt(prompt("How many characters would you like your password to use?"));

  if (messageChar < 7 || messageChar > 129){
    alert("Password has to be between 8 and 129 characters. Please try again.");
    return null;
  }

  var confirmSpec = confirm("Click ok to include special characters");

  var confirmNum = confirm("Click ok to include numerical characters");

  var upperCase = confirm("Click ok to include Upper Case Letters");

  var lowerCase = confirm("Click ok to include Lower case letters");

  if(confirmSpec === false && confirmNum === false && upperCase === false && lowerCase === false){
    alert("You have to chose at least one character type.");
    return null;
  }

  var userEverything = {
    messageChar: messageChar,
    confirmSpec: confirmSpec,
    confirmNum: confirmNum,
    upperCase: upperCase,
    lowerCase: lowerCase,
  };
  return userEverything;
}

// Need an array to randomize the elements selected from the user options
function randomSelected() {
  // use Math.floor to sleect random choice within ther choice array
  // var mathRandom = Math.floor(Math.random() * .length);
  // choose random characters in the array
  // return the random element 
  // return;
}

// Function to generate the password from user input
function generatePassword() {
  // create an empty var to share the concat password
  var choice = userSelected();
  // create empty var holding all possible passwords choices
  var possibleChar = [];
  // create empty var to hold the chosen characters
  var pickedChar = [];
  // error handling to see if the objects of your choices exist or not
  if (!choice){
    return null;
  }

  // conditonal statement needed for choosing special characters
  if (choice.obj) {
    possibleChar = possibleChar.concat(specialChars);
    pickedChar.push(randomSelected(specialChars));
  } else {
    
  }

  for (var i = 0; i < choice.length; i++) {
    var possibleChar = getSelection[i]
    
  }
  for (var i = 0; i < array.length; i++) {
    const element = array[i];
    
    // combine the results and send them to the writePassword function to present them on the page 
  }
}
// Assignment code
var generateBtn = document.querySelector("generate");

// writes password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("password");

  passwordText.value = password;

}

// Event listener to generate button 
generateBtn.addEventListener("click", writePassword);

generatePassword();
