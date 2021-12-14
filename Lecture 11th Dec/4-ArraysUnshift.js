// unshift adds 1 or more values at the front of array, while push used to add values at the last/end of the array
// unshift returns the new length of array same like push does

let arr = [20, 30, 80, 100, 40];
displayArray(arr);

arr.unshift(1000);
displayArray(arr);

arr.unshift(2000, 3000, 4000);
displayArray(arr);

let rv = arr.unshift(5000, 6000);
displayArray(arr);
console.log(rv);

function displayArray(arr){
    console.log(arr + " = " + arr.length);
}