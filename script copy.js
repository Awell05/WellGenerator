// Assignment Code
var generateBtn = document.querySelector("#generate");
var lettersU = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lettersL = []
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '<', '>', '?', '~', '/']
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
var characterPromptInput =[];
for (let letter of lettersU) {
  lettersL.push(letter.toLowerCase());
}

console.log(lettersU, lettersL);
console.log(specialCharacters);
console.log(numbers);


function generatePassword() {
  let generatePassword = "";
  var characterPromptResponse = parseInt(prompt("How many characters would you like for your password?", 'must be 8-128 characters'));

  if (characterPromptResponse < 8 || characterPromptResponse > 128) {
    alert("password must be more than 8 characters and less than 128 characters")
  }
  else {
  var userConfirmUppercase = window.confirm("Click OK to confirm uppercase letters");
  if (userConfirmUppercase == true) {
    characterPromptInput = characterPromptInput.concat(lettersU);
  }
  var userConfirmLowercase = window.confirm("click OK to confirm lowercase letters");
  if (userConfirmLowercase == true) {
    characterPromptInput = characterPromptInput.concat(lettersL);
  }
  var userConfirmSpecialChar = window.confirm("click OK to confirm special characters");
  if (userConfirmSpecialChar == true) {
    characterPromptInput = characterPromptInput.concat(specialCharacters);
  }
  var userConfirmNumbers = window.confirm("click OK to confirm numbers");
  if (userConfirmNumbers == true) {
    characterPromptInput = characterPromptInput.concat(numbers);
  }
}
console.log(characterPromptInput);
// need help generating password with for loop
var resultOfUserCharacters = "";

 for (var i = 0; i < characterPromptResponse; i++){
  resultOfUserCharacters += (Math.floor(Math.random() * characterPromptResponse));
  }
 return resultOfUserCharacters;
}





// return allPasswordCharacters[Math.floor(Math.random() * allPasswordCharacters.length)]
// return variable with random generated password


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
