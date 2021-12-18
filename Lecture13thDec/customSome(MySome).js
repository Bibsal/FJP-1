// Custom Some method is same like custom map or custom filter method, the difference is only that Some method returns a single value(i.e true/false) but does not return an array, while rest of the two(i.e mapp and filter) does return array
Array.prototype.MySome = function (callback) {
    for (let i = 0; i < this.length; i++) {
        let val = this[i];
        let rv = callback(val, i, this);
        if (rv == true) {
            return true;
        }
    }
    return false;
}


// Testing the below code by MySome(i.e the custome Some, i.e made by me)
let arr = [
    { name: "A", age: 14, gender: "M" },
    { name: "B", age: 34, gender: "F" },
    { name: "C", age: 91, gender: "F" },
    { name: "D", age: 37, gender: "M" },
    { name: "E", age: 44, gender: "F" },
    { name: "F", age: 28, gender: "F" },            // just because of this condition being satisfied the some function will return true..
    { name: "G", age: 18, gender: "F" }
];

let isThereAnyValidCandidate = arr.MySome(function (v, i, oarr) {            // here I've used my custom some i.e. MySome
    if (v.gender == 'F' && v.age >= 20 && v.age <= 30) {
        return true;
    } else {
        return false;
    }
})
console.log(isThereAnyValidCandidate);