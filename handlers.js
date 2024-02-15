const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
var bodyParser = require('body-parser');
const base64 = require('base-64');

const ATLASSIAN_API_USERNAME = process.env.ATLASSIAN_API_USERNAME;
const ATLASSIAN_API_KEY = process.env.ATLASSIAN_API_KEY;


// function formatJiraComment(jiraCommentURL, eventInfo) {
//     // Takes the event info from Calendly POST request and formats it into the body of Jira comment
//     // Can send either list format or table format (preferred)

//     var bodyDataJSON = {
//         "body" : {

//         "version": 1,
//         "type": "doc",
//         "content": [
//             // Header
//           {
//             "type": "paragraph",
//             "content": [
//               {
//                 "type": "text",
//                 "text": "Calendly Event Updated ",
//                 "marks": [
//                     {
//                         "type": "strong"
//                     }
//                 ]
//               },
//             ]
//           },
//           // Event URI
//           {
//             "type": "paragraph",
//             "content": [
//               {
//                 "type": "text",
//                 "text": "Event URI: "
//               },
//               {
//                 "type": "text",
//                 "text": `${eventInfo.uri}`,
//                 "marks" : [
//                     {
//                         "type": "link",
//                         "attrs": {
//                             "href": `${eventInfo.uri}`,
//                             "title": "Calendly Event"
//       }
//                     }

//                 ]
//               }
//             ]
//           },
//           // Event Name
//           {
//             "type": "paragraph",
//             "content": [
//               {
//                 "type": "text",
//                 "text": "Name: ",
//                 "marks": [
//                     {"type": "strong"}
//                 ]
//               },
//               {
//                 "type": "text",
//                 "text": `${eventInfo.name}`
//               }
//             ]
//           },
//           // Date
//           {
//             "type": "paragraph",
//             "content": [
//               {
//                 "type": "text",
//                 "text": "Date: ",
//                 "marks": [
//                     {"type": "strong"}
//                 ]
//               },
//               {
//                 "type": "text",
//                 "text": `${eventInfo.start_time}`
//               }
//             ]
//           },
//           // User name
//           {
//             "type": "paragraph",
//             "content": [
//               {
//                 "type": "text",
//                 "text": "User: ",
//                 "marks": [
//                     {"type": "strong"}
//                 ]
//               },
//               {
//                 "type": "text",
//                 "text": `${eventInfo.event_memberships[0].user_name}`
//               }
//             ]
//           }
//         ]
//         }
//       }

//     var bodyDataTableJSON = {
//     "body": {
//         "version": 1,
//         "type": "doc",
//         "content": [
//             {
//                 "type": "table",
//                 "attrs": {
//                     "isNumberColumnEnabled": false,
//                     "layout": "default"
//                 },
//                 "content": [

//                     // Title
//                     {
//                         "type": "tableRow",
//                         "content": [
//                             // Cell 1
//                             {
//                             "type": "tableCell",
//                             "attrs": {},
//                             "content": [
//                                 {
//                                 "type": "paragraph",
//                                 "content": [
//                                     {
//                                     "type": "text",
//                                     "text": "Calendly Event Booked",
//                                     "marks": [
//                                         {
//                                             "type": "strong"
//                                         }
//                                     ]
//                                     }
//                                 ]
//                                 }
//                             ]
//                             }
//                         ]
//                         },


//                     // Row 1 - Event Name
//                     {
//                     "type": "tableRow",
//                     "content": [
//                         // Cell 1
//                         {
//                         "type": "tableCell",
//                         "attrs": {},
//                         "content": [
//                             {
//                             "type": "paragraph",
//                             "content": [
//                                 {
//                                 "type": "text",
//                                 "text": "Event Name"
//                                 }
//                             ]
//                             }
//                         ]
//                         },
//                         // Cell 2
//                         {
//                         "type": "tableCell",
//                         "attrs": {},
//                         "content": [
//                             {
//                             "type": "paragraph",
//                             "content": [
//                                 {
//                                 "type": "text",
//                                 "text": `${eventInfo.name}`
//                                 }
//                             ]
//                             }
//                         ]
//                         },
//                     ]
//                     },

