// Non primitive -> array, objects, function
// function definition
function sayHi(parameterJobhiTypeKaPassKarSakteHaiJSmae) {
    console.log("Hello from sayHi")
    console.log("param received", parameterJobhiTypeKaPassKarSakteHaiJSmae);
    let rval = Math.random();
    return "returned "+ rval;
}

// function call
sayHi(10);
sayHi("Hello");
let rval = sayHi([1, 2, 3, 4, 5]);
console.log("rval", rval);