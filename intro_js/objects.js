console.log("Welcome to Objects");

// let array = [1,2,3, true, false]
//
// let birthdayObject = {
//     month: "November",
//     day: 22,
//     getDetails: function(){
//         return this.month + "," + this.day
//    }
// }
//
// let person = {
//     name: "Jack",
//     birthday: birthdayObject,
//     isTall: false
//     getDetails: function() {
//         return this.name
//     }
// }
//
// function createPerson(name){
//     return {
//         firstName: name,
//         greeting: function (){
//             console.log("Hello, my name is " + this.firstName)
//         }
//     }
// }
//
// let personTwo = createPerson("Laura");
// let personThree = createPerson("Ry");
// let person = new Object(); .... another way to write it
// const newPropertyName = "Name"
//
// person[newPropertyName] = "Jake Palombaro";
// person.birthday = "July 10th";
// person.isTall = true;

//
// console.log(person)

// let dog = {
//     breed: " Huskey",
//     colors: [" brown", " black", " white"],
//     sex: "F",
//     name: "luna",
//     isFloofer: true,
//     bark: function (loud){
//         if (loud){
//             console.log("woof woof!!");
//         }else{
//             console.log("ruf ruf");
//         }
//     },
//    getDetails: function (){
//         return this.colors[0] + this.breed + " named " + this.name;
//    }
// };










(function() {
    "use strict";
//
//     /**
//      * TODO:
//      * Create an object with firstName and lastName properties that are strings
//      * with your first and last name. Store this object in a variable named
//      * `person`.
    let person = {
        lastName: "Palombaro",
        firstName: "Jacob"
    }
    console.log(person.lastName);
    console.log(person.firstName);
//      *
//      * Example:
//      *  > console.log(person.firstName) // "Rick"
//      *  > console.log(person.lastName) // "Sanchez"
//      */
//
//     /**
//      * TODO:
//      * Add a sayHello method to the person object that returns a greeting using
//      * the firstName and lastName properties.
//      * console.log the returned message to check your work
    person.sayHello = function () {
        return "Hello from "+ this.firstName +" "+ this.lastName + "!"
    }
    console.log(person.sayHello())

//      * Example
//      * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
//      */
//
//     /** TODO:
//      * HEB has an offer for the shoppers that buy products amounting to
//      * more than $200. If a shopper spends more than $200, they get a 12%
//      * discount. Write a JS program, using conditionals, that logs to the
//      * browser, how much Ryan, Cameron and George need to pay. We know that
//      * Cameron bought $180, Ryan $250 and George $320. Your program will have to
//      * display a line with the name of the person, the amount before the
//      * discount, the discount, if any, and the amount after the discount.
//      *
//      * Uncomment the lines below to create an array of objects where each object
//      * represents one shopper. Use a foreach loop to iterate through the array,
//      * and console.log the relevant messages for each person
//      */


    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
    shoppers.forEach(function (shopper){
        if (shopper.amount > 200){
            console.log(shopper.amount + " 12%");
            console.log("congrats on the discount!" + shopper.name);
            console.log(shopper.amount -(shopper.amount * .12));
        }else{
            console.log("no discount for you!" + shopper.name);
        }
            }
    )



    //
//     /** TODO:
//      * Create an array of objects that represent books and store it in a
//      * variable named `books`. Each object should have a title and an author
//      * property. The author property should be an object with properties
//      * `firstName` and `lastName`. Be creative and add at least 5 books to the
//      * array
    let Books = [
        {title1: "Harry Potter", Author: {lastName:"Rowling" , firstName: "J.K."}},
        {title2: "eragon", Author: {lastName: "Paolini" , firstName: "Chris"}},
        {title3: "lord of the rings", Author: {lastName: "Tolkien" , firstName: "J.R.R."}}

    ]
    console.log(Books);


//      * Example:
//      * > console.log(books[0].title) // "The Salmon of Doubt"
//      * > console.log(books[0].author.firstName) // "Douglas"
//      * > console.log(books[0].author.lastName) // "Adams"
//      */
//
//     /**
//      * TODO:
//      * Loop through the books array and output the following information about
//      * each book:
//      * - the book number (use the index of the book in the array)
//      * - the book title
//      * - author's full name (first name + last name)

// Books.forEach(function (title){
//     console.log(title)
//     console.log(title1),
//     console.log(title2),
//     console.log(title3);
//
//     })




//      * Example Console Output:
//      *
//      *      Book # 1
//      *      Title: The Salmon of Doubt
//      *      Author: Douglas Adams
//      *      ---
//      *      Book # 2
//      *      Title: Walkaway
//      *      Author: Cory Doctorow
//      *      ---
//      *      Book # 3
//      *      Title: A Brief History of Time
//      *      Author: Stephen Hawking
//      *      ---
//      *      ...
//      */
//
//     /**
//      * Bonus:
//      * - Create a function named `createBook` that accepts a title and author
//      *   name and returns a book object with the properties described
//      *   previously. Refactor your code that creates the books array to instead
//      *   use your function.
//      * - Create a function named `showBookInfo` that accepts a book object and
//      *   outputs the information described above. Refactor your loop to use your
//      *   `showBookInfo` function.
//      */
//
})();








