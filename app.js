//Problem: We need a simple way to look at a user's badge count and JavaScript points
//Solution: Use Node.js to connect to Treehouse's API to get profile information to print out

//Require https module
const https = require('https');
const username = "huckleberry";




//Function to print message to console
function printMessage(username, badgeCount, points){
    const message = `${username} has ${badgeCount} total badge(s) and ${points} points in JavaScript`;
    console.log(message);
}



//Connect to the API URL(https://teamtreehouse.com/username.json)

const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {

//but how do you know when it ends? What? How about it just fucking does?
let body = "";
    //Read the data
    response.on("data", data => body += data.toString());
    //parse the data
    response.on('end', () => console.log(typeof body));
})
/* const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
    

        let body = "";
        //Read the data
        response.on('data', data => {
           body += data.toString();
        });

        response.on('end', () => {
            
            //Parse the data
            console.log(body);
            console.log(typeof body);
        });
        //Print the data
}); */



