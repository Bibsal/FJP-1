
let arr = [
    {name: "A", age: 14, gender: "M"}, 
    {name: "B", age: 34, gender: "M"}, 
    {name: "C", age: 24, gender: "F"}, 
    {name: "D", age: 44, gender: "F"}, 
    {name: "E", age: 44, gender: "M"}, 
    {name: "I", age: 28, gender: "F"}, 
    {name: "G", age: 36, gender: "M"}, 
    {name: "H", age: 47, gender: "F"}
]

// ages of all the ladies [24, 44, 28, 47]
let lages = arr.filter((v, i, oarr) => v.gender == 'F').map((v, i, oarr) => v.age);
console.log(lages);

/*FILTER'S ::--- 
(method) Array<number>.filter(predicate: (value: number, index: number, array: number[]) => unknown, thisArg?: any): number[] (+1 overload)
Returns the elements of an array that meet the condition specified in a callback function.

@param predicate — A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.

@param thisArg — An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.
*/