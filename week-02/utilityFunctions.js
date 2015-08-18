

//test suite
function assert(input, output, testFunction) {
    return output === testFunction(input);
}

/*

//functions to test
function mphToKph(mph) {
	return Math.round(mph * 1.61);
}


//test result for mphToKph
console.log(
	"mphTpKph passed?", 
	assert(60, 97, mphToKph),
	"output is:",
	mphToKph(60)
	);

console.log(
	"mphTpKph passed?", 
	assert(100, 161, mphToKph),
	"output is:",
	mphToKph(100)
	);



// assert(["monday", "tuesday", "wednesday"], "monday", first)

var weekdays = ["monday", "tuesday", "wednesday"];

function first(array){
	return array[0];
}

console.log(
	"first passed?",
	assert( , "monday", weekdays)
	)


first(weekdays);

*/




//assert(["monday", "tuesday", "wednesday"], "wednesday", last)

var days =["monday", "tuesday", "wednesday"];

function assert(input, output, testFunction) {
    return output === testFunction(input);
}

function last(array) {
	return array[array.length - 1];
}

last(days);






