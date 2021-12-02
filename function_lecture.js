// "use strict";
//
// var isAGoodDog = true;
//
// function tellMeIfTheDoggoWasGood(){
//     let isAGoodDog = true;
//     return isAGoodDog
//     ? "Such a good boy!"
//     : "Eh, he's had better days";
// }
//
// console.log(tellMeIfTheDoggoWasGood());



// Write a function that accepts the best score and returns true if its divisible by 3
// or 5 and false if it’s not

// Write a function that accepts the name of the bowling place (“ThEbEsTbOwLiNgPlAcEever”) and returns it in all lower
// case BONUS: return it with a space between each word
//



// Write a function that accepts the top three bowling scores and returns the average.
// write a function
// accepts 3 scores --> params
// returns // return a number
// execute (arguments)


let first = 120;
let second = 234;
let third = 90;

function nameOfFunction(score1, score2, score3){
    //code
    let average = (score1 + score2 + score3) / 3;
    return average;

}

console.log(nameOfFunction(first, second, third));

// Given these variables: let score = 109; let name = “bowling Is Fun”; let isBowlingFun = true; let players =
//[“tom”, “jerry”, “Garfield”]; Write a function that returns the type of each of the variables (call the function once per variable);
//
// Write a function that executes all of the above functions

//1.write a function
//2.return type of var
//3.call the function 3 times
// let score = 109;
// let name = "bowling Is Fun";
// let isBowlingFun = true; let players = ["tom, "jerry", "garfield"];
// function findType(thing){
//     return typeof thing;
//
// }
// console.log(findType(isBowlingFun));
// console.log(findType(score));
// console.log(findType(name));
// console.log(findType(players));
//
//
// function myFunction(firstName, lastName){
//     return firstName + lastName;
// };
// console.log(myFunction("jacob", " Palombaro"));




function makeLowercase(name) {
    let letters = name.split("");
    let tempString = letters[0].toLowerCase();

    for (let x = 1; x < letters.length; x++) {
        if (letters[x] == letters[x].toUpperCase()) {
            tempString += ' ' + letters[x].toLowerCase();
        }
        else {
            tempString += letters[x];
        }
    }

    return tempString;
}

console.log(makeLowercase("TheBestBowlingPlaceEver"));

function toLower(str){
    return str. toLowerCase();
}

console.log(toLower("TheBestBowlingPlaceEver"));
