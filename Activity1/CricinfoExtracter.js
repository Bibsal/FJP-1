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

let minimist = require("minimist");             //this is required to take/read inputs from command line(like we're giving the source etc, so it'll read all the cmd inputs)
let axios = require("axios");                   //this is required to download data from web(Web Scrapping basically) 
let jsdom = require("jsdom");                   //this is used to make the dom of the webpage/html and process the codes/data
let excel4node = require("excel4node");         //this is used to create the excelfile of the processed data
let pdflib = require("pdf-lib");                //this is used to create the pdf file of the data 
let fs = require("fs");                         //basically used to read and write files(here it'll write teams, scores etc in the pdf file)
let path = require("path");                     //used to give the path(here to give the path of the pdf,like in your local disk where have you created the pdf files etc)

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
        match.t1 = teamParas[0].textContent;                                                         // match object k data member (t1 , t2 (team 1 and team 2)) me kon si team ki match hui thi wahi assign kr rhe hai in dono lineeo me
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

        let resultPrinting = matchesKaDivs[i].querySelector("div.status-text > span");       // gone inside the website of cricinfo and inspected where the result is kept and bought it's location here in the argument and since ak match ki sirf ak hi result hogi so we used querySelector and not used querySelectorAll because it would give error
        match.result = resultPrinting.textContent;                                           // and here assigned the text content of the result to the object's data member named result which is in match object(therefore match.result -->> ki match object ke andar ka result) 


        matches.push(match);   // and here pushing the match object to the matches array 

    }
    // console.log(matches);      // now as our data is pushed(i.e currently result is taken and pushed) so we are checking it by printing our matches array 
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // Now as we already have the JSO(JavaScript Object) so we will convert this JSO to JSON by using (JSON.stringify())
    // The reason why we convert JSO to JSON is that because we can only do operations in JSO but cannot save or write it in different files, so to write the objects in different file we convert JSO to JSON first then it'll work
    let matchesKaJSON = JSON.stringify(matches);
    fs.writeFileSync("matches.json", matchesKaJSON, "utf-8");

    // Our main moto here is that we can make single single teams and inside it make all the matches played by that team against other teams, basically summing up all the matches to the particular team(ki india k object k andar hum india k sath kon kon si team ne matches khali hai wo dal sake, and same for other teams too)
    // So for that I'll run a loop and work accordingly by first making a array named teams and loop me we will be calling the function that'll check whether the team are present in the teams array or not
    let teams = [];
    for (let i = 0; i < matches.length; i++) {
        addTeamToTeamsArraIfNotAlreadyThere(teams, matches[i].t1);                 //this line after calling function means ki agar matches ka t1, teams array me nahi hai tho add kardo, and same for the below line too. Because currently teams array is empty and we are creating it to have all the teams differentiated 
        addTeamToTeamsArraIfNotAlreadyThere(teams, matches[i].t2);
    }

    for (let i = 0; i < matches.length; i++) {
        addMatchToSpecificTeam(teams, matches[i].t1, matches[i].t2, matches[i].t1s, matches[i].t2s, matches[i].result);       // we're calling this function taki jis team ka match hua hai wo proper us team k object me chale jai
        addMatchToSpecificTeam(teams, matches[i].t2, matches[i].t1, matches[i].t2s, matches[i].t1s, matches[i].result);       // we're calling this function taki upar tho straight aaur directly hamne us team ko uske object me dal diya but dusra team(opponentTeam) jiske sath match hua tha wo is line ki madad sae apne team k object me chala jaiga
    }

    let teamsKaJSON = JSON.stringify(teams);       // Creating the JSON for writing a new file
    fs.writeFileSync("teams.json", teamsKaJSON, "utf-8");        //New file will be created with name teams.json , and inside it will be present the names of the total no of teams, that we've pushed in the below function (the team name and matches object)

    //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    prepareExcel(teams, args.excelFile);                     // We are calling a function to prepare Excel Sheet for our Teams
    prepareFoldersAndPDFs(teams, args.dataFolder);           // We are calling a function to prepare Folders and inside it pdfs for our Teams

})

function prepareFoldersAndPDFs(teams, dataFolder) {           // function to create folders and pdfs
    if (fs.existsSync(dataFolder) == false) {                  // here we're checking ki agar phle v yaha worldcup folder (jo ham bana rahe hai) pehle sae pari hai tho mat banana, warna agar nahi pari tho banana
        fs.mkdirSync(dataFolder);                             // this is the way we create folder (i.e filesystem library dot makedirectory mkdir(folder name jo runtime me pass karnge))
    }

    for (let i = 0; i < teams.length; i++) {                   // now inside the folders we're creating folders for each team using the teams array dot its team name(so team name kae according )
        let teamKaFolderName = path.join(dataFolder, teams[i].name);
        if (fs.existsSync(teamKaFolderName) == false) {
            fs.mkdirSync(teamKaFolderName);
        }

        for (let j = 0; j < teams[i].matches.length; j++) {                              //creating pdfs for all matches of single single teams, inside all the teams folder
            let match = teams[i].matches[j];
            createMatchScorecardPDF(teamKaFolderName, match);
        }
    }
}

