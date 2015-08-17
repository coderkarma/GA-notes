//The Bridge of Death


/*==============================
//ASSIGNMENT INSTRUCTIONS
/*==============================

Grail-seeker should be able to:

Give answers the questions:

1) What is your favorite color?

2) What is the capital of Assyria?

3) What is the airspeed velocity of an unladen swallow?

Answer correctly, as follows:

1) Blue, red, green, yellow, purple, orange, pink are all acceptable

2) Assur

3) 24mph

Be allowed to pass for a correct answer

node bridgeOfDeath.js blue Assur 24mph
=> "You may pass"
Be cast into the gorge of eternal peril for an incorrect answer

node bridgeOfDeath.js grey Constantinople 10kph
=> "You have been cast into the gorge of eternal peril!"

/*==============================
//ANSWER
==============================*/

var arguments = process.argv.slice(2)

var colorAnswer = ['blue', 'red', 'yellow', 'purple', 'organe', 'pink']

function answerQuiz {
	console.log("Give answers the questions:

1) What is your favorite color?

2) What is the capital of Assyria?

3) What is the airspeed velocity of an unladen swallow?");

	if (favColor === colorAnswer) && (city === "Assur") && (speed === "24mph") {
		console.log("You may pass");
		else {
			console.log("You have been cast into the gorge of eternal peril!");
		}



	}
}

answerQuiz();























