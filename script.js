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


//Prompts Length, Characters, Uppercase, Lowercase, Numeric, Special Characters.
//Please choose a password length number between 8 - 128 characters.
//Do you want you password to include Uppercase letters?
//Do you want your password to include Lowercase letters?
//Do you want your password to have special characters?
    


//Created Variables
var uppercaseABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercaseABC = "abcdefghijklmnopqrstuvwxyz"
var numeric = "0123456789"
var symbols = "!@#$%^&*()-=+<>?/|':[]{}"

