let arr = [
    "Sumeet Malik",
    "Amit Malik",
    "Inderjit Malik",
    "Daya Malik",
    "Kunal Malik",
    "Aryan Malik"
];

// Use the map function to produce the below output
//["S.M.", "A.M.", "I.M.", "D.M.", "K.M.", "A.M."];

let finalOutput = arr.map(function(v, i, oarr) {
    let breakingArrBySpace = v.split(" ");
    // console.log(breakingArrBySpace);
    let fstNme = breakingArrBySpace[0];
    let lstNme = breakingArrBySpace[1];
    
    let fnfc = fstNme[0];
    let lnfc = lstNme[0];
    return fnfc+"."+lnfc+".";
})
console.log(finalOutput);