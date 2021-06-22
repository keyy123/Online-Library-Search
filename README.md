# Online-Library-Search
It is a simple library search program that will show tech books as results 

Project Overview
----------------

Project Name: Online Library Search
------------
https://git.generalassemb.ly/parktwins1/Online-Library-Search

Project Description
-------------------

It is a online library search of the online library site using it's API to help users find books that they would like to read. In addition to this, It will append the search
results to the HTML objects that will represent books and upon clicking on them they should open or show cover with the book details. 


API and Data Sample
-------------------


API: https://openlibrary.org/dev/docs/api/search

Usable API(postman): http://openlibrary.org/search.json?q=

Usable API (backup): https://api.itbook.store/1.0/search/ 

```
{
    "numFound": 0,
    "start": 0,
    "numFoundExact": true,
    "docs": [],
    "num_found": 0
}
//it-books
{
    {
    "error": "0",
    "total": "439",
    "page": "1",
    "books": [
        {
            "title": "Head First HTML with CSS & XHTML",
            "subtitle": "A Learner's Companion to HTML, CSS, and XHTML",
            "isbn13": "9780596101978",
            "price": "$4.21",
            "image": "https://itbook.store/img/books/9780596101978.png",
            "url": "https://itbook.store/books/9780596101978"
        }
}
```


This is the results of a search query with no input from postman. If the user adds any word or the full title of the book it will turn up an array of the search results.

Wireframes
----------
<h3>MVP</h3>
![KDP-Wireframe-MVP-Concept.png](https://i.postimg.cc/3xPDXh0k/KDP-Wireframe-MVP-Concept.png)


<h3>post-MVP [version 0.1]</h3>
[![Wireframe-Online-Library.png](https://i.postimg.cc/P5NmthLN/Wireframe-Online-Library.png)](https://postimg.cc/rDXdJBNL)




MVP/PostMVP
-----------

<h3>MVP</h3>

* Use axios and get the online library search api linked to the document

* The input element should receive and return values from the text inputed into the field  

* Results should be appended to books spine (blocks) as they are returned after submission 

* 1 media query (min) at break point

* Style with CSS flexbox or grid 

* Deploy it 


<h3>PostMVP</h3>

* Add voice recognition to the search feature to allow search queries to occur without typing

* Use CSS to spruce the background, books, and add more features like :hover or click

* add event listeners for clicks and certain voice commands

* Use local storage to save user favorites


Project Schedule
----------------

Day   |	Deliverable   |	Status
--------|----------------------------------------------------|---------------
June 21 | Complete Read.md, Wireframes, Priority Matrix | Incomplete
June 22 | Project Approval, PsuedoCode, HTML Boilerplate and cross links, test API|Incomplete
June 23 | Add JS Functionality, Event Listeners, 1 Media query, CSS Flexbox/Grid Styling |Incomplete
June 24 | MVP |Incomplete
June 25 | Adv CSS/JS Styling and postMVP | Incomplete
June 28 | Presentations|Incomplete


Priority Matrix
---------------

[![KDP-Priority-Matrix.png](https://i.postimg.cc/BbXFB9rX/KDP-Priority-Matrix.png)](https://postimg.cc/8fgsT3PS)

Timeframes
----------

Component | Priority | Estimated Time | Time Invested | Actual Time
----------|----------|----------------|---------------|-------------
Create/Edit README.md | H | 3 HRS | 5HRS | 6HRS+
Create 3 Docs (html,css,js)| H | 1HRS | 0HRS | 0HRS
Create HTML Boilerplate&Elements| H | 1 HRS | 0 HRS | 0HRS
Link AxiosCDN & API | H | 1HRS | 0HRS | 0HRS
Prepare Global Variables (JS)| H | 1 HRS | 0HRS | 0HRS
Add JS Functions | M | 3HRS | 0HRS | 0HRS
Add JS Event Listeners | H | 3 HRS | 0 HRS | 0HRS
Add CSS Mockup: Flexbox & Media Queries @ breakpoint | M | 5 HRS | 0HRS | 0HRS
Add Voice Recognition | H | 5 HRS | 0HRS | 0HRs
Add Animations | M | 5 HRS | 0HRS | 0HRS
Debugging | H | 10 HRS | 0 HRS | 0HRS
Presentation Rehearsal | H | 4 HRS | 0HRS | 0HRS
Total | H | 42 hrs | 5hrs | 6hrs+

Code Snippet
------------


function reverse(string) {
	// here is the code to reverse a string of text
}
Change Log
----------
Use this section to document what changes were made and the reasoning behind those changes.