function createMatchScorecardPDF(teamKaFolderName, match) {
    let matchFileName = path.join(teamKaFolderName, match.vs + ".pdf");
    // fs.writeFileSync(matchFileName, "" , "utf-8");
}

function prepareExcel(teams, excelFileNameJoHamneFunctionCallingMeDiyaHai) {                //Function To Prepare Excel Sheet For Our Teams array with different teams
    let wb = new excel4node.Workbook();                                               // This is the way we create a workbook(a file)using our new keyword [new libraryname.Workbook() ] function

    for (let i = 0; i < teams.length; i++) {                                      // Putting loops taki sabhi teams k liye traverse kar k sabhi k liye sheet ban jaigi
        let teamsKaSheet = wb.addWorksheet(teams[i].name);                        // Creating sheet(different page in excel file for different team) with teams array k team ka name...Sheets are created using [ wb(jo ki upar assign kiya hua tha).addWorksheet(kis name sae banana hai)  ]

        //Now we will fill the cells of the excelSheet(1st row me likhnge vs,selfScore,Opp Score, Result, and phir 2nd row sae sari teams k liye inko fill kar dnge, will run loop accordingly)
        teamsKaSheet.cell(1, 1).string("Vs");          //the sheet name dot cell (and row number diya hai like 1, 1 means ki 1st row ki 1st cell me Vs likho, 1,2 means 1st row ki 2nd cell me Self Score likho etc)
        teamsKaSheet.cell(1, 2).string("Self Score");
        teamsKaSheet.cell(1, 3).string("Opp Score");
        teamsKaSheet.cell(1, 4).string("Result");
        for (let j = 0; j < teams[i].matches.length; j++) {
            teamsKaSheet.cell(2 + j, 1).string(teams[i].matches[j].vs);               //Here we are creating cells from 2nd row and we're inputting the values of the vs, selfscore, oppscore, result from teamsarrayKiAkAkteam dot matchesArraykAndar(matches.json)
            teamsKaSheet.cell(2 + j, 2).string(teams[i].matches[j].selfscore);        // 2 + j matlab 2nd row ki j (matlab 0th cell, phir 1st cell, phir 2nd etc etc) because 1st row occupied hogi so 2nd row onwards ham fill krnge
            teamsKaSheet.cell(2 + j, 3).string(teams[i].matches[j].oppScore);
            teamsKaSheet.cell(2 + j, 4).string(teams[i].matches[j].result);
        }
    }

    wb.write(excelFileNameJoHamneFunctionCallingMeDiyaHai);                        // This will write in the updates in excelFile(isiliye argument me filename pass kiye hai)
}

function addMatchToSpecificTeam(teams, homeTeam, oppTeam, ourScore, theirScore, result) {              // We're making this function because we have to fill the matches object inside teams.json file, so we're passing the (teams array , then our homeTeam , then the opponentTeam , then ourScore, then theirScore, and lastly the results)
    let tidx = -1;
    for (let i = 0; i < teams.length; i++) {
        if (teams[i].name == homeTeam) {         //(now if the team in teams array is equal to the homeTeam so it'll go to particular team(according to the team name) and then the teamIndex will be assigned to i)
            tidx = i;
            break;
        }
    }

    let team = teams[tidx];           // now jis v index par jo team ko rakha hua hai usi index pe ham matches object ka data members banaynge(vs, selfscore, oppScore, result) so these data members will be made in matches object
    team.matches.push({
        vs: oppTeam,
        selfscore: ourScore,
        oppScore: theirScore,
        result: result
    })
}


function addTeamToTeamsArraIfNotAlreadyThere(teams, teamName) {
    let tidx = -1;                                    //teamsIndex(teamsArrayKaIndex)
    // loop k andar, checking ki agar match object ka data member(like currently checking name of team here so that we can make objects for different different teams) teams array me present hai tho update the index(at starting teams array empty hogi so koi index update nhi hogi and will take -1 index for that moment)
    for (let i = 0; i < teams.length; i++) {
        if (teams[i].name == teamName) {
            tidx = i;
            break;
        }
    }

    if (tidx == -1) {
        teams.push({
            name: teamName,
            matches: []
        })
    }
}