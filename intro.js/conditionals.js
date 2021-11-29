"use strict";
// MORNING WARMUP:...



// suny --> shirt


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
    //
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


//=assigning steps ex let myVar = 9;

// == value
// === type and value

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

// weather sunny = sunglasses, rainy = umbrella, snowy = 10 jackets.
//Switch formula
let weather = "snowy";
switch (weather){
    case "sunny":
        console.log("sunglasses");
        break;
    case "rainy":
        console.log("umbrella");
        break;
    case "snowy":
            console.log("10 jackets");
}
