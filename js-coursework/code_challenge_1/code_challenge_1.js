

/*
Coding challenge 1
BMI = mass / height ^ 2 = mass / (height * height)
mass in kg and height in meter

1. store mark's and john's mass and height in variables
2. calculate both BMI's
3.create a boolean variable containing information about whether mark has a higher BMI than Johnn.
4. print a string to the console containing variable from step 3.
*/


var johnMass, markMass, johnHeight, markHeight;

johnMass = 60; 
markMass = 55;
johnHeight = 1.67;
markHeight = 1.80;
var johnBMI = johnMass / (johnHeight^2);
var markBMI = markMass / (markHeight^2);

var isMarkBigger;
isMarkBigger = markBMI > johnBMI;

console.log("John's BMI is " + johnBMI);
console.log("Mark's BMI is " + markBMI);

console.log("Is Mark's BMI higher than John? " + isMarkBigger);