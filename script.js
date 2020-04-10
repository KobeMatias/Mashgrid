// Input variables: 
var enter;
var confirmUppercase;
var confirmLowercase;
var confirmNumber;
var confirmSymbol;

// Numeric characters
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57);
// Lowercase characters
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
// Uppercase characters
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
// Special characters 
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
);

var choices;

// Function for character codes
function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
      array.push(i)
  }
  return array
}

var generate = document.querySelector("#generate");

generate.addEventListener("click", 
    function() {
    pw = generatePassword();
    document.getElementById("password").placeholder = pw;
    }
  );

// Generate password
function generatePassword() {
  // Asks for input
  enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
  // First if statement for validation 
  if (!enter) {
      alert("This needs a value");
  } else if (enter < 8 || enter > 128) {
      // Validates input
      // Start input prompts
      enter = parseInt(prompt("You must choose between 8 and 128"));

  } else {
      // Continues once input is validated
      confirmNumber = confirm("Will this contain numbers?");
      confirmSymbol = confirm("Will this contain special characters?");
      confirmUppercase = confirm("Will this contain Uppercase letters?");
      confirmLowercase = confirm("Will this contain Lowercase letters?");
  };

  // Else if for 4 negative options
  if (!confirmSymbol && !confirmNumber && !confirmUppercase && !confirmLowercase) {
    choices = alert("You must choose an option.");
  }
  // First if statement that uses user input prompts to determine choices
    // Else if for 4 positive options
    else if (confirmSymbol && confirmNumber && confirmUppercase && confirmLowercase) {

      choices = SYMBOL_CHAR_CODES.concat(NUMBER_CHAR_CODES, LOWERCASE_CHAR_CODES, UPPERCASE_CHAR_CODES);
  }
  // Else if for 3 positive options
  else if (confirmSymbol && confirmNumber && confirmUppercase) {
      choices = SYMBOL_CHAR_CODES.concat(NUMBER_CHAR_CODES, UPPERCASE_CHAR_CODES);
  }
  else if (confirmSymbol && confirmNumber && confirmLowercase) {
      choices = SYMBOL_CHAR_CODES.concat(NUMBER_CHAR_CODES, LOWERCASE_CHAR_CODES);
  }
  else if (confirmSymbol && confirmLowercase && confirmUppercase) {
      choices = SYMBOL_CHAR_CODES.concat(LOWERCASE_CHAR_CODES, UPPERCASE_CHAR_CODES);
  }
  else if (confirmNumber && confirmLowercase && confirmUppercase) {
      choices = NUMBER_CHAR_CODES.concat(LOWERCASE_CHAR_CODES, UPPERCASE_CHAR_CODES);
  }
  // Else if for 2 positive options 
  else if (confirmSymbol && confirmNumber) {
      choices = SYMBOL_CHAR_CODES.concat(NUMBER_CHAR_CODES);

  } else if (confirmSymbol && confirmLowercase) {
      choices = SYMBOL_CHAR_CODES.concat(LOWERCASE_CHAR_CODES);

  } else if (confirmSymbol && confirmUppercase) {
      choices = SYMBOL_CHAR_CODES.concat(UPPERCASE_CHAR_CODES);
  }
  else if (confirmLowercase && confirmNumber) {
      choices = LOWERCASE_CHAR_CODES.concat(NUMBER_CHAR_CODES);

  } else if (confirmLowercase && confirmUppercase) {
      choices = LOWERCASE_CHAR_CODES.concat(UPPERCASE_CHAR_CODES);

  } else if (confirmNumber && confirmUppercase) {
      choices = NUMBER_CHAR_CODES.concat(UPPERCASE_CHAR_CODES);
  }
  // Else if for 1 positive option
  else if (confirmSymbol) {
      choices = SYMBOL_CHAR_CODES;
  }
  else if (confirmNumber) {
      choices = NUMBER_CHAR_CODES;
  }
  else if (confirmLowercase) {
      choices = LOWERCASE_CHAR_CODES;
  }
  else if (confirmUppercase) {
      choices = UPPERCASE_CHAR_CODES;
  };

  // password variable is an array placeholder for user generated amount of length
  var password = [];

  // Start random selection variables:
  // Random selection for all variables:
  // Convert ASCII codes to Strings 
  for (var i = 0; i < enter; i++) {
      var pickChoices = choices[Math.floor(Math.random() * choices.length)];
      password.push(String.fromCharCode(pickChoices));
  }
  // This joins the password array and converts it to a string
  var pw = password.join("");
  UserInput(pw);
  return pw;
}

  // This puts the password value into the textbox
  function UserInput(ps) {
    document.getElementById("password").textContent = ps;

  }