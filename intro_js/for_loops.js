// function showMultiplicationTable(arg){
//     i = 1
//     for(let i = 1, i <= 10, i++)
// }
// num = num++
// function showMultiplicationTable(number) {
//     for(let i = 1, i <= 10, i++) {
//         console.log(number + "x" + i "=" + number*i);
//     }
// }
// showMultiplicationTable(7)


// function showMultiplicationTable(number) {
//     for(let i = 0; i <= 10; i++) {
//         console.log(number + " x " + i + " = " + number*i)
//     }
// }
// showMultiplicationTable(7)
// function getRndInteger(min, max){
//     return Math.floor(Math.random() * (max, min) ) + min;
// }
// console.log(getRndInteger(20,200))
// function isEvenOrOdd(number){
//     for(let i = 1; i <= 10; i++) {
//         number = Math.floor(Math.random() * 181) + 20;
//         if (number % 2 === 0) {
//             console.log(number + " is even")
//         } else {
//             console.log(number + " is odd")
//         }
//     }
//
//     }
// console.log(isEvenOrOdd(""))

// for (let i = 0; i < 9; i++) {
//     let number = 0;
//     console.log((number + 1) + 1);
// }
//
// function generatePyramid() {
//     let totalNumberOfRow = 9;
//     let output = '';
//     for (let i = 1; i <= 9; i++){
//
//     }
//     }
// //2.
// function showMultiplicationTable(number) {
//     for(let i = 0; i <= 10; i++) {
//         console.log(number + " x " + i + " = " + number*i)
//
//
//     }
// }
//
// showMultiplicationTable(7)
//
// 3.
// // function isEvenOrOod(number) {
// //
// // function getRndInteger(min, max) {
// //     return Math.floor(Math.random() * (max - min) ) + min;
// // }
// //
// // console.log(getRndInteger(20,200))
function isEvenOrOod(number) {
    for (let i = 1; i <= 10; i++) {
        number = Math.floor(Math.random() * 181) + 20;
        if (number % 2 === 0) {
            console.log(number + " is even")
        } else {
            console.log(number + " is odd")
        }
    }
}

console.log(isEvenOrOod())

//4.
for (i = 1; i <= 9; i++) {
    var res = [];
    for (a = 1; a <= i; a++) {
        res.push(i);
    }
    console.log(res.join(""));
}

//5.
function countDown(number){
    for(i = 1; i <= 20; i++){

        console.log(number - 5*i)
    }
}

console.log(countDown(105))


