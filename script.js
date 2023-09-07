// Assignment Code
var generateBtn = document.querySelector("#generate");

//Created Variables
var uppercaseABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseABC = "abcdefghijklmnopqrstuvwxyz";
var numeric = "0123456789";
var symbols = "!@#$%^&*()-=+";
var charset = '';
var password = '';


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Prompts Length, Characters, Uppercase, Lowercase, Numeric, Special Characters.
//Please choose a password length number between 8 - 128 characters.
function generatePassword () {
  var passLength = prompt("Please choose a password length number between 8 - 128 characters.");
  if(passLength >= 8 && passLength <= 128) {
  }
  
  //Do you want you password to include Uppercase letters?
  var passTypeUpper = confirm("Do you want to include Uppercase characters?");
    if ((passTypeUpper)) {
      charset += uppercaseABC
    }
  
  //Do you want your password to include Lowercase letters?
  var passTypeLower = confirm("Do you want to include Lowercase characters?");
    if ((passTypeLower)) {
      charset += lowercaseABC
    }
  //Do you want your password to have numbers included?
  var passTypeNumeric = confirm("Do you want to include any numbers?");
  if ((passTypeNumeric)) {
    charset += numeric
  }
  
  //Do you want your password to have any special characters?
  var passTypeSymbols = confirm("Do you want to include any special characters?");
  if ((passTypeSymbols)) {
    charset += symbols
  }
  
  for (var i=0; i < passLength; i++) {
    var randomChar = charset[Math.floor(Math.random() * charset.length)]
    console.log(randomChar)
    password += randomChar
  }
  
  /*var passLength = '';
  console.log(passLength);{
  else {
  alert('Be sure your submission is between 8 and 128 characters.');
  }*/
}
