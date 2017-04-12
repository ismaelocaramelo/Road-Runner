# Static Content challenge

The challenge here is to create a node.js application that displays HTML pages at URLs that match the names of the folders in the `content` folder.

The application should be shipped with three tests:

* one that verifies that requests to valid URLs return a 200 HTTP status code
* one that verifies that requests to valid URLS return a body that contains the HTML generated from the relevant `index.md` markdown file
* one that verifies that requests to URLs that do not match content folders return a 404 HTTP status code

The application it's built in:

* Node.js
* AngularJs
* Gulp (task runner)
* Boostrap

Your application may make use of open-source code libraries. It is entirely up to you how the application performs the challenge.
