// 1.1 Read data from a source : cricinfo worldcup 2019 (axios)
// 1.2 Process data : Get all teams (jsdom)
// 1.3 Write processed data in excel : Match results per team in their own sheet (excel4node)
// 1.4 Create Folders : One for each team (fs)
// 1.5 Write Files : PDF file for scorecard of each match in relevant folder (pdf lib)

//---------------------------------------------------------------------------------------------------------------

// first download html using axios, then 
// extract information using jsdom, now
// convert matches to teams, then 
// save teams to excel using excel4node, and at last
// create folders and save pdf using pdf-lib

//---------------------------------------------------------------------------------------------------------------

// Now we need to install all the libraries to be used and import them in our program using require() function

//---------------------------------------------------------------------------------------------------------------

// npm init -y
// npm install minimist 
// npm install axios
// npm install jsdom
// npm install excel4node
// npm install pdf-lib

//---------------------------------------------------------------------------------------------------------------

// TO RUN THIS PROGRAM -->>>  node CricinfoExtracter.js --excelFile=Worldcup.csv --dataFolder=worldcup --source=https://www.espncricinfo.com/series/icc-cricket-world-cup-2019-1144415/match-results

// TU HI NIRANKAR , Let's Start

let minimist = require("minimist");
let axios = require("axios");
let jsdom = require("jsdom");
let excel4node = require("excel4node");
let pdflib = require("pdf-lib");
let fs = require("fs");
let path = require("path");

let args = minimist(process.argv);
// console.log(args.source);           //This was just to check whether hamara arguments sahi sae print hua ki nahi
// console.log(args.dataFolder);
// console.log(args.excelFile);

// browser => url to html (browser ne url sae http request banaya jiske badle me server ne html bhaja in http response)(So this http is just a protocol/way to get the data)
let responseKaPromise = axios.get(args.source);
responseKaPromise.then(function (response) {          //Yaha response milega html nahi
    let html = response.data;                  // ab since html us response k data me bhara para hai so yaha hame html mil jaiyega and it'll be assigned to html variable here
    // console.log(html);    //You can print the html for verification ki axios ne hame source link wala page ka html la kar diya ya nahi

    let dom = new jsdom.JSDOM(html);       //Creating a dom(Document Object Model)(it is a tree of the html code)(basically makes easy for developers to have direct access over the tags)
    let document = dom.window.document;    //Now as we've made a dom of the html code, so here we've assigned it to the document variable and with this we can directly access any tag of the html page/code
    console.log(document.title);           // An example on how we access via the document of the dom(Here we've used the above feature and printed the title of the cricinfo webpage)(It prints --->>> ICC Cricket World Cup - Cricket Schedules, Updates, Results | ESPNcricinfo.com)
}) 