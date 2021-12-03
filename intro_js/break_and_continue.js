
var userNumber = 0;
do {
    userNumber = Number(prompt("give me a odd number between 1 && 50!"));
    if (userNumber < 1 || userNumber > 50) {
        alert("Incorrect")
    } else if (userNumber % 2 === 0){
        alert("Not odd")
    }else if (isNaN(userNumber)){
        alert("Not a number")
    }else {
        alert("finally you got it")
        break;
    }

} while(true)


console.log("Number to skip is: " + userNumber)

for (var i = 1; i <= 50; i+=2){
    if(i === userNumber){
        console.log("Yikes: skipping number: " + userNumber)
        continue;
    }
    console.log("Here is and odd number: " + i)
}

