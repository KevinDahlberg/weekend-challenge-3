#NPM INSTALL for modules, database recreation in database.sql

Hello Primers!

Welcome to your 3rd-weekend challenge! Full stack is pretty awesome huh? The idea in such a short time, you are able to spin up a full application architecture is pretty incredible.

This weekend is all about showing us that you have a handle on each of the different parts of the full stack. For this weekends challenge, you are going to create a 'TO DO' application. This is the type of application that is very common to tackle when learning a new language, which makes it extremely valuable to work through for the first time, since chances are good that at some point in your career you will tackle this type of application, but in another language.

Here are the specific components for the challenge:

**To Do App Assignment**
- Create a front end experience that allows a user to create a task.
- When the task is created, it should be stored inside of a database (SQL)
- Whenever a task is created the front end should refresh to show all tasks that need to be completed.
- Each task should have an option to 'Complete' or 'Delete'.
- When a task is complete, its visual representation should change on the front end (for example, the background of the task container could change from gray to green, as well as the complete option 'checked off'. Each of these are accomplished in CSS, but will need to hook into logic to know whether or not the task is complete)
- Whether or not a task is complete should also be stored in the database.
- Deleting a task should remove it both from the Front End as well as the Database.
- Make sure that you also show us your best styling chops.

We would recommend you spend some time thinking about how to approach this problem. Think through all the logic that will be needed prior to writing any code. Take your time, relax, remember that impostor syndrome is real, and that you are capable of knocking this out of the park!

Additionally, please include some way to recreate your initial database schema. This can be a .sql file with CREATE TABLE statements or you can create your schema automatically when your app loads.

**Tasks**
- [x]Hook up all the moving parts
- [x]MVP
  -  GET when DOM loads that pulls from DB
- Sketch out functions needed in client.js
  - [x] create task (POST)
  - [x] each task should have a complete, and delete button (DELETE) (POST)
  - [x] task background changes upon completion (part of complete button call?)
  - [x] add div to HTML to add table items to
  - append to div with buttons in POST function
  - test, make sure div posts with info from database
  - delete an object pulls it from the DOM and the DB
- sketch out ajax in client.js and routes in app.js (create modules), alternate between the 2 for testing.
- Wire frame DOM
- Add GET, POST, PUT, and DELETE commands to ajax sketches
- create SQL calls in DB
  - make sure you include some way to initiate DB scheme
- add SQL calls to server side js, testing along the way
- check flow from DOM to DB

HARD MODE

In whatever fashion you would like, create an 'are you sure: yes / no' option when deleting a task. Once again, you can interrupt this however you would like.

- create yes/no option
- edit task (PUT)

PRO MODE

Adjust the logic so that completed tasks are brought to the bottom of the page, where the remaining tasks left to complete are brought to the top of the list.

- move completed tasks to a "completed file" and show remaining tasks
