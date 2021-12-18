// array declare
// let arr = [];
let array = [1, 2, 3, 4, 5];
console.log(array);
console.log(array.length);
let i = 0;
while (i < array.length) {
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

// SLICE :- It returns a -->*copy*<-- of a section/part of an array from start index to the end index(ak naya copy bnata hai, original array par kam nahi karta, while splice directly original array par kam karta hai)
array.slice(2, 4);
console.log(array);          // this will print total array as slice makes a copy of the array and works on it so in the above line no copies are made and here we're printing the original array
let tutahuavalues = array.slice(2, 4);
console.log(tutahuavalues);   // here it'll print [3,4] as it'll print from 2nd index till 4 - 1 = 3 i.e till 3rd index.
let partOfArray = array.slice(3);
console.log(partOfArray);           // here it'll print everything starting from index 3 till the end, as passing single parameter means from thet parameter till the end index..

// SPLICE :- WORK'S DIRECTLY IN THE ORIGINAL ARRAY, it's work is that it Removes elements from an array and, if necessary or if the value is passed for inserting, then inserts new elements in their place, returning the deleted elements(deleted elements ko return karta hai). 
// Deletion using splice
array.splice(2, 3, "My", "Name:-");       // here we deleted the elements(3,4 and 5) as we had passed 3 as argument which means delete 3 elements from the given index i.e 2 which is given and lastly also inserted My , Name in the array as we passed those arguments too in the splice method 
console.log(array);
// Insertion using splice
array.splice(2, 0, "Bishal", "Prasad", "Keshri");  // here we've passed 0 that means there are zero elements to be deleted so koi element delete nahi hoga and baki passed values will be inserted form index 2 that has been passed
console.log(array);


// indexOf :- (method) Array<number>.indexOf(searchElement: number, fromIndex?: number): number
/*Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

@param searchElement — The value to locate in the array.

@param fromIndex — The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
*/
let yahamila = array.indexOf("bishal", 0);   // indexOf("what to search", from which index to start searching)
console.log(yahamila);   // here it'll print -1 as it wont get any bishal like this(bishal) while travelling/searching for the index of the value that is passed in the parameter, so it prints -1
let yahamiladusra = array.indexOf("Bishal", 1);   // indexOf("what to search", from which index to start searching, so here as i passed 1 so it won't search the value at 0th index and will only start searching from the 1st index or the index that has been passed)
console.log(yahamiladusra);   // here it'll print 2 as it'll start searching from 0 as passed in the parameter and at index 2 it'll get Bishal present there so it'll give us that index i.e 2 here

