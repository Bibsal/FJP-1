/*  ::---SPLICE
(method) Array<number>.splice(start: number, deleteCount: number, ...items: number[]): number[] (+1 overload)
splice, Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

@param start — The zero-based location in the array from which to start removing elements.

@param deleteCount — The number of elements to remove.

@param items — Elements to insert into the array in place of the deleted elements.
*/ 

let arr = [10, 20, 30, 40, 50];

let na = arr.splice(2, 2, 300, 400, 500);

displayArray(arr); // 10 20 300 400 500 50
displayArray(na); // 30 40

function displayArray(arr){
    console.log(arr + " = " + arr.length);
}