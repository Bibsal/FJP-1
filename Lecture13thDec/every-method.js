// Question :-- is there a valid candidate in the below array(condition is :- gender should be a Female and age b/w 30 to 40 only)
// 'every' method me ak bhi value k liye false hua tho it'll return false, and if all values are ture then only it returns true.
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
let anotherArr = newArray.every(function(v, i, oarr) {
    if(v.age >= 30 && v.age <= 40) {
        return true;
    } else {
        return false;
    }
});

console.log(anotherArr);

// Another way in one line by chaining the two methods, i.e first filtering and then using the every method
// let newArray = arr.filter(v => v.gender == "F").every(fc => fc.age >= 30 && fc.age <= 40);
// consloe.log(newArray);