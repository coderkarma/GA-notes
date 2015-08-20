
$(document).ready(function() {


//<<<<<< the name of the course >>>>>>>>>

//data.course


//<<<<<< the first student's id and full name >>>>>>>>>


//console.log(data.students[0].id + data.students[0].first_name);

//<<<<<< the number of students in the class >>>>>>>>>

//var studentCount = data.students.length;



//<<<<<<<<<<<<< a list of github usernames >>>>>>>>>
/*
for(i = 0; i <= studentCount; i++) {
	console.log(data.students[i].github_username);
};

*/

//<<<<<<<<<<<<<<<<<<<< Bonus >>>>>>>>>>>>>>>>>>>>

/*Create a function buildGithubLink that 
transforms a single student's info into an 
html string, with the following format: 

<a href="https://github.com/torvalds">Linus Torvalds</a>

*/

function buildGithubLink(student) {
		var firstName = student.first_name;
		var lastName =  student.last_name;
		var fullName = firstName + " " + lastName;
		var gitUser = student.github_username;
		var gitLink = ("<a href='https://github.com/" + gitUser + "'>" + fullName + "</a><br>" );
		return gitLink;
	}

		

/*
Using the function you just built, create a function called renderGithubLinks 
that takes an array of students and adds their github links to the page.
Extra points if you use built-in Array methods like forEach, map, and join 
and only insert into the DOM once.
*/

function renderGithubLinks(students) {
	students.forEach(function (student) {
		var anchors = buildGithubLink(student);
		$('body').append(anchors);

	});
}


	renderGithubLinks(data.students);




});








