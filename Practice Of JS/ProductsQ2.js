// return names of all products in uppercase who has price >= 100

let products = [
    { name: "T-Shirt", price: 25 },
    { name: "Headphones", price: 125 },
    { name: "Keyboard", price: 75 },
    { name: "Monitor", price: 200 }
];

let newArr = products.filter(v => v.price >= 100).map(v => v.name.toUpperCase());
console.log(newArr);

let newArr1 = products.filter(function (v, i, oarr) {
    if (v.price >= 100) {
        return true;
    } else {
        return false;
    }
}).map(function (v, i, oarr) {
    return v.name.toLowerCase();
})

console.log(newArr1);


// return names of all products in uppercase who has price >= 100 and lowerCase for price <= 100

let newMapQuestion = products.map(function (v, i, oarr) {
    if (v.price >= 100) {
        return v.name.toUpperCase();
    } else {
        return v.name.toLowerCase();
    }
});
console.log(newMapQuestion);


// New Way :- done if else in same line, using the ternary operater
let oneLineWay = products.map(v => v.price >= 100 ? v.name.toUpperCase() : v.name.toLowerCase());
console.log(oneLineWay);