//                     // Row 2 - Event URI
//                     {
//                         "type": "tableRow",
//                         "content": [
//                             // Cell 1
//                             {
//                             "type": "tableCell",
//                             "attrs": {},
//                             "content": [
//                                 {
//                                 "type": "paragraph",
//                                 "content": [
//                                     {
//                                     "type": "text",
//                                     "text": "Event URL"
//                                     }
//                                 ]
//                                 }
//                             ]
//                             },
//                             // Cell 2
//                             {
//                             "type": "tableCell",
//                             "attrs": {},
//                             "content": [
//                                 {
//                                 "type": "paragraph",
//                                 "content": [
//                                     {
//                                     "type": "text",
//                                     "text": `${eventInfo.uri}`,
//                                     "marks" : [
//                                         {
//                                             "type": "link",
//                                             "attrs": {
//                                                 "href": `${eventInfo.uri}`,
//                                                 "title": "Calendly Event"
//                                             }
//                                         }
                    
//                                     ]
//                                     }
//                                 ]
//                                 }
//                             ]
//                             },  
//                         ]
//                     },

//                     // Row 3 - Date
//                     {
//                         "type": "tableRow",
//                         "content": [
//                             // Cell 1
//                             {
//                             "type": "tableCell",
//                             "attrs": {},
//                             "content": [
//                                 {
//                                 "type": "paragraph",
//                                 "content": [
//                                     {
//                                     "type": "text",
//                                     "text": "Date"
//                                     }
//                                 ]
//                                 }
//                             ]
//                             },
//                             // Cell 2
//                             {
//                             "type": "tableCell",
//                             "attrs": {},
//                             "content": [
//                                 {
//                                 "type": "paragraph",
//                                 "content": [
//                                     {
//                                     "type": "text",
//                                     "text": `${new Date(eventInfo.start_time).toUTCString()}`
//                                     }
//                                 ]
//                                 }
//                             ]
//                             },  
//                         ]
//                     },

//                     // Row 4 - User Name
//                     {
//                         "type": "tableRow",
//                         "content": [
//                             // Cell 1
//                             {
//                             "type": "tableCell",
//                             "attrs": {},
//                             "content": [
//                                 {
//                                 "type": "paragraph",
//                                 "content": [
//                                     {
//                                     "type": "text",
//                                     "text": "Username"
//                                     }
//                                 ]
//                                 }
//                             ]
//                             },
//                             // Cell 2
//                             {
//                             "type": "tableCell",
//                             "attrs": {},
//                             "content": [
//                                 {
//                                 "type": "paragraph",
//                                 "content": [
//                                     {
//                                     "type": "text",
//                                     "text": `${eventInfo.event_memberships[0].user_name}`
//                                     }
//                                 ]
//                                 }
//                             ]
//                             },  
//                         ]
//                     },
                    
//                 ]
//                 }
//         ]
//         }
//     }

//     return JSON.stringify(bodyDataTableJSON)
// }

// exports.formatJiraComment = (jiraCommentURL, eventInfo) => {
//     // Takes the event info from Calendly POST request and formats it into the body of Jira comment
//     // Can send either list format or table format (preferred)

//     var bodyDataJSON = {
//         "body" : {

//         "version": 1,
//         "type": "doc",
//         "content": [
//             // Header
//           {
//             "type": "paragraph",
//             "content": [
//               {
//                 "type": "text",
//                 "text": "Calendly Event Updated ",
//                 "marks": [
//                     {
//                         "type": "strong"
//                     }
//                 ]
//               },
//             ]
//           },
//           // Event URI
//           {
//             "type": "paragraph",
//             "content": [
//               {
//                 "type": "text",
//                 "text": "Event URI: "
//               },
//               {
//                 "type": "text",
//                 "text": `${eventInfo.uri}`,
//                 "marks" : [
//                     {
//                         "type": "link",
//                         "attrs": {
//                             "href": `${eventInfo.uri}`,
//                             "title": "Calendly Event"
//       }
//                     }

