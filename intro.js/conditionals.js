"use strict";
// MORNING WARMUP:...



// sunny --> shirt


// if statement:
// if weather is sunny, wear shirt
// let weather = "snowy";
//
//
//     if (weather === "sunny") {
//         console.log("wear shirt");
//     }   else if (weather === "rainy") {
//         console.log("bring umbrella");
//     }else if ( weather === "snowy"){
// console.log("wear 10 jackets")
//     }
//     else {
//         console.log("wear whatever");
//     }
//_________________________________________________________________________________
// let myAge = 21;
// let actualAge = 31;
//
//     function checkAge (givenAge, realAge){
//         console.log(givenAge);
//         console.log(myAge);
//         if (givenAge === realAge){
//             console.log("myAge is my actual age")
//         }
//     }
//     checkAge(myAge, actualAge);
//_________________________________________________________________________________
// Create 5 different variables that holds 5 different number grades.
// (ex: let laurasGrade = 99) Write a function that accepts a student’s number grade,
// and returns  their letter grade based on their number grade. Call the
// function for each student.
// Scoring: A: 90 + , B: 80 - 89, C: 70-79, D: 60 - 69, F: 60 -

// function letterGrade (studentGrade) {
//     if (studentGrade >= 90) {
//         console.log("A");
//     }else if (studentGrade >= 80) {
//         console.log("B");
//     }else if (studentGrade >= 70) {
//         console.log("C");
//     }else if (studentGrade >= 60) {
//         console.log("D");
//     }else {
//         console.log("F");
//     }
// }
//
// console.log(letterGrade)

//_________________________________________________________________________________
//=assigning steps ex let myVar = 9;

// == value
// === type and value
//_________________________________________________________________________________
// let isHungry = "true";
// if(isHungry == true){
//     console.log("i'm hungry");
// } else {
//     console.log("not hungry")
// }

// if(true == "true"){
//     console.log("i'm hungry");
// } else {
//     console.log("not hungry")
// }
//_________________________________________________________________________________
// (condition) {true do this} else {do that}
// condition ? if true- do this : do this
// let weather = "sunny"
// let temp = 90;
// weather === "sunny"
//     ? temp == "90"
//     ? console.log("matches")
//     : console.log("not matches")
//     : console.log("it's sunny")

// let numGrade = 80
// let student = "Steve";
// numGrade !== 80
//     ? console.log("you got another grade")
//     : console.log("you got an eighty!");


//_________________________________________________________________________________

// weather sunny = sunglasses, rainy = umbrella, snowy = 10 jackets.
//Switch formula
// let weather = "snowy";//= outside weather aka a condition
// switch (weather){ // switch signifies choices against the option weather ="....."
//     case "sunny":// condition type
//         console.log("sunglasses");//response
//         break;
//     case "rainy":// condition type
//         console.log("umbrella");// response
//         break;//signifies multiple options for conditions
//     case "snowy":// condition type
//             console.log("10 jackets");//response
// }

//__________________________________________________________________________
// let joe = 66;
// let sue = 84;
// let zack = 77
// let mark = 98
//
//
// switch (joe) {
//     case >= 90:
//         console.log("you got an A");
//         break;
//     case >= 80:
//         console.log("you got a B");
//         break;
//     case >= 70:
//         console.log("you got a C");
//         break;
//     case >= 60:
//         console.log("you got a D");
//         break;
//     case =59:
//         console.log("you Failed");
// }
//_________________________________________________________________________

// let num1 = 15;
//
// switch(num1){
//     case 10:
//         console.log("ten!");
//     case 15:
//         console.log("fifteen!");
//         num1 += 5;
//     case 20:
//         console.log("twenty!");
// }
//__________________________________________________________________________

"use strict";

/* ########################################################################## */

// /**
//  * TODO:
//  * Create a function named `analyzeColor` that accepts a string that is a color
//  * name as input. This function should return a message which relates to the
//  * color stated in the argument of the function. For colors you do not have
//  * responses written for, return a string stating so

//  * Example:
//  *  > analyzeColor('blue') // returns "blue is the color of the sky"
//  *  > analyzeColor('red') // returns "Strawberries are red"
//  *
//  *
//  *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
//  *
//  * You should use an if-else-if-else block to return different messages.
//  *
//  * Test your function by passing various string literals to it and
//  * console.logging the function's return value
//  */
function analyzeColor(color) {

    if(color === "red") {
        alert("pomegranates are red")
    } else if (color === "blue") {
        alert("the oceans from space are blue")
    } else if (color === "cyan") {
        alert("Cyan is pretty cool")
    }   else {
        alert("that's also a cool color!")
    }

}
analyzeColor("red")
//
// // Don't change the next two lines!
// // These lines create two variables for you:
// // - `colors`: a list of the colors of the rainbow
// // - `randomColor`: contains a single random color value from the list (this
// //                  will contain a different color every time the page loads)
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
// /**
//  * TODO:
//  * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
//  * You should see a different message every time you refresh the page
//  */
//
// /**
//  * TODO:
//  * Comment out the code above, and refactor your function to use a switch-case statement
//  */
//
// /**
//  * TODO:
//  * Prompt the user for a color when the page loads, and pass the input from the
//  * user to your `analyzeColor` function. Alert the return value from your
//  * function to show it to the user.

// /* ########################################################################## */
//
// /**
//  * TODO:
//  * Suppose there's a promotion in Walmart, each customer is given a randomly
//  * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
//  * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
//  * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
//  * everything for free!.
//  *
//  * Write a function named `calculateTotal` which accepts a lucky number and total
//  * amount, and returns the discounted price.
//  *
//  * Example:
//  * calculateTotal(0, 100) // returns 100
//  * calculateTotal(4, 100) // returns 50
//  * calculateTotal(5, 100) // returns 0
//  *
//  * Test your function by passing it various values and checking for the expected
//  * return value.
//  */
//
// /**
//  * TODO:
//  * Uncomment the line below to generate a random number between 0 and 5.
//  * (In this line of code, 0 is inclusive, and 6 is exclusive)
//  * Prompt the user for their total bill, then use your `calculateTotal` function
//  * and alerts to display to the user what their lucky number was, what their
//  * price before the discount was, and what their price after the discount is.
//  */
// // Generate a random number between 0 and 6
// // var luckyNumber = Math.floor(Math.random() * 6);
//
// /**
//  * TODO:
//  * Write some JavaScript that uses a `confirm` dialog to ask the user if they
//  * would like to enter a number. If they click 'Ok', prompt the user for a
//  * number, then use 3 separate alerts to tell the user:
//  *
//  * - whether the number is even or odd
//  * - what the number plus 100 is
//  * - if the number is negative or positive
//  *
//  * Do *NOT* display any of the above information
//  * if the user enters a value that is not of the number data type.
//  * Instead, use an alert to inform them of the incorrect input data type.
//  *
//  *
//  * Can you refactor your code to use functions?
//  * HINT: The way we prompt for a value could be improved
//  */
//
