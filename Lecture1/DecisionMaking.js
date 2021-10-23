// node DecisionMaking.js 11

let args = process.argv;                // process.argv wo hota hai jo hamare commandline sae input hamare program ko la kar deta hai
let n = parseInt(args[2]);

if(n % 2 == 0) {
    console.log("Even :)");
} else {
    console.log("Odd :)");
} 