//                 ]
//               }
//             ]
//           },
//           // Event Name
//           {
//             "type": "paragraph",
//             "content": [
//               {
//                 "type": "text",
//                 "text": "Name: ",
//                 "marks": [
//                     {"type": "strong"}
//                 ]
//               },
//               {
//                 "type": "text",
//                 "text": `${eventInfo.name}`
//               }
//             ]
//           },
//           // Date
//           {
//             "type": "paragraph",
//             "content": [
//               {
//                 "type": "text",
//                 "text": "Date: ",
//                 "marks": [
//                     {"type": "strong"}
//                 ]
//               },
//               {
//                 "type": "text",
//                 "text": `${eventInfo.start_time}`
//               }
//             ]
//           },
//           // User name
//           {
//             "type": "paragraph",
//             "content": [
//               {
//                 "type": "text",
//                 "text": "User: ",
//                 "marks": [
//                     {"type": "strong"}
//                 ]
//               },
//               {
//                 "type": "text",
//                 "text": `${eventInfo.event_memberships[0].user_name}`
//               }
//             ]
//           }
//         ]
//         }
//       }

//     var bodyDataTableJSON = {
//     "body": {
//         "version": 1,
//         "type": "doc",
//         "content": [
//             {
//                 "type": "table",
//                 "attrs": {
//                     "isNumberColumnEnabled": false,
//                     "layout": "default"
//                 },
//                 "content": [

//                     // Title
//                     {
//                         "type": "tableRow",
//                         "content": [
//                             // Cell 1
//                             {
//                             "type": "tableCell",
//                             "attrs": {},
//                             "content": [
//                                 {
//                                 "type": "paragraph",
//                                 "content": [
//                                     {
//                                     "type": "text",
//                                     "text": "Calendly Event Booked",
//                                     "marks": [
//                                         {
//                                             "type": "strong"
//                                         }
//                                     ]
//                                     }
//                                 ]
//                                 }
//                             ]
//                             }
//                         ]
//                         },


//                     // Row 1 - Event Name
//                     {
//                     "type": "tableRow",
//                     "content": [
//                         // Cell 1
//                         {
//                         "type": "tableCell",
//                         "attrs": {},
//                         "content": [
//                             {
//                             "type": "paragraph",
//                             "content": [
//                                 {
//                                 "type": "text",
//                                 "text": "Event Name"
//                                 }
//                             ]
//                             }
//                         ]
//                         },
//                         // Cell 2
//                         {
//                         "type": "tableCell",
//                         "attrs": {},
//                         "content": [
//                             {
//                             "type": "paragraph",
//                             "content": [
//                                 {
//                                 "type": "text",
//                                 "text": `${eventInfo.name}`
//                                 }
//                             ]
//                             }
//                         ]
//                         },
//                     ]
//                     },

//                     // Row 2 - Event URI
//                     {
//                         "type": "tableRow",
//                         "content": [
//                             // Cell 1
//                             {
//                             "type": "tableCell",
//                             "attrs": {},
//                             "content": [
//                                 {
//                                 "type": "paragraph",
//                                 "content": [
//                                     {
//                                     "type": "text",
//                                     "text": "Event URL"
//                                     }
//                                 ]
//                                 }
//                             ]
//                             },
//                             // Cell 2
//                             {
//                             "type": "tableCell",
//                             "attrs": {},
//                             "content": [
//                                 {
//                                 "type": "paragraph",
//                                 "content": [
//                                     {
//                                     "type": "text",
//                                     "text": `${eventInfo.uri}`,
//                                     "marks" : [
//                                         {
//                                             "type": "link",
//                                             "attrs": {
//                                                 "href": `${eventInfo.uri}`,
//                                                 "title": "Calendly Event"
//                                             }
//                                         }
                    
//                                     ]
//                                     }
//                                 ]
//                                 }
//                             ]
//                             },  
//                         ]
//                     },

//                     // Row 3 - Date
//                     {
//                         "type": "tableRow",
//                         "content": [
//                             // Cell 1
//                             {
//                             "type": "tableCell",
//                             "attrs": {},
//                             "content": [
//                                 {
//                                 "type": "paragraph",
//                                 "content": [
//                                     {
//                                     "type": "text",
//                                     "text": "Date"
//                                     }
//                                 ]
//                                 }
//                             ]
//                             },
//                             // Cell 2
//                             {
//                             "type": "tableCell",
//                             "attrs": {},
//                             "content": [
//                                 {
//                                 "type": "paragraph",
//                                 "content": [
//                                     {
//                                     "type": "text",
//                                     "text": `${new Date(eventInfo.start_time).toUTCString()}`
//                                     }
//                                 ]
//                                 }
//                             ]
//                             },  
//                         ]
//                     },

