// Print cubes of those number whose cubes are less than 10000

let arr = [11, 36, 99, 10, 77, 26, 5, 49];

// One Way :- 
let cubesArr = arr.map(v => v * v * v)
let cubes = cubesArr.filter(v => v < 10000);
console.log(cubesArr);
console.log(cubes);

// Another way :-
let cubes1 = arr.map(v => v * v * v).filter(v => v <= 10000);
console.log(cubes1);