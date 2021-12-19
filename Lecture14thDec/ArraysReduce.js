/*   Reduce function :-
Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

@parameter callbackfn — A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

@parameter initialValue — If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
*/ 

let arr = [10, 20, 30, 40, 50];
// reduce is used to shorten any work, like here we'll do the sum of numbers of the array
// it is same like map, but here we pass 4 parameters i.e pv, cv, ci, oarr (previous value, current value, current index, original array)
// and since we dont have a previous value so it'll consider the 0th index value as first value/previous value(pv), and for passing the previous value manually by ourselves
let sum1 = arr.reduce(function (pv, cv, ci, oarr) {
    console.log(pv + " - " + cv + " - " + ci);
    return pv + cv;
})
console.log(sum1);

// here we've passed the pv(previous value) manually -->> it is passed at the end before closing normal bracket(here we've passed 120 as previous value)
let sum2 = arr.reduce(function (pv, cv, ci, oarr) {
    console.log(pv + " - " + cv + " - " + ci);
    return pv + cv;
}, 120);     // if you want to pass a previous value by yourself then you can pass it at the end of callback function ,like I have done here(i.e I've passed 150 as my previous index PI)
console.log(sum2);


let MultiplicationOwnPractice = arr.reduce(function(pv, cv, ci, oarr) {
    console.log(pv + " - " + cv + " at index " + ci);
    return pv - cv;
})
console.log(MultiplicationOwnPractice)