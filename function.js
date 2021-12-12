// Non primitive -> array, objects, function
// function definition
function sayHi(param) {
    console.log("Hello from sayHi")
    console.log("param received", param);
    let rval = Math.random();
    return rval;
}

// function call
sayHi(10);
sayHi("Hello");
let rval = sayHi([1, 2, 3, 4, 5]);
console.log("rval", rval);