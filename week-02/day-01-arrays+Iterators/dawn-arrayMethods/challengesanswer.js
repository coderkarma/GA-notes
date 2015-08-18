
/*=============================================
<<<<<<<<<<<<<<< __ MORNIG __ >>>>>>>>>>>>>>
=============================================




<<<<<<<<<<<<<<< Challenge 1 (forEach)  >>>>>>>>>>>>>>

Curry up now has a line wrapped around the truck! 
It takes about two minutes per delicious curry burrito. 
Output the customer's name & their expected wait time.

var customers:   Justin, Ilias, Nathan, Camilo, Vikash, Adam, Brianna, Sarah, Ali, Jessie, Cameron
customers.forEach(callbackfn);
   Justin: 2 minutes
   Ilias: 4 minutes
   Nathan: 6 minutes
   Camilo: 8 minutes
   Vikash: 10 minutes
   ...
   Cameron: 22 minutes




var customers = ["Justin", "Ilias", "Nathan", "Camilo", "Vikash", "Adam", "Brianna", "Sarah", "Ali", "Jessie", "Cameron"];

var waitTime = 2;
customers.forEach(function callBack(name, index) {
    console.log(name + ": " + waitTime + " minutes"); 
    waitTime += 2;
});


/*<<<<<<<<<<<<<<< Challenge 2 (maps)  >>>>>>>>>>>>>>

Elaine the Etsy Merchant thinks her prices are scaring off customers. 
Subtracting one penny might help:

var prices = [3.00,4.00,10.00,2.25,3.01];
prices.map(callbackfn);
//[2.99, 3.99, 9.99, 2.24, 3.00]



var prices = [3.00,4.00,10.00,2.25,3.01];

prices.map(function(element) {
	return element - 0.01

});

--------Only substract if it changes dollar value (10,00 -> 9.99)----


var prices = [3.00,4.00,10.00,2.25,3.01];
var reduced =[];


prices.map(function(element) {
  reduced.push(element - 0.01);
});
 console.log(prices)

for (i = 0; i < prices.length; i++) {
  var priceString = prices[i].toFixed(2);
  var reducedString = reduced[i].toFixed(2);
  
  if (priceString.length > reducedString.length) {
      console.log(reduced[i]);
  }
}


/*<<<<<<<<<<<<<<< Challenge 3 (filter)  >>>>>>>>>>>>>>


Is there an interesting trend in birthdays? 
Do people tend to be born more on even-numbered dates or 
odd-numbered dates? This is a great chance to do some serious science!

var birthDates = [1, 1, 2, 4, 7, 4, 12, 30,...];

birthdates.filter(callbackfn);

//evenBirthdates = [2, 4, 4, 12, 30];

In an organized and semi-nonchaotic fashion, 
create a master list of all birthdates with every person in the class. 

We're only interested in the birthdate (1 - 31), 
we don't care about month or year.

Independently write a filter array function that creates an array 
for either odd or even birth dates.

Share your results with the class and bask in your great science!



var birthDates = [1, 1, 2, 4, 7, 4, 12, 30,...];

birthdates.filter(callbackfn);
*/


var birthDates = {
  "Melissa": 1;
  "Keala": 1;
  "Justinc": 2;
  "Heather": 3;
  "Daniel": 3;
  "Jamie": 3;
  "Bradly": 5;
  "Peter": 5;
  "Lisa": 6;
  "Eric": 6;
  "Sharon": 8;
  "Katie": 8;
  "Camilo": 10;
  "francis": 10;
  "Stephen": 12;
  "NathanO": 12;
  "olivia": 13;
  "Neil": 15;
  "Tika": 17;
  "sakina": 17;
  "Marcel": 20;
  "James": 20;
  "Daragh": 26;
  "Sarah": 31;
}

event = birthDates





/*=============================================
<<<<<<<<<<<<<<< __ AfterNoon __ >>>>>>>>>>>>>>
=============================================



/*



function assert(input, output, testFunction) {
    return output === testFunction(input);
}














