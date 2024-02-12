const fetch = require('node-fetch')
const base64 = require('base-64')

const organization = 'https://api.calendly.com/organizations/a98bac4a-ad61-4754-b7ab-27987e72af5d'

let headers = new Headers({
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Authorization": "Bearer " + credentials.calendly_api_token,
    // "Organization": 'https://api.calendly.com/organizations/a98bac4a-ad61-4754-b7ab-27987e72af5d'
})

const url = `https://api.calendly.com/scheduled_events?organization=${organization}`

fetch(url, {
    method: "GET",
    headers: headers,
    credentials: "include"
})
.then(response => {
    console.log(`${response.status} ${response.statusText}`)
    return response.json()
})
// .then((response) => {response.json()})
.then(json => console.log(json))
.catch((err) => {console.log(err)
})