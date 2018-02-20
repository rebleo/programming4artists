## MEDIUM: Programming 4 Artists, Spring 2018
#### January 31 - May 23, 2018 | City College, DIAP

This course is an introduction to the fundamentals of computer programming through the lens of visual culture and networked media. Through in class demonstrations, exercises and assignments, class participants will learn the basics of JavaScript and HTML through the [p5.js](https://p5js.org/ ) framework. Weekly readings, in class slide decks and discussions will consider a myriad of artistic disciplines in relationship to emerging interactive media.

##### About
* The City College of New York, MFA in Digital & Interdisciplinary Art Practice
* B2050-2080 || Wednesdays 2:00 pm - 4:50pm || Shepard Hall, 408
* rebecca (marks) leopold, email: rleopold@ccny.cuny.edu - Office hours after class or by appointment.
* [Course Website](http://github.com/rebleo/programming4artists)
* [Course Wiki](https://github.com/rebleo/programming4artists/wiki)
___
##### Week 1 : January 31
###### Class Overview & Intro to Computation
* Intro to Course, Class & Instructor
* Student Past Experiences and Expectations
* What is code?
* Setup [GitHub](http://www.github.com), Blog + [p5.js Web Editor](https://alpha.editor.p5js.org/) Accounts
* GitHub, Markdown + the Class Wiki
* Intro to [p5.js](http://www.p5js.org) and Pixel Coordinate Systems, Stroke, Fill + Geometric Primitives
* [Week 1 Class Notes](http://oldobjectsnewideas.com/p4a/week1.pdf)

###### Assignment:
* Watch John Berger - [Ways of Seeing](https://www.youtube.com/watch?v=0pDE4VX_9Kk)
* Read John Berger - [Understanding a Photograph](http://oldobjectsnewideas.com/_bergerUnderstandingPhotograph.pdf)
* Find a geometric work from an artist you admire. Recreate the image using the p5.js web editor. Post a link to the class [wiki](https://github.com/rebleo/programming4artists/wiki/Week-1).
___
##### Week 2 -- February 7
###### Making (the) Visible: Photography to the Web
* Look at Homework + Reading Discussion
* The Browser as Creative Tool: Animating w/ p5.js
  * Intro to Unix, Running a Local Python Server, Text Editors ([Atom](https://atom.io/), [Sublime](https://www.sublimetext.com/) or [Brackets](http://brackets.io/)) Workflow
	* JavaScript in the [Chrome](https://www.google.com/chrome/browser/features.html?brand=CHBD&ds_kid=43700010857921807&gclid=EAIaIQobChMIm9jQwvKS2QIVmLXACh1qegcbEAAYASABEgLAMfD_BwE&gclsrc=aw.ds&dclid=CLqly8XyktkCFddGNwodY9EI_Q) Browser Console
  * Working w/ p5.js: [Download the Library Locally](https://p5js.org/download/) or [Link to the p5.js API](https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.11/p5.js)
* [setup()](https://p5js.org/reference/#/p5/setup), [draw()](https://p5js.org/reference/#/p5/draw), [frameCount](https://p5js.org/reference/#/p5/frameCount) + the Animation Loop
* p5.js [Structure](https://p5js.org/reference/#group-Structure), [Environment Functions](https://p5js.org/reference/#group-Environment) + [console.log](https://developer.mozilla.org/en-US/docs/Web/API/Console/log)
* [mouseX](https://p5js.org/reference/#/p5/mouseX) + [mouseY](https://p5js.org/reference/#/p5/mouseY)
* Local + Global [Variables](https://p5js.org/examples/data-variables.html): Numbers + Strings
* [Week 2 Class Notes](http://oldobjectsnewideas.com/p4a/week2.pdf)

###### Assignment:
* Read:
  * Vannevar Bush - [As We May Think](https://www.theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/), 1945
  * Clement Greenberg - [Modernist Painting](https://voices.uchicago.edu/wittgenstein/files/2007/10/Greenbergmodpaint.pdf), 1960
  * Tim Berners-Lee - [Long Live the Web](http://jblomo.github.io/webarch253/slides/Long_Live_the_Web.pdf), 2010

* Take last week’s code, and copy it to your local machine. Using the text editor - create .html + .js files that link to the p5.js library. Using the command line to browser workflow - make part of the image move over time. How can you animate the image that reflects or augments the original artwork or artist?

___
##### Week 3 -- February 14
###### Material Logic: Random == Nature
* Look at Homework + Reading Discussion
* Conditionals + Boolean Logic
* [random()](https://p5js.org/reference/#/p5/random) + [noise()](https://p5js.org/reference/#/p5/noise)
* p5.js Transformation and Event Functions
  * [rotate()](https://p5js.org/reference/#/p5/rotate)
  * [map()](https://p5js.org/reference/#/p5/map)
  * [keyPressed()](https://p5js.org/reference/#/p5/keyPressed) + [mousePressed()](https://p5js.org/reference/#/p5/mousePressed)
* Workshop: Setting Up A [DreamHost Server](https://www.dreamhost.com/promo/edu/) Wordpress Blog + [SFTP Client](http://cyberduck.io) and / or work on code assignments.
* [Week 3 Notes](http://oldobjectsnewideas.com/p4a/week3.pdf)

###### Assignment:
* Take last week’s code and make it interactive. Post to the [wiki](https://github.com/rebleo/programming4artists/wiki/Week-3)
* Read Taeyoon Choi's [Poetic Computation: Reader Chapters 1 + 2](http://poeticcomputation.info/)

___
##### Week 4 -- February 21
###### Patterns, Procedures + Repetition: Generating Art
* While + For Loops
* Making Your Own Functions
  * Calling vs. defining
  * Modularity, Re-usability
  * Arguments + parameters
* p5.js Constant and Math Functions
  * [dist()](https://p5js.org/reference/#/p5/dist)
	* [map()](https://p5js.org/reference/#/p5/map)
	* [lerp()](https://p5js.org/reference/#/p5/lerp)
  * [PI](https://p5js.org/reference/#/p5/PI)
	* [HALF_PI](https://p5js.org/reference/#/p5/HALF_PI)
	* angleMode() - [DEGREE](https://p5js.org/reference/#/p5/DEGREES) + [RADIANS](https://p5js.org/reference/#/p5/RADIANS)
  * [sin](https://p5js.org/examples/math-sine.html)

###### Assignment:
* Make a generative sketch that is different every time the program runs. Use at least one for loop. Try writing + calling your own function.
* Optional Reading: Lev Manovich - Software Takes Command Chapter 1 - [Alan Kay’s Universal Media Machine](http://oldobjectsnewideas.com/p4a/SoftwareTakesCommand_1.pdf)

___
##### Week 5 -- February 28
* Objects + Arrays
  * [Object Oriented Programming](https://shiffman.github.io/Learning-p5.js/ch08.html)
* Importing Images and Video
* p5.js Image Functions

###### Assignment:
* Optional Reading: Lev Manovich [The Anti-Sublime](http://users.fba.up.pt/~ldcag01015/anti_sublime/index.html)
* Optional Reading: Freeman, Wiggins, Starks + Sandler [A Concise Taxonomy for Describing Data as an Art Material](https://www.mitpressjournals.org/doi/pdf/10.1162/LEON_a_01414)

___

##### Week 6 -- March 7
###### Data + Art
* JSON + APIs
* p5.js JSON + String Functions

###### Assignment:
* Optional Reading: Seymour Papert - Mind-Storms [Chapter TBD]
* Optional Reading: Alan Turing - Computing Machinery and Intelligence
___

##### Week 7 -- March 14
* p5.js Dom Library
* HTML + CSS
* Native JavaScript

___

##### Week 8 -- March 21
###### Making Mobile
* Touch Interaction
* Events - Device Moved, Turned, Shaken
* Sensors - Rotation, Acceleration, Geolocation
___

##### Week 9 -- March 28

##### Week 10 -- April 11

##### Week 12 -- April 18

##### Week 13 -- April 25

##### Week 14 -- May 2

##### Week 15 -- May 9
###### Final Critique

---
#### Resources:
Weekly readings + tutorials linked from syllabus
* [p5 Reference](https://p5js.org/reference/)
* [The Coding Rainbow](https://www.youtube.com/user/shiffman/playlists?sort=dd&view=50&shelf_id=14) - Dan Shiffman, YouTube
* [CODE from Coding Rainbow](https://github.com/CodingRainbow/Rainbow-Code/tree/master/p5.js)
* [Intro to Programming for the Visual Artist with p5.js](https://www.kadenze.com/courses/introduction-to-programming-for-the-visual-arts-with-p5-js/info) - Kadenze
* [Code Academy](https://www.codecademy.com)
* [Programming Design Systems](https://programmingdesignsystems.com/) - Rune Madson
* [MDN - Getting Started w/ the Web](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web)
* [Make: Getting Started with p5.js: Making Interactive Graphics in JavaScript and Processing](http://amzn.to/1PmztVt)
* [Learn Enough to Be Dangerous](https://www.learnenough.com/)
* [Basic Unix Commands](https://www.tjhsst.edu/~dhyatt/superap/unixcmd.html)
---
#### Course Requirements:
Students are expected to participate in class: contributing positively to discussions, arriving on time having thoughtfully completed the reading, technical and creative assignments. Although you will need your laptop with you for every class, computers should be closed and mobile devices silent and not glowing during critique, class discussion and technical demonstrations.

##### Assessment + Grading:
Assignments must be completed and posted to the [class wiki](https://github.com/rebleo/programming4artists/wiki) by 12pm the day of class. Late work loses a letter grade and will not be accepted more than two weeks past the due date. Attendance at each class meeting is mandatory. Arriving more than 15 minutes late will be considered an absence. Three absences will lower your grade by one letter. Four absences will result in failure.

 * Participation + effort during weekly discussions + workshops 		30%
 * Regular Assignments																 							40%
 * Final Critique																		 								30%

##### Blogs:
You are required to maintain a blog for this class where you will post your homework to link to from the class wiki. Often times when making work with code, something might not be working the day of class. It is important to constantly document your process. If a sketch is not working during critique, the blog post is essential for us to see and comment on your process. There are many free options that will offer you enough storage space for the semester. I suggest [Wordpress](https://wordpress.com/) or [Medium](http://www.medium.com) but choose whatever platform you prefer.

##### Mobile Devices:
Your device is required for the course. Make it an instrument for you to use creatively and not a device that directs your attention away from you and your classmates’ time. There is a zero tolerance policy for the **mis-use** of any hand-held devices including phones, games, media players, tablets, email/txt devices, etc. during class. The mis-use of computational machines while in class will negatively affect your grade.

##### Academic Integrity:
All students are responsible for understanding and complying with the CCNY policy on academic integrity. The document can be found through the CCNY website by clicking on “Current Students” then “Academic Services” then “Policy on Academic Integrity.” All students must read the details regarding plagiarism and cheating in order to be familiar with the rules of the college. Cases where academic integrity is compromised will be prosecuted according to these rules. In addition, the Policy of Academic Integrity can be found in the Graduate Bulletin.

##### Special Accommodations:
Students who require special accommodations for disabilities must register with the AccessAbility Center/Student Disability Services and present a letter from the Center to the instructor at the start of the semester. [More information is available here](https://www.ccny.cuny.edu/accessability/register)

##### Email and Social Media Protocol:
Although email is a useful tool for quick communication, it is not a substitute for conversation. Issues concerning instructor evaluation, student approach to course assignments, unexpected challenges, meeting deadlines, etc. must be conducted in person, either before or after class, or at a mutually agreed upon time. Lengthy emails will be answered with a request for in-person consultation.
