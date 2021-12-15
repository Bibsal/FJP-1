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


// indexOf :- (method) Array<number>.indexOf(searchElement: number, fromIndex?: number): number
/*Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

@param searchElement — The value to locate in the array.

@param fromIndex — The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
*/
let yahamila = array.indexOf("bishal",0);   
console.log(yahamila);   // here it'll print -1 as it wont get any bishal like this(bishal) while travelling/searching for the index of the value that is passed in the parameter, so it prints -1
let yahamila = array.indexOf("Bishal",0);
console.log(yahamila);   // here it'll print 2 as it'll start searching from 0 as passed in the parameter and at index 2 it'll get Bishal present there so it'll give us that index i.e 2 here

