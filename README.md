<h1 align="left">Jira-Calendly Integration</h1>

  <p align="left">
    A simple API designed to integrate Calendly with Jira to generate ticket comments for booked Calendly events. 
    <br />
    <br />
    <a href="https://youtu.be/WoDv9oZ3Zlg">View Project Video</a>
  </p>
</div>

<img width="530" alt="calendly_screenshot" src="https://github.com/jaredbaca/JIRA-Integrations/assets/110132943/553d653e-7df1-4329-8278-0cacc1ebc644">
<img width="374" alt="jira-calendly-screenshot" src="https://github.com/jaredbaca/JIRA-Integrations/assets/110132943/8aecdf21-c0bc-482f-a19c-090ff7c70f7f">



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Resources</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

The application contains a database of students, locations, and scheduled events. The web interface allows for viewing current bookings, reserving a space, and provides an admin view for editing and deleting events. Maestro enforces basic scheduling constraints, preventing scheduling conflicts and checking student ID numbers against the student information database.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

<ul>
	<li><a href="https://nodejs.org/en">Node.js</a></li>
	<li><a href="https://expressjs.com">Express</a></li>
 	<li><a href="https://calendly.com/">Calendly</a></li>
  	<li><a href="https://www.atlassian.com/software/jira">Jira</a></li>
   	<li><a href="https://www.heroku.com/home">Heroku</a></li>
	
</ul>

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Installation

Working with Maestro in development mode requires Node.js and npm (Node Package Manager). See information for installing both here. https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

Once Node.js and npm have been installed, all additional dependencies can be installed by running the **npm install** terminal command in the root directory. You may need to also run **npm install** from the frontend directory in order to install the Node modules for the React project.

### Setting up the MySQL database

This project requires connecting to an existing MySQL database. The *db_init* file will create the necessary tables along with primary and foreign keys, as well as populate the database with initial data. To do so, it must have a database name, host, and login credentials. These details can be added to the *.env* file for use in the rest of the application. If forking this repository on GitHub, the *.env* file is not included for obvious reasons. In that case, simply create a *.env* file and place it in the root directory.

The following variables should be replaced or added to the *.env* file:\
\
MYSQL_USERNAME\
MYSQL_PASSWORD\
HOST\
DB_PORT\
DB_NAME\
\
With the database created and the environment variables set, run the *db_init.js* file to populate the database. The *db_init.js* file will create the User, Location, and Event tables (if they do not already exist) and populate those tables with dummy data (if they are empty). The initial list of default events is scheduled for 03/01/2024. 

### Launching in Development Mode

1.	To launch the backend, open a terminal and navigate to the server directory, then run the following command:

node index.js

This will launch the Node.js server on localhost:4000

2.	To launch the frontend, cd into the frontend directory in a separate terminal window and run the command:

npm start
	
This will launch the React development server on localhost:3000. If a browser does not open automatically, manually open a browser and go to localhost:3000 to view the application.

The React frontend forwards all API requests to the Node.js server on port 4000. This is set with the “proxy” setting in the React package.json file. To make calls to the API directly, such as with Postman or in the browser, make sure to use port 4000. 
Usage



<!-- USAGE EXAMPLES -->
## Usage

The usage of the application should be straightforward. The navigation bar contains links to the master calendar, the booking form, and the admin page (this is included for convenience at the development stage, but will be removed in production). The booking form allows the user to select a date and time, a location from the dropdown list of available locations (which pulls from the database), and enter their First, Last, and Student ID. Of these, the Student ID is the only one that is required, as it pulls all relevant student data from the database.  

Backend validation provides a check that the dates are valid (end date is after start date, time is not outside available hours of 9am – 11:59pm, and most importantly that the selected location is not already booked for the desired time). These checks happen prior to making any database queries. If any of these validation checks fail, the user is presented with an error message and remains on the booking page. If the request is valid, the user receives a success message and is redirected to the home page (master calendar).

The admin page looks similar to the master calendar, but the events are clickable. Clicking an event brings up the event details form, which displays event information. The admin can update the dates, location, and Student ID number. The student data at the bottom of the form is read-only, and is pulled from the database based on Student ID. This form runs the same validation as the event booking form. At the very bottom of the form, the admin has the ability to delete the event, which removes it from the database.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

### Features to be Added In the Short Term
- More fleshed out admin page with the ability to edit, add, and delete both users and locations.
- A “Room Type” field in the booking form that allows the user to filter locations by type (Studio, Ensemble Room, etc.). This will be more necessary as the number of locations grows.
- More granular booking restrictions for individual spaces, such as that a student be in a specific major, instrument, or semester level.
- Additional UI features such as forward/back arrows for the date, details available when hovering over calendar events, and confirmation prompt before deleting an event.
- A user-facing event details page that is read-only

### Long Term Desirable Features
- User accounts
- Equipment checkout options 
- Accompanying mobile app



<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Jared Baca - jaredbacamusic@gmail.com

Project Link: [https://github.com/jaredbaca/Maestro](https://github.com/jaredbaca/Maestro)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## References

* [Bootstrap](https://getbootstrap.com/docs/4.0/getting-started/introduction/)
* [Forms in React with Hooks](https://javascript.plainenglish.io/forms-in-react-with-hooks-809a3f38ed4)
* [Passing Props through Link in react-router](https://www.daggala.com/passing-props-through-link-in-react-router/)
* [Passing Data via Links in React: A Guide to Effective Data Transfer](https://medium.com/@hammadrao891/passing-data-via-links-in-react-a-guide-to-effective-data-transfer-1e0b030e2a12#:~:text=In%20React%20Router%2C%20we%20can,data%20we%20want%20to%20pass.)
* [Validating, Creating, and Styling React-Bootstrap Forms](https://clerk.com/blog/validate-create-style-react-bootstrap-forms)

<p align="right">(<a href="#readme-top">back to top</a>)</p>




