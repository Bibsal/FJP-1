// If the value will be odd then what will map and filter do
// condition :- v mod 2 == 1  hoga tho map kya krega aaur filter kya krega
let arr = [11, 16, 18, 17, 23, 42, 11, 37];

let MapResult = arr.map(v => v % 2 == 1);
// let MapResult1 = arr.map(function(v) {
//     if(v % 2 == 1) {
//         return true;
//     } else {
//         return false;
//     }
// })

let FilterResult = arr.filter(v => v % 2 == 1);
// let FilterResult1 = arr.filter(function(v) {
//     if(v % 2 == 1) {
//         return v;
//     } 
// })
console.log(FilterResult);