/*
	if whatever condition you are checking returns true then the next block of code will run

*/

const candies = 80

if(candies >= 100){
	console.log("You got a cavity!")
} else if (candies >= 95){
	console.log("You almost got a cavity!")
} else if (candies >= 75) {
	console.log("You should eat less candy!")
} else {
	console.log("You did not get a cavity!")
}

// Ternary Operator
// shorthand to represent a condition that returns values that you can use to assign a variable

const number = 25;

const isEven = (number % 2 === 0) ? "Yes" : "No"

console.log("Is " + number + " an even number? " + isEven)