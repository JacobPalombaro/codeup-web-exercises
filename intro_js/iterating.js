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
// names.forEach(function (name) {
//     console.log()
// })



//     /**
//      * TODO:
//      * Create the following three functions, each will accept an array and
//      * return an an element from it

// function topVideoGames(Skyrim, AssassinsCreedOdysse) {
//     return [0];
//     }
// console.log(topVideoGames)
function topVideoGames (arr1){
    console.log(arr1[0])
    return arr1[0];

}
topVideoGames(names);

function codeup (arr2){
    console.log(arr2[1])
    return arr2[1];
}
codeup(names)

function hello (arr3){
    console.log(arr3[arr3.length - 1])
    return arr3[arr3.length - 1];
}
hello(names)


//      * Example:
//      *  > first([1, 2, 3, 4, 5]) // returns 1
//      *  > second([1, 2, 3, 4, 5]) // returns 2
//      *  > last([1, 2, 3, 4, 5]) // return 5
//      */
//      * - first: returns the first item in the array
//      * - second: returns the second item in the array
//      * - last: returns the last item in the array
//      *


//
// })();