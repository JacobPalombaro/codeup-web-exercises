// Determine if a person can buy a drink at a bar
//are they at the bar?
//are they sober?
//are they 21?
//Do they have enough money?

let isAtBar = true;
let bac = .07;
let age = 22;
let cashOnHand = 5.99;


let canHaveADrink = (isAtBar || (bac < .08 && age >= 21 && cashOnHand >= 5.00))  // true && false && true && true --> false

if (canHaveADrink) { // true or false
    console.log("have a brewski my dude!");
} else { // it was not true
    console.log("sorry buddy, no brew for you");
}