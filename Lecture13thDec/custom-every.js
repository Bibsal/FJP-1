Array.prototype.myCustomEvery = function(callback) {
    let oarr = this;
    for(let i = 0; i < oarr.length; i++) {
        let val = oarr[i];
        let rv = callback(val, i, oarr);
        if(rv == false) {
            return false;
        }
    }
    return true;
}



// Testing myCustomEvery by using it in a code.

let arr = [
    { name: "A", age: 14, gender: "M" },
    { name: "B", age: 34, gender: "F" },
    { name: "C", age: 31, gender: "F" },
    { name: "D", age: 37, gender: "M" },
    { name: "E", age: 32, gender: "F" },
    { name: "F", age: 38, gender: "F" },            
    { name: "G", age: 35, gender: "F" }
];

let newArray = arr.filter(function (v, i, oarr) {
    if (v.gender == 'F') {
        return true;
    } else {
        return false;
    }
})
let anotherArr = newArray.myCustomEvery(function(v, i, oarr) {
    if(v.age >= 30 && v.age <= 40) {
        return true;
    } else {
        return false;
    }
});

console.log(anotherArr);
