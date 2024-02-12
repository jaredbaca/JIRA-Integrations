require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
const base64 = require('base-64');
const handlers = require('./handlers')

var app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Routing

// GET request
app.get('/', (req, res) => {
    res.end('api request received ');
    console.log('api request received');
})

// TODO Move this entire section to a handler, separate out the format Jira comment part into its own function

// Post Request - for use with Calendly Webhook
app.post('/calendly', handlers.addJiraComment)

  

// Error Handling
app.use(function(req, res) {
	res.status(404);
	res.end('404 Error');
});

app.listen(3000, function(){
  console.log('http://localhost:3000');
});