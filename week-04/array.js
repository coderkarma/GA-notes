var className = ["Bradley", "Daniel", "Darragh", "Eric", "Francis", "Heather", "Humberto", "Ian", "James", "Jamie", "Justin", "Justin", "Katie", "Keala", "Kristian", "Lisa", "Marcel", "Melissa", "Nathan", "Neil", "Nick", "Olivia", "Peter", "Sakina", "Sarad", "Sharon", "Stephen", "Terry", "Tika", "Tom", "William"];


function searchSomeone (name, array) {
	var min = 0;
	var max = array.length - 1;
	var mid;
	var currentElement;	

	while (min <= max) {
		var mid = (min + max) / 2 | 0;
		currentElement = array[mid];
		console.log(mid, "mid");
		
		if (currentElement < name) {
			min = mid + 1;
		} else if (currentElement > name) {
			max = mid - 1;
		} else {
			return currentElement;
		}
	}
	return -1;
}


searchSomeone("Melissa", className);

console.log(searchSomeone("Melissa", className));