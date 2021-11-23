//Its definition has two parameters: a boolean which informs if it's cloudy and a number which tells us how many planes are scheduled to fly
//If it is not cloudy AND there are less than 10 planes scheduled to fly, then today is a good day to fly!

function flights(cloudy, howManyFlights) {
    if (!cloudy && (howManyFlights < 10)) {
        console.log("Lets fly!");
    } else console.log("Failure to launch");
}

flights( false, 9)
//



function getFullName(firstName, lastName){
    return firstName + " " + lastName;
}
let fullName = getFullName("kelly", "homan");
console.log(
    fullName
);


// Return the sum of two numbers
function add(x, y) {
    return x + y;
}
console.log(add(7, 3));

// Return the difference of two numbers
function subtract(x, y) {
    return x - y;
}
console.log(subtract(7, 3));
// Return the product of two numbers
function multiply(x ,y) {
    return x * y;
}
console.log(multiply(7, 3));

// Return the dividend of two numbers
function divide(x, y) {
    return x / y;
}
console.log(divide(7, 3));