//                     // Row 4 - User Name
//                     {
//                         "type": "tableRow",
//                         "content": [
//                             // Cell 1
//                             {
//                             "type": "tableCell",
//                             "attrs": {},
//                             "content": [
//                                 {
//                                 "type": "paragraph",
//                                 "content": [
//                                     {
//                                     "type": "text",
//                                     "text": "Username"
//                                     }
//                                 ]
//                                 }
//                             ]
//                             },
//                             // Cell 2
//                             {
//                             "type": "tableCell",
//                             "attrs": {},
//                             "content": [
//                                 {
//                                 "type": "paragraph",
//                                 "content": [
//                                     {
//                                     "type": "text",
//                                     "text": `${eventInfo.event_memberships[0].user_name}`
//                                     }
//                                 ]
//                                 }
//                             ]
//                             },  
//                         ]
//                     },
                    
//                 ]
//                 }
//         ]
//         }
//     }

//     return JSON.stringify(bodyDataTableJSON)
// }

exports.addJiraComment = async (req, res) => {

  res.status(200);

    // Receive Calendly POST request body
    var calendlyBody = await req.body;
    res.send(calendlyBody);
    console.log(calendlyBody);
    console.log(calendlyBody.payload.questions_and_answers[0].answer);

    // Parse request body for Jira ticket number and event details
    var ticketID;

    // There may be a more future-proof way of doing this by searching the array
    // for the actual question text rather than relying on the index.
    if(calendlyBody.payload.questions_and_answers.length == 1) {
      ticketID = calendlyBody.payload.questions_and_answers[0].answer;
    } else if (calendlyBody.payload.questions_and_answers.length == 2) {
      ticketID = calendlyBody.payload.questions_and_answers[1].answer;
    }


    if(ticketID) {
      var eventInfo = calendlyBody.payload;
      const jiraCommentURL = `https://jaredbacatest.atlassian.net/rest/api/3/issue/${ticketID}/comment`;

      // Format Jira comment

      // Buleted List layout
      var bodyDataJSON = {
          "body" : {

          "version": 1,
          "type": "doc",
          "content": [
              // Header
            {
              "type": "paragraph",
              "content": [
                {
                  "type": "text",
                  "text": "Calendly Event Updated ",
                  "marks": [
                      {
                          "type": "strong"
                      }
                  ]
                },
              ]
            },
            // Event URI
            {
              "type": "paragraph",
              "content": [
                {
                  "type": "text",
                  "text": "Event URI: "
                },
                {
                  "type": "text",
                  "text": `${eventInfo.uri}`,
                  "marks" : [
                      {
                          "type": "link",
                          "attrs": {
                              "href": `${eventInfo.uri}`,
                              "title": "Calendly Event"
        }
                      }

                  ]
                }
              ]
            },
            // Event Name
            {
              "type": "paragraph",
              "content": [
                {
                  "type": "text",
                  "text": "Name: ",
                  "marks": [
                      {"type": "strong"}
                  ]
                },
                {
                  "type": "text",
                  "text": `${eventInfo.name}`
                }
              ]
            },
            // Date
            {
              "type": "paragraph",
              "content": [
                {
                  "type": "text",
                  "text": "Date: ",
                  "marks": [
                      {"type": "strong"}
                  ]
                },
                {
                  "type": "text",
                  "text": `${eventInfo.start_time}`
                }
              ]
            },
            // User name
            {
              "type": "paragraph",
              "content": [
                {
                  "type": "text",
                  "text": "User: ",
                  "marks": [
                      {"type": "strong"}
                  ]
                },
                {
                  "type": "text",
                  "text": `${eventInfo.event_memberships[0].user_name}`
                }
              ]
            }
          ]
          }
        }

      
      // Table layout
      var bodyDataTableJSON = {
      "body": {
          "version": 1,
          "type": "doc",
          "content": [
              {
                  "type": "table",
                  "attrs": {
                      "isNumberColumnEnabled": false,
                      "layout": "default"
                  },
                  "content": [

                      // Title
                      {
                          "type": "tableRow",
                          "content": [
                              // Cell 1
                              {
                              "type": "tableCell",
                              "attrs": {},
                              "content": [
                                  {
                                  "type": "paragraph",
                                  "content": [
                                      {
                                      "type": "text",
                                      "text": "Calendly Event Booked",
                                      "marks": [
                                          {
                                              "type": "strong"
                                          }
                                      ]
                                      }
                                  ]
                                  }
                              ]
                              }
                          ]
                          },


                      // Row 1 - Event Name
                      {
                      "type": "tableRow",
                      "content": [
                          // Cell 1
                          {
                          "type": "tableCell",
                          "attrs": {},
                          "content": [
                              {
                              "type": "paragraph",
                              "content": [
                                  {
                                  "type": "text",
                                  "text": "Event Name"
                                  }
                              ]
                              }
                          ]
                          },
                          // Cell 2
                          {
                          "type": "tableCell",
                          "attrs": {},
                          "content": [
                              {
                              "type": "paragraph",
                              "content": [
                                  {
                                  "type": "text",
                                  "text": `${eventInfo.scheduled_event.name}`
                                  }
                              ]
                              }
                          ]
                          },
                      ]
                      },

                      // Row 2 - Event URI
                      {
                          "type": "tableRow",
                          "content": [
                              // Cell 1
                              {
                              "type": "tableCell",
                              "attrs": {},
                              "content": [
                                  {
                                  "type": "paragraph",
                                  "content": [
                                      {
                                      "type": "text",
                                      "text": "Event URL"
                                      }
                                  ]
                                  }
                              ]
                              },
                              // Cell 2
                              {
                              "type": "tableCell",
                              "attrs": {},
                              "content": [
                                  {
                                  "type": "paragraph",
                                  "content": [
                                      {
                                      "type": "text",
                                      "text": `${eventInfo.event}`,
                                      "marks" : [
                                          {
                                              "type": "link",
                                              "attrs": {
                                                  "href": `${eventInfo.event}`,
                                                  "title": "Calendly Event"
                                              }
                                          }
                      
                                      ]
                                      }
                                  ]
                                  }
                              ]
                              },  
                          ]
                      },

                      // Row 3 - Date
                      {
                          "type": "tableRow",
                          "content": [
                              // Cell 1
                              {
                              "type": "tableCell",
                              "attrs": {},
                              "content": [
                                  {
                                  "type": "paragraph",
                                  "content": [
                                      {
                                      "type": "text",
                                      "text": "Date"
                                      }
                                  ]
                                  }
                              ]
                              },
                              // Cell 2
                              {
                              "type": "tableCell",
                              "attrs": {},
                              "content": [
                                  {
                                  "type": "paragraph",
                                  "content": [
                                      {
                                      "type": "text",
                                      "text": `${new Date(eventInfo.scheduled_event.start_time).toUTCString()}`
                                      }
                                  ]
                                  }
                              ]
                              },  
                          ]
                      },

                      // Row 4 - User Name
                      {
                          "type": "tableRow",
                          "content": [
                              // Cell 1
                              {
                              "type": "tableCell",
                              "attrs": {},
                              "content": [
                                  {
                                  "type": "paragraph",
                                  "content": [
                                      {
                                      "type": "text",
                                      "text": "Username"
                                      }
                                  ]
                                  }
                              ]
                              },
                              // Cell 2
                              {
                              "type": "tableCell",
                              "attrs": {},
                              "content": [
                                  {
                                  "type": "paragraph",
                                  "content": [
                                      {
                                      "type": "text",
                                      "text": `${eventInfo.scheduled_event.event_memberships[0].user_name}`
                                      }
                                  ]
                                  }
                              ]
                              },  
                          ]
                      },
                      
                  ]
                  }
          ]
          }
      }


      // POST comment to Jira api
      fetch(jiraCommentURL, {
          method: 'POST',
          headers: {
              "Authorization": "Basic " + base64.encode(ATLASSIAN_API_USERNAME + ":" + ATLASSIAN_API_KEY),
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(bodyDataTableJSON)
        })
          .then(response => {
            console.log(
              `Response: ${response.status} ${response.statusText}`
            );
            return response.text();
          })
          .then(text => console.log(text))
          .catch(err => console.error(err));
      }
}