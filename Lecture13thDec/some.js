// Question :-- is there a valid candidate in the below array(condition :- gender should be a Female and age b/w 20 to 30 only)

let arr = [
    { name: "A", age: 14, gender: "M" },
    { name: "B", age: 34, gender: "F" },
    { name: "C", age: 91, gender: "F" },
    { name: "D", age: 37, gender: "M" },
    { name: "E", age: 44, gender: "F" },
    { name: "F", age: 28, gender: "F" },            // just because of this condition being satisfied the some function will return true..
    { name: "G", age: 18, gender: "F" }
];

let isThereAnyValidCandidate = arr.some(function (v, i, oarr) {
    if (v.gender == 'F' && v.age >= 20 && v.age <= 30) {
        return true;
    } else {
        return false;
    }
})
console.log(isThereAnyValidCandidate);