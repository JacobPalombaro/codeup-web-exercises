//loops



//---While--
// 20 parking spots open
// 1 car driving arund
// ? how many times will have to drive around to find spot

// while(conditions){
//     //code here at every iteration
// }
//
// while (car is unparked){
//     keep driving
// }

// let parkingSpots = 20;
// let aisles = 10;
// let movingCars = 1;
// // if(parkingSpots == 0)
// let isEmpty = false;

// while(isEmpty == false){
//     console.log(movingCars);
//     movingCars++
// }

// let num = 2;
// let age = 31;
// console.log(num = num++);
// console.log(age = ++age);



// let i = 0; // starting point
// while(i < 20){
//     console.log("iteration:", i);
//     // i++;
//     // i = i + 1;     // these all return same answer
//     ++i;
//
// }
// 0 available spots
// 20 parking spots (ending point)
// loop until a parking spot opens up
// iterating through the loop
//console.log there re x num spots available;
//
//how many parking spots are available in a parking garage. write a
// loop that counts the spots avaiable as 20 cars leave
// a 20 car parking garage.

// let parkingSpots = 20;
// let usedSpots = 20;
// let parked = false;
// let counter = 0;
// while(!parked){
//     if(usedSpots == parkingSpots){
//         console.log("there's no parking")
//         parkingSpots--;
//         counter++;
//     } else {
//         parked = true;
//         console.log("you found a spot")
//     }
//
//
// }

// let usedSpots = 20;
// while(usedSpots > 0){
//     usedSpots--;
//     console.log('There are ${20 - usedSpots} available.')
// }

// let parkingSpots = 20
// let emptyParkingSpotNum = 5
//
// let i = 0;
// while(i <= parkingSpots) {
//     // console.log(i)
//     i++
//     if(i === emptyParkingSpotNum){
//         console.log("park here")
//         break;
//     }
//     console.log(i)
// }
// while(condition is true){
//     execute this code
// }

// loop until our number reaches 15;
// let i = 0;
// while(i <= 15){
//     console.log("---------")
//     console.log("i before i++:",i);
//     i++;
//     console.log("i after i++:", i);
// }




//--Do While - ALWAYS RUN FIRST and then it checks the condition
// let i = 20;
// do{
//     console.log("i before ++i:",i);
//     ++i;
//     console.log("i after ++i:", i);
// }while (i <= 15);

// loop through numbers 0 - 50 by 2s
// let i = 0;
// do{
//     console.log("number is"+ i)
//      i=i +2
//     // i++;
//    // i++;
// }while(i <= 50);

// loop through numbers 0-10 1 while loop one do while loop
//while loop
// let k = 0;
// while(k <= 10){
//     console.log(k)
//     k++;
// }
//
// let i = 0
// do{
//     console.log(i);
//     i++;
// }while(i <= 10);


//--For Loops--
// for(1; 2; 3; ){
//     // code
// };



// 1. starting point;
// 2. stopping point;> condition // these go inside ()
// 3. how to iterate;

// for(let i = 0; i<=15; i+=3){
//     console.log("my favorite number is:" + i);
// }

// let animals = ["frog", 'dog', "cat", "horse"];
// // for(let i = 0; i<=animals.length -1; i++){
// //     console.log("my favorite animal is: " + animals[i]);
// // }
// let i = 0;
// while(i<animals.length){
//     console.log("my fave animal is:" + animals[i]);
//     i++;
// }


// 4 dozen eggs
// 1.starting point
// 2.condition/ stopping point
// 3.how to iterate
// let dozens = 0;
// for(let eggs = 0; eggs <= 48; eggs++){
//     dozens = eggs/12;
//     console.log("dozens:", dozens);
//     console.log("eggs:", eggs);
// }

// NESTED LOOPS
for(counter = 1; counter <=5; counter++){
    console.log('FIRST counter:' + counter);
    for(let counterTwo = 5; counterTwo > 0;  counterTwo--){
        console.log('SECOND counter: ' + counterTwo);
    }
    // counts from 5 to 1
}











//--

// TODO: using prompt() and alert(), write a loop that will continue to ask for the correct password until the
// correct password is given.
// var password = "codeup"
// var userInput = prompt('Enter Password:');
// console.log('The user entered: ' + userInput);
// if (password === "codeup"){
//     alert("None shall pass!!.");
// prompt = "enter passcode again";
//     alert("Passcode accepted");
// }

