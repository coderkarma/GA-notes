var arguments = process.argv.slice(2);

/*1. You're a Thermometer, Harry!

Create two functions that convert temperatures from Celsius to Fahrenheit, and Fahrenheit to Celsius. The functions should output the converted result to the console using the console.log() method. The below formulae will convert the temperatures, respectively.

Converting Celsius to Fahrenheit

°Fahrenheit = °Celsius × 9/5 + 32

Converting Fahrenheit to Celsius

°Celsius = (Farenheit - 32) × 5/9

*/

//========================================

/*

function convertToCelsius(f) {
	return ((f - 32) * (5/9));
}

function convertToFahrenheit(celcius) {
	return (c * (9/5) + 32);
}

console.log(convertToFahrenheit(34));

console.log(convertToCelsius(55));

*/

//========================================
// Combine both functions into 1
//========================================


function convertTemp (temp, type) {
	if (type === "f") {
		temp = ((temp - 32) * (5/9));
		return temp + " c";
	}
	else {
		temp = (temp * (9/5) + 32);
		return temp + " f";
	}
}

console.log(convertTemp(34, "c"));


//
















