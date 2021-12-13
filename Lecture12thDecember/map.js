let array = [10, 20, 30, 40, 50, 60, 70];
let sqarr = array.map(function(v, i, oarr) {
    console.log(v + " @ " + i + " = " + oarr);
    return v * v;
});

console.log(sqarr);
console.log(array);




// Map is itself a function
// Map takes as input a callback function
// The callback fn takes 3 parameter (v, i, oarr)    // v - value , i - index , oarr - original array
// map will call the callback multiple times (once for each value)
// for each run of callback, map will pass v, i and original array to callback
// callback will process the value and index and return a single value
// Single value returned by each run of callback will be collected in a new array by map
// Map returns that new array
// length of returned array is equal to original array


// let arr = [2, 5, 9, 8, 15, 11, 6];
// let sqarr = arr.map(function(v, i, oarr){
//     console.log(v + "@" + i + "=[" + oarr + "]");
//     return v * v;
// });

// console.log(sqarr);
