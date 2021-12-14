// Rearrange Array So that all even elements are at front and all odd elements are at back(use push, pop, unshift, shift)

let arr = [10,20,13,43,63,67,77,80,99];
let odd = [];
let even = [];

let i = 0;
while(arr.length > 0) {
    let val = arr.shift();
    if(val % 2 == 0) {
        even.push(val);
    } else {
        odd.push(val);
    }
}

// concat :- Combines two or more arrays. This method returns a new array without modifying any existing arrays.
arr = even.concat(odd);
displayArray(arr);
displayArray(odd);
displayArray(even);


function displayArray(arr) {
    console.log(arr + " = " + arr.length);
}

// let arr = [1,2,3,4,5,6]


// let evenCount = 0;
// let oddCount = 0;
// let i=0;
// while(i+evenCount<arr.length-oddCount){
    
//     if(arr[i]%2==0){
//         evenCount+=1;
//     }
//     else{
//         arr.push(arr.shift());
//         oddCount++;
//     }
// }
// console.log(arr);