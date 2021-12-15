let arr = [10, 20, 30, 40, 50];
// reduce is used to shorten any work, like here we'll do the sum of numbers of the array
// it is same like map, but here we pass 4 parameters i.e pv, cv, ci, oarr (previous value, current value, current index, original array)
// and since we dont have a previous value so it'll consider the 
let sum1 = arr.reduce(function(pv, cv, ci, oarr) {
    console.log(pv + " - " + cv + " - " + ci);
    return pv + cv;
})
console.log(sum1);

let sum2 = arr.reduce(function(pv, cv, ci, oarr) {
    console.log(pv + " - " + cv + " - " + ci);
    return pv + cv;
} ,150);     // if you want to pass a previous value by yourself then you can pass it at the end of callback function ,like I have done here(i.e I've passed 150 as my previous index PI)
console.log(sum2);