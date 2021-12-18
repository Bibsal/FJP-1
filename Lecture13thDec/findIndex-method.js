// Question :-- is there a valid candidate in the below array(condition is :- gender should be a Female and age b/w 30 to 40 only)
// 'findIndex' method me jis bhi value kae liye true hua tho it'll return the index of the first true value, and if no values are true then it returns -1 ..
let arr = [
    { name: "A", age: 14, gender: "M" },
    { name: "B", age: 44, gender: "F" },
    { name: "C", age: 31, gender: "F" },               // here is the first true value according to our condition on isi ka index print hoga i.e index -> 2
    { name: "D", age: 37, gender: "M" },
    { name: "E", age: 32, gender: "F" },
    { name: "F", age: 38, gender: "F" },
    { name: "G", age: 35, gender: "F" }
];

let findindexArr = arr.findIndex(function (v, i, oarr) {
    if (v.gender == 'F' && v.age >= 30 && v.age <= 40) {
        return true;
    } else {
        return false;
    }
});

console.log(findindexArr)