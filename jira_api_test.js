const fetch = require('node-fetch');
const credentials = require('./credentials.js');
const base64 = require('base-64');
const express = require('express');

var app = express();

let ticketID = JTC-83

const url = `https://jaredbacatest.atlassian.net/rest/servicedeskapi/request/${ticketID}`

const headers = new Headers({
    "Authorization": "Basic " + base64.encode(credentials.atlassian.username + ":" + credentials.atlassian.api_key),
    "Accept": "application/json",
    "Content-Type": "application/json"
})

// Define Calendly Comment Template

// Test api GET request to retrieve a single issue
fetch(url, {
    method: 'GET',
    headers: headers,
    credentials: 'include'
})
.then(response => {
    console.log(
      `Response: ${response.status} ${response.statusText}`
    );
    return response.text();
  })
  .then(text => console.log(text))
  .catch(err => console.error(err));

// app.listen(3000, function(){
//   console.log("http://localhost:3000")
// })
