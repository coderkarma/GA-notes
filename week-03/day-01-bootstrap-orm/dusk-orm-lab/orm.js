
/*

0.  Create a simple object called `Person`.
  - The `Person` object will have these properties:
  - `first_name` for a person's first name
  - `last_name` for a person's last name
  - `github_username` for a person's github_username  
    <br>


*/

function Person(first_name, last_name, github_username) {
	this.first_name = first_name;
	this.last_name = last_name;
	this.github_username = github_username;
}

/*

1.  Create an object constructor called Model.
  - The model will have these properties:
    - has a parameter called `name`
    - has a property `type` that is assigned the parameter `name`
    - has an array named data
    - has an identification number `_id` starting at zero
      <br><br>
*/


function Model (name) {
	this.type = name;
	this.data = [];
	this._id = 0;
	this._ts = Date.now();
}


/*

2. Create an object prototype for Model, with the following methods:
  - create: 
    - Method that has the parameters `object` and `callback`
    - Create an object called object_container.  This object will house your
      passed-in object as well as other meta-data we will generate
    - Assign our object_container the Model's `_id` property.  Increment the `_id`
      afterwards to ensure unique ids for everyone
    - Assign our object_container the current date  as a date stampt.  Ues the variable
      `_ts`
    - Lastly, assign our object to our object_container as a `data` property
    - Push our object_container into the Model's `data` array
    - Call our callback. Our call backshould return any object passed-in as an argument
    <br><br>

*/

Model.prototype = {
	
	create: function(object, callback){ 
		var objectContainer = {};
		
		objectContainer._id = this._id;
		this._id += 1;
		
		objectContainer._ts = this._ts;
		objectContainer.ownObject = object;
		this.data.push(objectContainer);
		
		return objectContainer;
	}, 
	/*
	- find_by_id:
    - Method that has the parameters 'object_id' and 'callback'
    - Searches the Model `data` array for a matching object that has the same `object_id`
    - Returns the matching object within a callback call
	*/


	find_by_id: function(objectID, callback){
		var found;
		this.data.forEach(function(object) {
			if (objectID === object._id) {
				found = object;
			}
			return object;
		});
	},

	/*
  - update:
    - Method that has the parameters `object_id`, `update_object`, and `callback`
    - Searches the Model `data` array for a matching object that has the same `object_id`
    - Updates that matching object's data property
    - Returns the matching object within a callback call
    <br><br>
    */

    update: function(objectID, update_object, callback){
    	var correct_id;
    	var _this = this.data;
    	this.data.forEach(function(object) {
    		if(object._id === objectID) {
    			correct_id = object._id;
    			correct_id = parseInt(correct_id);
    		};
    			_this.splice(correct_id, 0, update_object);
    			console.log("update function say:", _this)
    			return _this;

    	});
    	
    }




    /*
  - destroy:
    - Method that has the parameters `object_id`, and `callback`
    - Searches the Model `data` array for a matching object that has the same `object_id`
    - Removes the matching object from the Model `data` array
    - Returns the matching object within a callback call
    */



}


var user = new Model("user");

var Justin = new Person("Justin", "Reyes", "githubsome");

var newJustin = new Person ("Justine", "Rey", "blah");

user.create(user);
user.find_by_id(0);
user.update(0, newJustin);
console.log("justin new is  " + newJustin);





