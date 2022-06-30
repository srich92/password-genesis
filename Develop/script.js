// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var uppercaseArray= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","v","W","X","Y","Z"]

  var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characterArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
var resultArray = [];
var userArray = [];

var numberCharacter = prompt ("choose the length of characters between 8 and 128");

var uppercases = confirm ("Do you want Uppercase letters in your password?");
  var lowercases = confirm ("Do you want lowercase letters in your password?");
  var characters = confirm ("Do you want special characters in your password?");
  var numbers = confirm ("Do you want numbers in your password?");

  if (numbers){
    resultArray = resultArray.concat(numberArray);
    
  }
  
  if (uppercases){
    resultArray = resultArray.concat(uppercaseArray);
  
  }
  
  if (lowercases){
    resultArray = resultArray.concat(lowercaseArray);
  
  }
  
  if (characters){
    resultArray = resultArray.concat(characterArray);
  }
  console.log(resultArray)
  
  
  for (var i = 0; i < numberCharacter; i++) {
        
    userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]); 
    }
  
    return userArray.join("") ;
  


  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


