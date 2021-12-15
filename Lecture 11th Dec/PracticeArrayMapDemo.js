let arr = [2, 16, 7, 19, 99];

let squareArray = arr.map(function(v, i, oarr) {     // map is a function that takes a callback function and in that callback function we pass 3 parameters
    return v * v;                                    // and for each run of callback map will pass the 3 paramaeters
})                                                   // callback will process the value and index and the array and return a single value, this single value returned by each run of callback will be collected in a new array by map
console.log(squareArray);                            // map returns the new array and so here we printed that array