
// like substring
// start is inclusive, end is exclusive

let arr = [10, 20, 30, 40, 50];
let na1 = arr.slice(1, 4); // from 1 to 3 (4 not included)
displayArray(na1);

let na2 = arr.slice(1); // from 1 to end
displayArray(na2);

let na3 = arr.slice(); // the entire array (can be used for cloning)
displayArray(na3);

let na4 = arr.slice(-3, -1); // from -3 to -2
displayArray(na4);

let na5 = arr.slice(-3); // from -3 to end
displayArray(na5);

let na6 = arr.slice(1, -2);
displayArray(na6);

// shallow copies
let o1 = {
    age: 100
};
let o2 = {
    age: 200
};
let o3 = {
    age: 300
}

let anarr = [o1, o2, o3];
displayObjectArray(anarr);

let scopy = anarr.slice();
displayObjectArray(scopy);

scopy[0].age = 110;
displayObjectArray(anarr);
displayObjectArray(scopy);

function displayArray(arr) {
    console.log(arr + " = " + arr.length);
}
function displayObjectArray(arr) {
    let str = "";             // Now as I want to print the values of objects in a single line so we cannot do that with console.log directly as console.log prints in different lines
    // so for printing our object values in same line I've made a empty string and below in loop I've added all the values to the same string, by which we get our decired output i.e printing all the object value in same line.
    for (let i = 0; i < arr.length; i++) {
        str += arr[i].age + ", ";
    }

    console.log(str + ".");
}
