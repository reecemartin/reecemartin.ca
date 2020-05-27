---
title: "Dogwood: Enhanced, Interactive Assignments on Canvas"
date: "2020-05-01"
---

<p align="center">
  <img width="398" height="150" src="https://github.com/reecemartin/dogwood/blob/master/docs/screenshots/dogwood.png?raw=true">
  <h1>dogwood</h1>
</p>

A project for creating enhanced interactive assignments with Canvas. Named after the provincial flower of British Columbia.

The project is developed with the MERN (Mongo Express React Node) stack. 

This project was built for a CSC494 Project at the University of Toronto supervised by Professor Paul Gries http://www.cs.toronto.edu/~pgries/.  

## Project Motivation

Many students and teachers have probably faced this exact scenario: An assignment's description is confusing, so students flock to the course's discussion boards to ask questions about it. However, a regular discussion board's structure is linear, and when they get long, questions that have already been asked about the confusing sections and replies are easily missed, and more questions get asked about the same thing, causing confusion and extra work for instructor's to answer them. The problem: questions aren't clearly associated with specific parts of an assignment, and they aren't displayed in a logical order or way that allow for easy retrieval of information. 

## Goal

Dogwood aims to solve this problem that exist in traditional forum-style discussion boards by integrating a Q&A interface directly inside an assignment, giving students the ability to ask question about a specific part of an assignment, and display them in a way that is intuitive for other students to find the answer that they are looking for. Dogwood is designed to be a Canvas LMS (https://www.instructure.com/canvas/) plug-in that can be embedded into a Canvas course in place of the built-in "Assignments" page, or it can be used as a standalone site after Canvas assignment information has been retrieved. 

## Initial Planning

### Proposal

A full write up of our initial proposal can be found [here](https://github.com/reecemartin/dogwood/blob/master/docs/planning/Proposal/Proposal.md). This document outlined the motivation found above, and what we planned to build at the beginning. 

### The Design

The design and look of Dogwood is inspired by its predecessors: Piazza and Canvas's own discussion board. We wanted to incorporate what already works with these two products into what we thought they lacked: the context of the assignment description itself. As we envisioned this to be the entrypoint for a student into their assignment, we wanted the assignment description itself to take the center stage, and the discussion itself to take a supporting role, which is how we came to the initial design of having the description take up about 70% of the screen space, while questions and answers are shown in a sidebar on the right hand side. 

### Anchored Questions

A large part of our project revolves around the concept of an "anchored question": a question that has an anchor point. These anchor points are envisioned to be either a section, or a specific point in the text that needs more explanation. Due to concerns with the technical complexity, we started with working only with predetermined anchors: the instructor dictates which pieces of text are important enough to become an anchor, through the use of HTML tags; the software, on initial setup of the assignment, then scans the assignment text for these specified HTML tags and assigns an anchor to them, at which the students are then able to ask questions. 

### Q & A

We felt that Piazza's discussion board system (https://piazza.com/) is very well developed and had all the features that we loved, so we decided to implement similar features in Dogwood, while further improving on them. The features we thought were necessary to port to Dogwood include: anonymous questions, private (instructor-only) questions, comments, student-contributed answers, and a powerful rich text editor for text entry into Dogwood. Besides these features, some other features we think would be helpful to add to Dogwood in the future include

* A voting system to help instructors answer the most important questions first somewhat liek how Reddit operates
* Reddit-esque threads for comments in a question.
* More robust anchoring systems
* Mobile Device Support and Optimization
* Integration with more LMS Software

### Architecture

We decided to use the MERN stack for our project: this is the stack that we are most comfortable with, and we liked the powerful features that React, combined with the material-ui package, gave us in terms of building out our layout. 

In terms of the backend, we used MongoDB and ExpressJS, along with the mongoose package to help us create an object-oriented approach to the business model. Here is a UML representation of our backend Mongoose schema, but do note that it has been changed slightly since its conception: 

![backend UML](https://github.com/reecemartin/dogwood/blob/master/docs/planning/Backend/uml.png?raw=true)

Our frontend is built with components that represent each of the pages, as well as smaller, reusable components such as cards to represent questions. material-ui really helps us out here with prebuilt React components that offer a lot of variation in styling, but combining them into the layout was no small feat still! 

### Interface with the Canvas API

This project was an exciting opportunity for us to interact with a mature and powerful API, and although we still haven't utilized it to its full extent, we've already had a lot of fun with it. 

The initial setup of the course is done by fetching all the assignments from a single course, and then processing them to embed anchors. Each object in the database (courses, assignments, users) all correspond to a real Canvas/Quercus object, as they are all created from the Canvas API.

## Feature Progression

### First Prototype (End of February 2020)

The first prototype we developed was focused on the concept of anchors: We wanted to ensure that the most important part of Dogwood -- being able to anchor questions to a specific anchor and browse questions only pertaining to a certain anchor -- was implemented first, so we could see whether our idea would actually be worthwhile to implement at all. For this milestone, we implemented:

* Importing of assignments from Canvas/Quercus (U of T's Canvas LMS instance)
* Processing of assignments to extract anchor points
* Adding questions to an anchor
* Addding an instructor answer to a question
* Displaying an assignment with questions in a sidebar
* Displaying anchored questions when an anchor is clicked

![Assignment Default View](https://github.com/reecemartin/dogwood/blob/master/docs/screenshots/assignment-default-view.png?raw=true)

### Second Prototype (Middle of March 2020)

Our second milestone built upon what we implemented for the first phase, and we implemented a few more features that we deemed essential to Dogwood, with the primary focus being on more Q&A functionality and better presentation of information. The features we implemented include:

* A course page that lists out all the assignments categorized by due dates
![Course View Page](https://github.com/reecemartin/dogwood/blob/master/docs/screenshots/course-view.png?raw=true)
* A new question preview box that shows up when an anchor is hovered over, showing the number of questions in total, number of unanswered questions, and the top unanswered/overall question for the anchor
![Anchor Preview Box](https://github.com/reecemartin/dogwood/blob/master/docs/screenshots/hover-preview.png?raw=true)
* Ability to ask a private/instructor-only question that is hidden from other students, the question will show as red in the question list
* Ability to edit an answer after it's saved

## Current Status (April 2020)

We are currently working to improve the Q&A interface further, and to expand on the functionality of anchors. 

* We've finished implementing student answers both in our frontend and in our backend: this was much less tedious as we though for the frontend, as we were able to keep all the code interacting with the backend, and the backend can deal with the type of answer being updated by looking at the user type. 
![Student Answer Button](https://github.com/reecemartin/dogwood/blob/master/docs/screenshots/student-answer-button.png?raw=true)
![Student Answer TextBox](https://github.com/reecemartin/dogwood/blob/master/docs/screenshots/student-answer-textbox.png?raw=true)
* Anonymous questions have also been implemented: this involved creating a flag in the question schema; when the question is being displayed on the screen, if the author is not the same as the current author, then the application will display "Anonymous" instead.
* A new look for assignments: we've almost finished implementing our expanded question view! Unlike the default view that focuses on the assignment content itself and has a minimal Q&A interface section at the side, this view focuses on the questions at each anchor by relegating the "context" -- the anchors to the sidebar, and displays the questions in the rest of the space instead. The new interface is still aesthetically similar to the old interface, although a bit more intricate and designed better in terms of code. 
![Assignment Expanded View](https://github.com/reecemartin/dogwood/blob/master/docs/screenshots/assignment-expanded-view.png?raw=true)

## Future Plans

We have a laundry list of features that we feel would be great to include in Dogwood, and we will hopefully be able to get to them in the future. These are ranked by priority/importance, but not necessarily in the order we will implement them, depending on the circumstances.

### Near Future

* User testing. This is one aspect that we unfortunately did not have time to explore during our initial prototyping and design phase due to time/space constraints and the global COVID-19 crisis, but we definitely want to get to this as soon as possible. Although we are part of the target audience, we still need to reach out to more people, and get their opinion on the usefulness of dogwood versus competing products such as Piazza, and what they think is the most important feature that dogwood needs to have. Importantly, we will need to reach out to both instructors and students, as they are both important in this conversation. 
* Unify the two assignment views. As a measure to save time and headache, the two were implemented as components that are completely separated, and there is a lot of repeated code, with a loading screen causing discontinuity when switching between the two. The goal is to have the assignment component implemented such that we can resize the question and switch to the expanded view seamlessly. 
* Deploy the application. As this is a prototype with not much real functionality yet, we haven't gotten around to deploying the application, but this will be done in the near future as soon as we feel it is more ready. 
* Implement a rich-text editor. Currently, the Q&A interface is severely limited by the fact that only plaintext can be typed into the TextField components. We really appreciate the rich text and LaTeX editor in Piazza, which has helped us immensely when working with courses in the math and sciences, and this is a feature that we feel is a must have for dogwood. 
* Implement a voting system. This is something that we feel will be very useful in prioritizing questions for instructors to answer, and we planned to have this feature in our proposal. 
* Implement comments. We like how comments currently work in Piazza, but we want to expand on it by creating Reddit-esque threads that will be much better for follow up discussion regarding the question or the answer. 
* Custom Anchors. Currently, dogwood is limited by the fact that only fixed anchors can be used to anchor questions, and these can only be set by the instructor at import time. We want dogwood to be flexible enough to account for questions that can relate to a freely-selected anchor, while still rigid enough to have structure and not create too much of a mess. This is a technical hurdle that, when crossed, will bring dogwood to the next level, and we're entertaining different ideas on how this could work, including Google Docs-style comments that anchor to highlighted text, or heatmap-style comments that have a single coordinate that will fit it best. 
* Search. The search functionality is one aspect that is really appreciated in Piazza. Although not able to provide the anchoring functionality like dogwood, Piazza's search functionality is helpful in getting through the clutter, and be able to find the answer to a question quickly. 

### Far Future

* Deal with Editing & Changes. This was a major concern of ours when we were thinking about flexible anchors, as we'd need to think about what to do when the assignment has been updated to remove the anchors, or if the assignment has been shifted around too much that the application won't be able to anchor questions in the correct place. We haven't thought of a complete plan to get around this yet, but we will do some more thinking!
* Implement OAuth. This is a really big aspect of the project that will take it beyond a prototype/MVP and elevate it into a product that can actually be used by a school. Currently, there is only one user account connected to the project using a manually-generated API token, which means that it doesn't support multiple users just yet, and won't work out of the box for any other user. In order to do so, we need to retrieve the developer token from the Quercus administrators, and in it's current state, we just don't think Dogwood is ready for that yet. We plan to develop the project further and prove that it is a valuable project before we connect it to Quercus. 

## How to start the Development Server

1. Install NodeJS and NPM (typically packaged together)
2. Clone this project
3. In a terminal, navigate to the root folder of the project repository
4. Run `npm install`
5. Navigate into the client folder
6. Run `npm install`
7. Navigate back to the root folder
6. Run `npm run dev`

Congrats! Now the development server is running, with the front end React app running on Port 3000, and the back end Express app running on Port 4000.
