

function showMultiplicationTable(x){
    for(var i = 1; i <= 10; i++){
        var answer = x * i;

        console.log(x+ 'x' + i + '+' + answer);
    }
}
showMultiplicationTable(7)

for (let i = 1; i <= 10; i++) {
        number = Math.floor(Math.random() * 181) + 20;
        if (number % 2 === 0) {
            console.log(number + " is even")
        } else {
            console.log(number + " is odd")
        }
    }
    for (i = 1; i <= 9; i++) {
    var res = [];
    for (a = 1; a <= i; a++) {
        res.push(i);
    }
    console.log(res.join(""));
}
function countDown(number){
    for(i = 1; i <= 20; i++){

        console.log(number - 5*i)
    }
}
console.log(countDown(105))




