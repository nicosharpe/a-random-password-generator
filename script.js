// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options

function getPasswordOptions() {
  let passwordLength = parseInt(prompt("How many characters? Must be at least 8."));
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Sorry, must be a value between 8 and 128.")
    return;
  }

  let characterTypeUpper = confirm("Would you like Uppercase characters?");
  let characterTypeLower = confirm("Would you like Lower Case characters?");
  let characterTypeNum = confirm("Would you like any numbers?");
  let characterTypeSpecial = confirm("Would you like Special characters?");

  return {
    length: passwordLength,
    upper: characterTypeUpper,
    lower: characterTypeLower,
    number: characterTypeNum,
    special: characterTypeSpecial
  }
}


// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];

}

// Function to generate password with user input
function generatePassword() {
  const result = getPasswordOptions(); 
  console.log("Result: ", result);
  let requestedCharacters = [];


  if (result.upper) {
    requestedCharacters = requestedCharacters.concat(upperCasedCharacters);
  }


  if (result.lower) {
    requestedCharacters = requestedCharacters.concat(lowerCasedCharacters);
  }


  if (result.number) {
    requestedCharacters = requestedCharacters.concat(numericCharacters);
  }

  if (result.special) {
    requestedCharacters = requestedCharacters.concat(specialCharacters);
  }

  let finalPassword = "";
  for (let i = finalPassword.length; i < result.length; i++) { 
    finalPassword += getRandom(requestedCharacters);
  }

  return finalPassword;

}

// based off users answers, combine whatever arrays they want 
//and choose chosen arrays together and return length based off what they asked for

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword)


