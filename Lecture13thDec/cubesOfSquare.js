// to return cubes of sqaures <= 1000
let arr = [ 
    5, 
    83, 
    24,
    67, 
    71, 
    12, 
    24, 
    7
];

let sqarr = arr.filter(v => v * v <= 1000).map(v => v * v * v);
console.log(sqarr);