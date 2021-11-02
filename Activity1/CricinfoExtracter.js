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
responseKaPromise.then(function (response) {          //Yaha response milega, html nahi
    let html = response.data;                         // ab since html us response k data me bhara para hai so yaha hame html mil jaiyega and it'll be assigned to html variable here
    // console.log(html);                             //You can print the html for verification ki axios ne hame source link wala page ka html la kar diya ya nahi

    let dom = new jsdom.JSDOM(html);                  //Creating a dom(Document Object Model)(it is a tree of the html code)(basically makes easy for developers to have direct access over the tags)
    let document = dom.window.document;               //Now as we've made a dom of the html code, so here we've assigned it to the document variable and with this we can directly access any tag of the html page/code
    // console.log(document.title);                   // An example on how we access via the document of the dom(Here we've used the above feature and printed the title of the cricinfo webpage)(It prints --->>> ICC Cricket World Cup - Cricket Schedules, Updates, Results | ESPNcricinfo.com)

    let matchesKaDivs = document.querySelectorAll("div.match-score-block");          // Now here we've taken all the divs of the matches using querySelectorAll and passing in the arguments as where the code of matches is present (eg here it was in div with calss match-score-block so we passed div.match-score-block)
    // console.log(matchesKaDivs.length);                                               // Here we're just testing by printing the length and checking whether the no of matches are showing in the length or not

    let matches = [];

    for (let i = 0; i < matchesKaDivs.length; i++) {
        let match = {                     //Creating objects so that we can store our outputs in it (Object in javascript is created inside curly brackets -->> { } )
            t1: "",                      // t1 -->> team 1   vs   t2 -->> team 2  
            t2: "",                      // t2 -->> team 2
            t1s: "",                     // t1s -->> team 1 score
            t2s: "",                     // t2s -->> team 2 score
            result: ""                   // result of the match 
        };


        let teamParas = matchesKaDivs[i].querySelectorAll("div.name-detail > p.name");               // gone inside the website of cricinfo and inspected where the team names are kept and bought it's location here in the argument
        match.t1 = teamParas[0].textContent;
        match.t2 = teamParas[1].textContent;

        let teamScores = matchesKaDivs[i].querySelectorAll("div.score-detail > span.score");          // gone inside the website of cricinfo and inspected where the scores are kept and bought it's location here in the argument
        if (teamScores.length == 2) {                                          // now since some matches have not been played and even some matches had only one innings and match stopped so we dont have scores for those matches so we used if else (i.e agar length 2 hai tho dono innings hua tha so dono ka score hoga so we do that in if(teamScore.length == 2)) 
            match.t1s = teamScores[0].textContent;
            match.t2s = teamScores[1].textContent;
        } else if (teamScores.length == 1) {                                   // and agar 1 innings hua tho uska score krdo assign and dusre innings ko blank print kardo and lastly 
            match.t1s = teamScores[0].textContent;
            match.t2s = "";
        } else {                                                              // agar match nhi hua tho dono score's ki jagha par blank hi assign kar do so that atleast that blank will be shown and baki tho hamne niche results ko print kiya hi hai tho waha sae match ka status pta chal hi jaiga
            match.t1s = "";
            match.t2s = "";
        }

        let resultPrinting = matchesKaDivs[i].querySelector("div.status-text > span");       // gone inside the website of cricinfo and inspected where the result is kept and bought it's location here in the argument
        match.result = resultPrinting.textContent;                                           // and here assigned the text content of the result to the object's data member named result which is in match object(therefore match.result -->> ki match object ke andar ka result) 


        matches.push(match);   // and here pushing the match object to the matches array 

    }
    console.log(matches);      // now as our data is pushed(i.e currently result is taken and pushed) so we are checking it by printing our matches array 
})