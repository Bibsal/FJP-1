// shift removes 1 value from the front while pop used to remove from end/back 
// shift returns the removed value same like pop used to do

let arr = [20, 30, 80, 100, 40];
displayArray(arr);

let rv = arr.shift();
displayArray(arr);
console.log(rv);

function displayArray(arr){
    console.log(arr + " = " + arr.length);
}