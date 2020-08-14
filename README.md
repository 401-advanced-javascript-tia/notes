# LAB - Class 01

## Project: Notesy
- This is a terminal based (CLI) application allowing users to easily create and manage a list of categorized notes
- **End goal business requirements:**
  - User should be able to list all the notes in the database by All Notes and Notes in a category
  - User should be able to add a note to the database
  - User should be able to delete a single note
- Phase 1 - Application Setup: basic Input and Output from the command line, with flags and arguments 
- Phase 2 - Testing and Engineering: use Classes and Object Orientation, use TDD practices, integrate with an online CI framework
- Phase 3: - Data Modeling & NoSQL DBs - save notes to a MongoDB to retrieve later, categorize notes to more easily find them, be able to see a list of notes to manage them, be able to delete a note
- Phase 4: 

## Author: Tia Low

## Version: 1.01.5

## Links, Resources, Collaborations
- (link to the submission PR)
- ci/cd (GitHub Actions)
- worked with several classmates including Alex, Beasley, Amber, Jen, Matt, Blake
- special shoutout to Beasley for help with understanding the Lab 3 list and delete functions

## Setup

MONGOOSE_URI = mongodb://localhost:27017/notes

**How to initialize/run your application (where applicable)**
npm install
node . index.js
- add note by using node . --add 'this is the note'

**How to use your library (where applicable)**

### Tests
- npm install --dev jest
- run npm test in terminal


### UML
Link to an image of the UML for your application and response to events