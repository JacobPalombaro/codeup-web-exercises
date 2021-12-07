console.log("its math time")

console.log(Math.random());
function getRandomArbitrary(min, max){
    return Math.random() * (min - max) + min;
}
console.log(getRandomArbitrary(0, 100))
{}

function getRandomInt(min, max){
   const randomNumber = Math.random() * (max - min) + min
    console.log("before Floor", randomNumber)
    console.log("after Floor", Math.floor(randomNumber))
    console.log("after ceil", Math.ceil(randomNumber))
    console.log("after rounding", Math.round(randomNumber))
    return Math.floor (randomNumber);
}

// console.log(Math.pow(8, 10))

console.log(getRandomInt())

console.log(Math.PI)

console.log(Math.E)

