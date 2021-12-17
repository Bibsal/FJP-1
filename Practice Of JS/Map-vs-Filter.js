let arr = [11, 36, 99, 77, 26, 49];

let mapRes = arr.map(v => v % 2 == 1);
let filterRes = arr.filter(v => v % 2 == 1);

console.log(mapRes);
console.log(filterRes);