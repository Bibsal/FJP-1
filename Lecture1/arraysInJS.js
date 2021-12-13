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

// SLICE :- It returns a copy of a section/part of an array from start index to the end index
array.slice(2,4);        
console.log(array);          // this will print total array as slice makes a copy of the array and works on it so in the above line no copies are made and here we're printing the original array
let tutahuavalues = array.slice(2,4);       
console.log(tutahuavalues);   // here it'll print [3,4] as it'll print from 2nd index till 4 - 1 = 3 i.e till 3rd index.
let partOfArray = array.slice(3);
console.log(partOfArray);           // here it'll print everything starting from index 3 till the end, as passing single parameter means from thet parameter till the end index..

// SPLICE :- WORK'S DIRECTLY IN THE ORIGINAL ARRAY, it's work is that it Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements. 
// Deletion using splice
array.splice(2, 3, "My", "Name:-");
console.log(array);
// Intersion using splice
array.splice(2, 0, "Bishal", "Prasad", "Keshri");
console.log(array);