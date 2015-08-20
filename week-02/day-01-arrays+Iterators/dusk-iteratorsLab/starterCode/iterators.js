//where our iterators live
var o_o = {
  
  each: function(list, callback) {
    for(var i = 0; i < list.length; i++) {
      callback(list[i]);
    }
  },
  
  map: function(list, callback){
    var newArray = [];
   for (i = 0; i < list.length; i++) {
    var element = list[i];
    var newElement = callback(element);
    newArray.push(newElement);



   }
  },
  
  filter: function(list, callback) {
<<<<<<< HEAD
     var output = [];
      for (var i = 0; i < list.length; i++) {
        if (callback(list[i])) {
          output.push(list[i]);
        }
      }
      return output;
=======
    //code here...
>>>>>>> 378a232692cc09b7562c65b71751abb72ace4793
  }
};

//expose our iterators to other files
//such as our assertions
module.exports = o_o;
<<<<<<< HEAD




























/*






solution


 var output = [];
      for (var i = 0; i < list.length; i++) {
        if (callback(list[i])) {
          output.push(list[i]);
        }


        */
=======
>>>>>>> 378a232692cc09b7562c65b71751abb72ace4793
