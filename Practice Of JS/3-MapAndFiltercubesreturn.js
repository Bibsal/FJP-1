// return cubes of values whose squares <= 1000
let arr = [5, 83, 24, 67, 71, 12, 25, 7];

let cubesArr = arr.filter(v => v * v <= 1000).map(v => v * v * v);
console.log(cubesArr);