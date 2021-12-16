// Use the map function to produce the below output
// return an array with true and false for females between 20 and 30
// let us say xyz corp wants to hire females between age >= 20 and <= 30

let arr = [
    {
        gender: 'M',
        age: 24
    },
    {
        gender: 'F',
        age: 34
    },
    {
        gender: 'F',
        age: 28
    },
    {
        gender: 'M',
        age: 74
    },
    {
        gender: 'F',
        age: 31
    },
    {
        gender: 'M',
        age: 47
    },
    {
        gender: 'F',
        age: 26
    },
    {
        gender: 'M',
        age: 47
    },
    {
        gender: 'F',
        age: 47
    },
    {
        gender: 'F',
        age: 20
    },
    {
        gender: 'F',
        age: 19
    },
    {
        gender: 'M',
        age: 20
    }
];

/*
// One way of doing is by filter function
// let newArray = arr.filter(f => f.gender == "F").map(f => f.age >= 20 && f.age <= 30);
*/

/*
// Another way to do it
// let newArray1 = arr.map(function(v, i, oarr) {
//     if(v.gender == "F" && v.age >= 20 && v.age <= 30) {
//             return true;
//         } else {
//             return false;
//         }
// })
// console.log(newArray1);
*/

/*
// Another Way To Do The Same Problem 
// let newArray = arr.map(v => 
//     { 
//         return v.gender == "F" && v.age >= 20 && v.age <= 30 
//     });
// console.log(newArray)
*/

/*
// Another way of doing the same problem
let anotherWay = arr.map(v => v.gender == 'F' && v.age >= 20 && v.age <= 30);
console.log(anotherWay);
*/