// object are group of key value pairs
// object -> group of key : value pair
// key : value -> property
// key : function -> method
let cap = {
    name: "Bishal",
    lastName: "Keshri",
    address: {
        city: "Nahi bataunga ;>",
        country: "USA",
    }, 
    age: 22,
    isHumble: true,
    believes: ["almighty","nirankar","gratitude"],
    sayHi: function() {
        console.log("Bishal say's Hi");
    }
};

// How to print the objects and their key value pairs
//GET
// console.log(cap.name);
// console.log(cap.age);
// console.log(cap.isHumble);
// console.log(cap.believes[1]);
// cap.sayHi();    // calling the object function
// SET/UPDATE
console.log("cap :", cap);
cap.age = 23;            // updating objects, like this we can update our objects
cap.isHumble = false;
cap.friends = ["Bibek","Diksha","Parents"];   // adding new key value pair(i.e array here) in our object... so we can even update our object as well as add new key value to object
console.log("cap :", cap);    // directly printing full object with their key value pair

// delete
delete cap.address;
console.log("cap :", cap);
// for in loop
for (let key in cap) {
    console.log(key, " : ", cap[key]);
}

let propKey = "age";
console.log(cap.age);
console.log(cap[propKey]);
console.log(cap["age"]);

