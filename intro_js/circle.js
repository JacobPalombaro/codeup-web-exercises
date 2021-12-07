(function() {
    "use strict";

    // create a circle object

            // TODO: complete this method
            // hint: area = pi * radius^2
    var circle = {
        radius: 3,

        getArea: function circle (radius) {
            // this.radius = radius;
            // this.area = function () {
            //     return Math.PI * this.radius * this.radius;
            // };
            // this.perimeter = function () {
            //     return 2 * Math.PI * this.radius;
            // };
            // var c = new circle(3);
            // console.log("area=", c.area().toFixed(2))
            // console.log("perimeter =", c.perimeter().toFixed(2));

           // Math.pow(this.radius, 2)

            return Math.PI * (this.radius ** 2)
        },

            // TODO: return the proper value




        logInfo: function (doRounding) {
            // TODO: complete this method.

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
let areaValue;

if (doRounding) {
    areaValue = Math.round(this.getArea())
}else{
    areaValue = this.getArea();
}
            console.log("Area of a circle with radius: " + this.radius + ", is: " + this.getArea());
        }
    };
    console.log("Circle area", circle.getArea());

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
circle.radius = 5;
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();