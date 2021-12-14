// pop removes 1 value from the end 
// pop returns the removed value
// pop works on the original array

let arr = [20, 30, 80, 100, 40];
displayArray(arr);

let rv = arr.pop();
displayArray(arr);    // here since in the above line we used a pop so it changes in the original array so here we'll get 20,30,80,100 as output and 40 will be poped and stored in rv which is printed below
console.log(rv);

function displayArray(arr){
    console.log(arr + " = " + arr.length);
}