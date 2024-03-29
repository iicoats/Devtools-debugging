"use strict";

// On index file, moved script from head to bottom of body
// Error 1: corrected the spelling of message in the console.log
let message = ('Welcome to the debugging exercise!');
console.log(message); 

// Error 2: removed . from "actionButton", eventHandler is not defined
let button = document.querySelector('actionButton'); 
button.addEventListener('click', eventHandler); 

// Error 3: changed "Button Clicked" to "click" moved console.log out of curly brackets
function eventHandler() {
  displayOutput();
}
console.log('click');

// Error 4: no error
function displayOutput() {
  let output = document.querySelector('#output'); 
  output.innerText = 'You clicked the button!';
}

// Error 6: Misusing variable scope; removed an extra piece of code
function updateMessage() {
  let localMessage = 'Updated message';
}
console.log(localMessage); 

// Error 7:
document.getElementById('testButton').addEventListener('click', testFunction());

function testFunction() {
  console.log('Test function executed');
}

// Error 8: console.log looks wrong but I can't figure out why
let number1 = 10;
let number2 = 5;
console.log('Sum is: ' + (number1 - number2));

// Error 9: can a variable equal null?
let nullVar = null;
console.log(nullVar.length);

// Error 10: changed the case of a c
let caseSensitiveVar = 'Case matters';
console.log(caseSensitiveVar);

// Error 11:
let importantData =
  "This string must be logged to the console. It's important!";
console.log('importantData');

// Error 12: does not define what function you are trying to call
tryToCallFunction();

// Error 13: name was spelled wrong;  deleted user from console.log
let user = { name: 'Alice' };
console.log(user)

// Error 14: numbers cannot be changed to upper case unless spelled out
let someNumber = oneHundredTwentyThree;
console.log(someNumber.toUpperCase()); 

// Error 15: added quotes
let greeting = "Hello, world!";

// Error 16: 
for (let i = 0; i < 5; i++); {
    console.log(i);
}

// Error 17: added a curly bracket
let five = '5';
if (five === 5) {
    console.log('Five is equal to 5'); // This one should be logged
} else {
    console.log('Five is not equal to 5'); 
}

// Error 18: I deleted a semi-colon on closing curly bracket
Array.prototype.push = function() {
    console.log('Array push method is overwritten');
}
let numbers = [];
numbers.push(1);
console.log(numbers);

// Error 19: no error
console.log(x);
x = 5;

// Error 20:
let myString = 'Hello';
myString.property = 'World';
console.log(myString.property); 


