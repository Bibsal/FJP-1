// find the intersection between the below two arrays
let arr1 = [10, 20, 40, 79, 80, 99]
let arr2 = [80, 10, 24, 100, 79, 99, 149, 240, 80];

let intersectedArray = arr1.filter(v => arr2.includes(v));
console.log(intersectedArray);       // here the intersected array will be printed i.e [10, 79, 80, 99]

console.log(arr2.includes(100));     // true as 100 is present in arr2
console.log(arr2.includes(420));     // false as 420 is not present in arr2