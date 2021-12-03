//
// //create an array with your top 5 favorite foods;
// give eah of your food a rating 1 - 5

// console.log(students);
// console.log(students[3]);
// console.log(students[5]);

// let students = ["gerald", "mark", "mina", "jason", "justin", "justin"];
//
// //concatenate the last name to the first name
// //access Justin's value
// //re-assign tht value to equal justin + lastname
// console.log(students[4]);
// students[4] += " sebastian"
// console.log(students[4]);


// console.log(students.length)
//
//
//
// console.log(students.lastIndexOf())
// let favFoods = [
//     "pizza",
//     "pasta",
//     "mac and cheese",
//     "chicken",
//     "steak"
// ]
// console.log(favFoods[0] + " 1")
// let favFoods= ["pizza", "pasta", "mac nd cheese", "chicken", "steak"];


// let students = ["gerald", "mark", "Mina", "jason", "justin", "justin"];
// let indexOfMina = students.indexOf("Mina");
// console.log(indexOfMina);
// let otherIndexOfMina = students.lastIndexOf("Mina")
// console.log(otherIndexOfMina);
//
//
// let favAnimal = "My favorite animal is frogs";
// let laura = ['laura', 31, 'san antonio', 'mac', ['pizza', 'french fries', 'ice cream'], 2021, favAnimal]
// let age = laura[1];
// console.log(age);
// let innerArr = laura[4];
// // console.log(innerArr);
// // console.log(innerArr[1])
// // console.log(laura[4][1])
// console.log(laura[6]);
// console.log(laura)
//
// function desiredAge (num){
//     return num - 10
// }
//
// console.log(desiredAge(age));

// // methods
// // accessing elements from an array
// // nameOfArray[position withing the array] arrays always start at zero
//
// let valIndexZero = students [0];
// console.log(valIndexZero)





// console.log(students.indexOf("Mina"));//2
//
// console.log(students.lastIndexOf("Mina"));// 2,
// console.log(students.lastIndexOf())

// FUNCTIONS
// function sayHello(){
//     console.log("Say hey");
// }
// function nameOfFunction(num1, randomFunction ){
//     console.log("Doing background task");
//     randomFunction();
//     return  num1;
// }
//
// console.log(sayHello);
// nameOfFunction(1, sayHello)


// console.log(nameOfFunction(4, function () {
//     console.log("hey there!")
// }));
// nameOfFunction(1, )

//METHODS
//methods ae pre existing functions

// Math.random() // random number between 0 and 1
// console.log("PRINT THIS OUT");
// parseInt();



// let ages =[14, 23, 89, 5, 25, 36];
// let agesLength = ages.length; // 5
// console.log(agesLength);
// for(let i =0; i <= ages.length - 1; i++){
//     console.log(ages[i] * 2);
// }

//
// (function(){
    "use strict";
//
//     /**
//      * TODO:
//      * Create an array of 4 people's names and store it in a variable called
//      * 'names'.
//      */
let names = ["Jacob", "Therman", "Justin", "Jason"];
//
//     /**
//      * TODO:
//      * Create a log statement that will log the number of elements in the names
//      * array.
//      */
console.log(names.length)
//     /**
//      * TODO:
//      * Create log statements that will print each of the names individually by
//      * accessing each element's index.
//      */
console.log(names[0], names[1], names[2], names[3]);
//     /**
//      * TODO:
//      * Write some code that uses a for loop to log every item in the names
//      * array.
//      */
for(let i = 0; i<=names.length -1; i++){
    console.log("My name is " + names[i]);
}

//     /**
//      * TODO:
//      * Refactor your above code to use a `forEach` loop
//      */
let checkedOption;
names.forEach(names => {
    if (names.checked) {
        checkedOption = names[name.id];
    }
    return checkedOption;
});
//     /**
//      * TODO:
//      * Create the following three functions, each will accept an array and
//      * return an an element from it
//      * - first: returns the first item in the array
//      * - second: returns the second item in the array
//      * - last: returns the last item in the array
//      *
// function topVideoGames(Skyrim, AssassinsCreedOdysse) {
//     return [0];
//     }
// console.log(topVideoGames)

function topVideoGames(Skyrim, AssassinsCreed, Halo, MarioCart){
    console.log("Skyrim is by far the best game!");
    return  Skyrim;
}
topVideoGames(1)

//      * Example:
//      *  > first([1, 2, 3, 4, 5]) // returns 1
//      *  > second([1, 2, 3, 4, 5]) // returns 2
//      *  > last([1, 2, 3, 4, 5]) // return 5
//      */



//
// })();

