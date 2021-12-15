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

let Name = arr.map(function(name) {
    let SplittedNames = name.split(" ");
    let FirstName = SplittedNames[0];
    let LastName = SplittedNames[1];
    return (FirstName[0]+"."+LastName[0]+".");
})
console.log(Name);



// let Name = arr.map(name => name.split(" "));
// console.log(Name);



