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
This simple API endpoint built with Node and Express makes use of Calendly webhooks and the Jira REST API to generate Jira comments for newly booked Calendly events.  


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

### Prerequisites

- Node.js and npm 
- Atlassian account and an existing Atlassian Jira project space
- Atlassian REST API Username
- Atlassian REST API Key
- Paid Calendly account
- [Subscribe to Calendly webhooks](https://developer.calendly.com/receive-data-from-scheduled-events-in-real-time-with-webhook-subscriptions)

### Calendly Event Form

This integration works by having a custom field in the Calendly event booking form for the existing Jira ticket number. The answers to these custom fields can be accessed in the webhook payload under the "questions_and_answers" field. Currently, the addJiraComment handler function parses this data based on the length of the questions/answers array:

<img width="586" alt="Screen Shot 2024-03-01 at 9 39 52 AM" src="https://github.com/jaredbaca/JIRA-Integrations/assets/110132943/3449f401-8ee8-448c-87af-391a27b169d4">

Depending on the content of the custom question/answer fields, this would need to be updated to make sure the ticket number is properly retrieved.


### Setting up API Credentials

The API credentials need to be stored as environment variables. This requires creating a *.env* file in the root directory and placing all API credentials in that file. The variables shoudl be named as follows: 

<br/>
ATLASSIAN_API_USERNAME
<br/>ATLASSIAN_API_KEY

### Launching in Development Mode

This integration is currently hosted on Heroku for use with my own Jira project. To run the project locally, simply run *node server.js* from the root directory. The server will run on localhost:3000 by default. The Jira ticket functionality can be tested using Postman or CURL commands. 


<!-- USAGE EXAMPLES -->
## Usage

The handlers.js file contains all of the logic for receiving the Calendly webhook payload, parsing the data into the necessary format for a Jira comment (in this case, a table with pertinent event data), and then submitting a POST request to the Jira REST API to create the comment. 

When it comes time to actually connect the integration to Calendly's webhooks using the subscription instructions above, a valid public URL will be required for the API endpoint. In my case, I hosted the Node server on Heroku.


<p align="right">(<a href="#readme-top">back to top</a>)</p>




<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Jared Baca - jaredbacamusic@gmail.com

Project Link: [https://github.com/jaredbaca/JIRA-Integrations](https://github.com/jaredbaca/JIRA-Integrations)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## References

* [Receive data from scheduled events in real time with webhook subscriptions](https://developer.calendly.com/receive-data-from-scheduled-events-in-real-time-with-webhook-subscriptions)
* [Jira REST API](https://developer.atlassian.com/server/jira/platform/rest-apis/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>




