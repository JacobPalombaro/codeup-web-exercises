//Its definition has two parameters: a boolean which informs if it's cloudy and a number which tells us how many planes are scheduled to fly
//If it is not cloudy AND there are less than 10 planes scheduled to fly, then today is a good day to fly!

function flights(cloudy, howManyFlights) {
    if (!cloudy && (howManyFlights < 10)) {
        console.log("Lets fly!");
    } else console.log("Failure to launch");
}

flights( false, howManyFlights 9)







