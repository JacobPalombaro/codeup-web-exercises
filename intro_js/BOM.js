// 'use strict';
// // BOM intro
// // let sirius = {
// //     numStudents: 30,
// //     classroom: "Pedernales/remote",
// //     // methods - functions stored inside of an object
// //     takeAttendance: function(){
// //
// //         prompt("How many students?");
// //
// //         return this.numStudents;
// //     },
// //     prompt: function(){
// //     //returns prompt window;
// //     }
// // }
// // sirius.takeAttendance();
// var count = 0;
// var max = 10;
// var interval = 1000;
//
//
// var intervalId =
//     setInterval(
//         function(){
//             if (count >= max){
//                 clearInterval(intervalId);
//                 console.log('All done');
//             }else{
//                 count++;
//                 console.log("Repeating this line" + count);
//             }
//         },
//     interval);
//
// // set timeout
// var delay = 5000;
//
// var timeoutId = setTimeout( function (){
//     alert('Here is a delayed hello!');
// }, delay);
//
// window.location = 'https://java.codeup.com';
// var delay = 5000;
//
// var timeoutId = setTimeout(function (){
//     return window.location = "https://java.codeup.com";
// }, delay);
//
//
//
//
//
//
// //System Dialogue
//
//
// //Set Interval
//
//
// // Set Timeout

var promptAnswer = prompt("Hows the weather today?");

var retrievedSpan = document.getElementById("weather");
console.log("promptAnswer: ", promptAnswer);
console.log("retrievedSpan: ", retrievedSpan);

retrievedSpan.innerHTML = promptAnswer;

// --
// document --> everything in the body of your HTML

var changeParagraph = document.getElementById("red");
changeParagraph.innerHTML = "The weather is cold today";





