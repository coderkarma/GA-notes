var mongoose = require("mongoose"); 
mongoose.connect("mongodb://localhost/test");

var ourBooks = require("./books.json");



var Schema = mongoose.Schema;

var BookSchema = new Schema({
    title: String,
    author: String,
    description: String,
    genre: String,
    ISBN: Number
});


var Book = mongoose.model('Book', BookSchema);

// var book = new Book({title: "Jurassic Park"});
// book.author = "Michael Crichton";
// book.description = "Uhh... Life... Life finds a way.";
// book.genre = 'fiction';
// book.ISBN = 9780345538987;
// book.save();


var book1 = {
	title: "Jurassic Park",
	author: "Michael Crichton",
	description: "Uhh... Life... Life finds a way.",
	genre: 'fiction',
	ISBN: 9780345538987
}

var book2 = {
	title: "American Gods",
	author: "Neil Gaiman",
	description: "Ex-con, Shadow, gets caught up in a war between the gods of the Old World and the New. /'This is a bad place for gods./'",
	genre: "Fantasy",
	ISBN: "978380789035"
}

var book3 = {
	title: "The Mezzanine",
	author: "Nicholson Baker",
	description: "An afternoon in the life of an office worker.",
	genre: "Non-fiction",
	ISBN: "978555842585"
}


//TODO: Add three unique books
// var book1 = Book.create({title: "El Amor en los tiempos del Colera", 
// 	author: "Gabriel Gabriel", 
// 	description: "awesome book", 
// 	genre: "fiction", 
// 	ISBN: 978307389731}, function (err, book) {
// 		console.log(book1, "console logging book 1");
// 	});

// var book2 = Book.create({title: "One Hundred Years of Solitude",
// 	author: "Gabriel Barcia Marquez",
// 	description: "Good Book",
// 	genre: "Fiction - magic realism ",
// 	ISBN: "0224618539"}, function (err, book) {
// 		console.log(book2, "console logging book 2");
// 	});


// var book3 = Book.create({title: "Foucault's Pendulum",
// 	author: "Umberto Eco",
// 	description: "After reading too many manuscripts about occult conspiracy theories, three vanity publisher employees (Belbo, Diotallevi and Casaubon) invent their own conspiracy for fun.",
// 	genre: "Speculative fiction",
// 	ISBN: "8845215911"}, function (err, book) {
// 		console.log(book3, "console logging book 3");
// 	});



Book.find({}, function (err, book) {
     console.log(books, "all");
   });

//<<<<<< REMOVE ALL BOOKS >>>>>>>>
// Book.remove({}, function(err, book) {
// 	if (err) {return console.log(err)};
// 	console.log("removal of", book.title, "succesful.")
// });


// Book.find({title: "El Amor en los tiempos del Colera"}, function(err, found){
// 	var foundTitle = found;
// 	console.log("Found: \n",foundTitle);
// });

//TODO: Find and display three different books using three different methods
// For example, find by title, find by author, and find by ISBN.
















//===========================================
//<<<<<<<< What I worked on initially >>>>>>>
//===========================================



// var mongoose = require("mongoose"); 
// mongoose.connect("mongodb://localhost/test");

// var Schema = mongoose.Schema;
// var BookSchema = new Schema({
//     title: String,
//     author: String,
//     description: String
// });

// var Book = mongoose.model('Book', BookSchema);

// // var book = new Book({title: "Jurassic Park"});
// // book.author = "Michael Crichton";
// // book.save()

// console.log(book);

// Book.create({title: "The Giver"}, function (err, book) {
//   console.log(book);
// });

// Book.find({}, function (err, books) {
//     console.log(books, "all");
//   });






// //process.exit();