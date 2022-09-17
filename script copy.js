// Assignment Code
var generateBtn = document.querySelector("#generate");
var lettersU = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lettersL = []
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '<', '>', '?', '~', '/']
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
for (let letter of lettersU) {
  lettersL.push(letter.toLowerCase());
}
var minPasswordChartr = 8;
var maxPasswordChartr = 128;
var totalminPasswordChartr = 8 - 128;


console.log(lettersU, lettersL);
console.log(specialCharacters);
console.log(numbers);
function generatePassword() {
  var characterPrompt = window.prompt("How many characters would you like for your password?", 'must be 8-128 characters');
  var characterPromptResponse = parseInt(characterPrompt);
  if (characterPromptResponse < 8) {
    alert("password must be more than 8 characters");
  }
  else if (characterPromptResponse > 128) {
    alert("password must be less than 128 characters");
  }
  else {
    window.confirm("Click OK to confirm uppercase letters");
    window.confirm("click OK to confirm lowercase letters");
    window.confirm("click OK to confirm special characters");
    window.confirm("click OK to confirm numbers");
  }
  return {
    
  }
}
// function needs prompt for length of characters, uppercase letters, lowercase letters, special characters, numers)
// return variable with random generated password


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
