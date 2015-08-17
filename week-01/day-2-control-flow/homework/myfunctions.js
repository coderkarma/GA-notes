var arguments = process.argv.slice(2);


function countDown(num){

    if(num === 0){
        return;
    } else {
        console.log(num);
        num = num - 1;
        countDown(num); 
        console.log(num);
        num = num + 1;
    }
}

countDown(arguments[1]);

/*
The code above displays the current value of num to the screen then decrements the value by one.
It then calls countdown(num) again. This time the value has been decremented.
Notice that these statements are encapsulated inside an if statement. This creates what is known as a base case.
When num no longer satisfies the conditional statement num >= 0, (the variable reaches zero,) the function will no longer call itself and will end.
Pat yourself on the back. This is not simple stuff!


//Original Code (only decreases until it reaches 0)

function countDown(num){

    if(num < 0 ){
        return;
    } else {

        console.log(num);
        num = num - 1;

        countDown(num);     
    }
}
*/