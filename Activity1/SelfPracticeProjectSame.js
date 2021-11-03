let minimist = require("minimist");
let axios = require("axios");
let jsdom = require("jsdom");
let excel4node = require("excel4node");
let pdflib = require("pdf-lib");
let fs = require("fs");
let path = require("path");

//RUN node SelfPracticeProjectSame.js --excelFile=Worldcup2019.csv --dataFolder=Worldcup1 --source=https://www.espncricinfo.com/series/icc-cricket-world-cup-2019-1144415/match-results

let args = minimist(process.argv);

let responseKaPromise = axios.get(args.source);
responseKaPromise.then(function(response) {
    let html = response.data;
    //Now we'll create the dom using the jsdom library
    let dom = new jsdom.JSDOM(html);
    let document = dom.window.document;
})