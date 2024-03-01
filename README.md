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



<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

### Features to be Added In the Short Term


### Long Term Desirable Features




<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Jared Baca - jaredbacamusic@gmail.com

Project Link: [https://github.com/jaredbaca/JIRA-Integrations](https://github.com/jaredbaca/JIRA-Integrations)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## References

* [Bootstrap](https://getbootstrap.com/docs/4.0/getting-started/introduction/)
* [Forms in React with Hooks](https://javascript.plainenglish.io/forms-in-react-with-hooks-809a3f38ed4)
* [Passing Props through Link in react-router](https://www.daggala.com/passing-props-through-link-in-react-router/)
* [Passing Data via Links in React: A Guide to Effective Data Transfer](https://medium.com/@hammadrao891/passing-data-via-links-in-react-a-guide-to-effective-data-transfer-1e0b030e2a12#:~:text=In%20React%20Router%2C%20we%20can,data%20we%20want%20to%20pass.)
* [Validating, Creating, and Styling React-Bootstrap Forms](https://clerk.com/blog/validate-create-style-react-bootstrap-forms)

<p align="right">(<a href="#readme-top">back to top</a>)</p>




