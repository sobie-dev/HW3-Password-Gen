
var generateBtn = document.querySelector("#generate");
var enter;
var confirmNum;
var confirmChar;
var confirmUpper;
var confirmLower;
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var number = ["0","1","2","3","4","5","6","7","8","9"]
var symbol = ["!","@","#","$","%","^","&","*","(",")","-","+","'","/",";",":","<",">","="]

var combineChar = ["upperCase", "lowerCase", "number", "symbol"]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // Asks for user input
  enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
  // First if statement for user validation 
  if (!enter) {
      alert("This needs a value");
  } else if (enter < 8 || enter > 128) {
      
      enter = parseInt(prompt("You must choose between 8 and 128"));

  } else {
      // Continues once user input is validated
      confirmNum = confirm("Will this contain numbers?");
      confirmUpper = confirm("Will this contain Uppercase letters?");
      confirmLower = confirm("Will this contain Lowercase letters?");
      confirmChar = confirm("Will this contain special characters?");
  };
}
// for (let i = 0, n = combineChar.length; i < String; ++i){
//   newPassword += combineChar.
// }
