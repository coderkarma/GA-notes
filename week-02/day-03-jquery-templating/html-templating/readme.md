# HTML Templating
| Objectives |
| :--- |
| Add the Underscore.js library to your projects |
| Create and compile an Underscore template |
| Use Underscore templating to display JavaScript data on your HTML page |

## What is a template?

* A **template** is a function that takes in data as **parameters** that returns a dynamic HTML string.

* Thus far, we've been coding information (or data) directly into our HTML file, but we need a way to dynamically display that data in a manner that separates html from javascript. In other words we shouldn't be writing html in our javascript, that is GROSS!

* We'll use [Underscore's](http://underscorejs.org/) [templating functionality](http://underscorejs.org/#template) to dynamically display data to our HTML.  is a JavaScript library that provides a bunch of utility to help you manipulate and display data. It includes a function to help us template, which we'll be taking advantage of.

## A Helpful Metaphor

Think of a **template** as a *mold*, the **parameter** passed in as *plastic* poured in, and the resulting html string that is generated as a *cast*. 

## Why use templating?

* Separate presentation (html & css) from your business logic (javascript). Remember this?

  ```js
  $('#student-list').append('<li class="student">' + firstName + ' - ' + lastName + '</li>');
  ```

* When appending new HTML elements to the page, the string of elements to append will only get longer as you begin to write more complex statements.

* Wouldn't it be nice if the HTML structure was already set up for us and we could just use it to dynamically inject some data?

* Maximize code reusability and maintainability.

* If you need to change your HTML structure for elements you're creating and displaying (i.e. adding an additional class name to your to-do tasks), all you have to do is change the template!

## Setup

Fork & clone this [repo](https://github.com/sf-wdi-21/underscore_templating) to get started.

## What is happening in `app.js`?

**Select something to mold**

1) Using jQuery we select our `octocat-template` element 

**Make the mold**

2) We give the element to Underscore's template function and a template function (or html mold if you wish) is generated from the  in our html.

**Create a factory line for each order**

3) We now have to loop through our octocats data to make a mold for each octocat.

**Pour the plastic into the mold**

4) For each octocat call the template function and pass it in

**Open our mold to find a casting!**

5) The template function returns a string which represents the html that it has generated by mashing the data into the template.

**Put the casting on display**

6) We append the generated html-string to the page using jQuery marked as our placeholder.

## Challenges

Use underscore templating to accomplish the following user stories:

### User stories
User should be able to...

* See all the octocats on the page
* Click on a profile picture next to each octocat's name that will take them to that octocat's Github account

### Bonus

Refactor your [Giffaw app](https://github.com/sf-wdi-21/giffaw) to use a template.