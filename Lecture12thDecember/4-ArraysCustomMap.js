
Array.prototype.myMap = function(cb){
    let oarr = this;
    let res = [];

    for(let i = 0; i < oarr.length; i++){
        let v = oarr[i];
        let rv = cb(v, i, oarr);
        res.push(rv);
    }

    return res;
}

// Map is itself a fn
// Map takes as input a callback fn 
// The callback fn takes 3 parameter (v, i, oarr)
// map fn will call the callback fn multiple times (once for each value)
// for each run of callback, map will pass v, i and original array to callback
// callback will process the value and index and return a single value for each call to it from the map
// Single value returned by each run of callback will be collected in a new array by map
// Map returns that new array
// length of returned array is equal to original array

let arr = [2, 5, 9, 8, 15, 11, 6];
let sqarr = arr.myMap(function(v, i, oarr){
    console.log(v + "@" + i + "=[" + oarr + "]");
    return v * v;
});

console.log(sqarr);
