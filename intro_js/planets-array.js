
// function planets(){
//     "use strict";
//
//     let planets = [
//         'Mercury',
//         'Venus',
//         'Earth',
//         'Mars',
//         'Jupiter',
//         'Saturn',
//         'Uranus',
//         'Neptune'
//     ];

    // /**
    //  * TODO:
    //  * Read each console log below, and write some javascript code to perform
    //  * the step that it describes
    //  */

    // console.log('Adding "The Sun" to the beginning of the planets array.');
    // console.log(planets);
let planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

console.log(planets)

console.log("before", planets);

planets.unshift("The Sun");

console.log(planets)

console.log('Adding "Pluto" to the end of the planets array.');

console.log(planets);

planets.push("Pluto");

console.log("after push", planets)

console.log('Removing "The Sun" from the beginning of the planets array.');

planets.shift()

console.log(planets)

console.log('Removing "Pluto" from the end of the planets array.');

console.log(planets);

planets.pop();

console.log('Finding and logging the index of "Earth" in the planets array.');

console.log("earth's index:" + planets.indexOf("earth"))


// console.log("Reversing the order of the planets array.");

console.log("reversing array")
planets.reverse
console.log(planets);

console.log("Sorting the planets array.");

planets.sort

console.log(planets);
// })();