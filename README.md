# Online-Library-Search
It is a simple library search program that will show tech books as results 

Project Overview
----------------

Project Name: Online Library Search
------------
https://git.generalassemb.ly/parktwins1/Online-Library-Search

Project Description
-------------------

It is a online library search of the online library site using it's API to help users find books that they would like to read.


API and Data Sample
-------------------


API: https://openlibrary.org/dev/docs/api/search

Usable API(postman): http://openlibrary.org/search.json?q=

Usable API (backup): https://api.itbook.store/1.0/search/ 


{
    "numFound": 0,
    "start": 0,
    "numFoundExact": true,
    "docs": [],
    "num_found": 0
}

This is the results of a search query with no input from postman. If the user adds any word or the full title of the book it will turn up an array of the search results.

Wireframes
----------
Upload images of your wireframes to an image hosting site or add them to an assets folder in your repo and link them here with a description of each specific wireframe.


[![Wireframe-Online-Library.png](https://i.postimg.cc/P5NmthLN/Wireframe-Online-Library.png)](https://postimg.cc/rDXdJBNL)



MVP/PostMVP
-----------
The functionality will then be divided into two separate lists: MPV and PostMVP. Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.

<h3>MVP</h3>

Use axios and get the online library search api linked to the document
The input element should receive and return values from the text inputed into the field
Results should be appended to books spine (blocks) as they are returned after submission 
1 media query (min)
Style with CSS flexbox or grid 
Deploy it 


<h3>PostMVP</h3>
Add voice recognition to the search feature to allow search queries to occur without typing
Use CSS to spruce the background, books, and add more features like :hover or click
add event listeners for clicks and certain voice commands
Use local storage to save user favorites


Project Schedule
----------------
This schedule will be used to keep track of your progress throughout the week and align with our expectations.

You are responsible for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding Saturday and Sunday.

Day   |	Deliverable   |	Status
--------|----------------------------------------------------|---------------
June 21 | Complete Read.md, Wireframes, Priority Matrix | Incomplete
June 22 | Project Approval, PsuedoCode, HTML Boilerplate and cross links, test API|Incomplete
June 23 | Add JS Functionality, Event Listeners, 1 Media query, CSS Flexbox/Grid Styling |Incomplete
June 24 | Initial Clickable Model |Incomplete
June 25 | MVP | Incomplete
June 28 | Presentations|Incomplete


Priority Matrix
---------------

Include a full list of features that have been prioritized based on the Time and Importance Matrix. Link this image in a similar manner to your wireframes

[![KDP-Priority-Matrix.png](https://i.postimg.cc/BbXFB9rX/KDP-Priority-Matrix.png)](https://postimg.cc/8fgsT3PS)

Timeframes
----------

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle. You have limited time to code all phases of the game. Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

Component | Priority | Estimated Time | Time Invested | Actual Time
----------|----------|----------------|---------------|-------------
HTML MockUp & API links | M | 3 HRS | 1HRS | 1HRS
Basic JS Functionality| H | 4HRS | 0HRS | 0HRS
JS Event Listeners | H | 4 HRS | 0 HRS | 0HRS
Add Voice Recognition | M | 5 HRS | 0HRS | 0HRs
CSS Mockup | M | 5 HRS | 0HRS | 0HRS
Add Animations | L | 5 HRS | 0HRS | 0HRS
Debugging | H | 10 HRS | 0 HRS | 0HRS
Presentation Rehearsal | H | 4 HRS | 0HRS | 0HRS


Total | H | 40 hrs | 5hrs | 5hrs

Code Snippet
------------
Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

function reverse(string) {
	// here is the code to reverse a string of text
}
Change Log
----------
Use this section to document what changes were made and the reasoning behind those changes.
