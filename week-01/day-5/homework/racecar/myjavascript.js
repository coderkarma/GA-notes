

var nbrLeft = 0; //correct
var nbrRight = 0; //correct
var max = 35;
    
$(document).keypress(function(event) {  //correct
        
  var keycode = (event.keyCode ? event.keyCode : event.which); 
  
  if(keycode == '97'){ 
    $('.leftCar').animate({'margin-top': '+=10px' }, 50);
      nbrLeft++; //correct
  } 

  if(keycode == '108') { //correct
    $('.rightCar').animate({'margin-top': '+=10px' }, 50);
      nbrRight++; //correct
  }


if (nbrLeft === max) {
	alert("Rocket Ship wins!");
	return false;
}

if (nbrRight === max) {
	alert("Alien wins!");
	return false;
}
});


