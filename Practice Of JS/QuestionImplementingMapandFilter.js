// Print the ages of all the females present in the array
let arr = [
    { name: "A", age: 14, gender: "M" },
    { name: "B", age: 34, gender: "M" },
    { name: "C", age: 24, gender: "F" },
    { name: "D", age: 44, gender: "F" },
    { name: "E", age: 44, gender: "M" },
    { name: "I", age: 28, gender: "F" },
    { name: "G", age: 36, gender: "M" },
    { name: "H", age: 47, gender: "F" }
]

// One way of doing it is below two lines by chaining in short way the two functions i.e map and filter:-
// let newArray = arr.filter(v => v.gender == 'F').map(v => v.age);
// console.log(newArray);

/*
// Another way of doing it is below :-
let Females = arr.filter(function(v, i, oarr) {
    if(v.gender == "F") {
        return true;
    } else {
        return false;
    }
});

let ladAges = Females.map(function(v, i, oarr) {         // Now above after filtering we get our females in our Females variable, so now we map that Female variable and return their age to the new variable i.e ladAges(ladies ka ages) and lastly print the ladAges variable which holds the array of the ages of Females
    return v.age;
});

console.log(ladAges);
*/

// Now below is the third way to do it where we do chaining in long way of the two methods i.e map and filter
let Females = arr.filter(function (v, i, oarr) {
    if (v.gender == "F") {
        return true;
    } else {
        return false;
    }
}).map(function (v, i, oarr) {
    return "name : "+v.name+" age : "+ v.age;
});

console.log(Females);