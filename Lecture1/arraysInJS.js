// array declare
// let arr = [];
let array  = [1, 2, 3, 4, 5];
console.log(array);
console.log(array.length);
let i = 0;
while(i < array.length) {
    console.log("Elem at idx ", i, " is ", array[i]);
    i++;
}
console.log("---------------------------")
// PUSH, POP, UNSHIFT, SHIFT   :--

// PUSH
// push is used in javascript to add element to the last of the array
array.push("Keshri");
console.log(array);

// POP
// pop is used in javascript to remove element from last of the array
array.pop();
console.log(array);

// UNSHIFT
// unshift is used in javascript to add element at the beginning of the array
array.unshift("Bishal")
console.log(array);

// SHIFT
// shift is used in javascript to remove elements from the beginning of the array
array.shift();
console.log(array);
