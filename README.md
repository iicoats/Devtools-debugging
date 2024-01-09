# Devtools-debugging
level 2 day 1 assignment


In the index.html, the script was in the head so I moved it to the bottom of the body.  There is also a script for app.js but there is no file so I commented it out.

// Error 1: Message is misspelled in the console command

Error 3: changed "Button Clicked" to "click" moved console.log out of curly brackets

Error 6: Misusing variable scope; removed an extra piece of code

// Error 10: changed the case of a c

// Error 12: does not define what function you are trying to call

// Error 13: name was spelled wrong;  deleted user from console.log

// Error 14: numbers cannot be changed to upper case unless spelled out
let someNumber = oneHundredTwentyThree;
console.log(someNumber.toUpperCase()); 

// Error 15: added quotes
let greeting = "Hello, world!";

// Error 8: console.log looks wrong but I can't figure out why
let number1 = 10;
let number2 = 5;
console.log('Sum is: ' + (number1 - number2));

// Error 9: can a variable equal null?
let nullVar = null;
console.log(nullVar.length);


let five = '5';
if (five === 5) {
    console.log('Five is equal to 5'); // This one should be logged
} else {
    console.log('Five is not equal to 5'); 
}

// Error 19: there is no function or anything to find the value of x. I dont feel comfortable doing it
console.log(x);
x = 5;


