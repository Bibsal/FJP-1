// Rearrange Array So that all even elements are at front and all odd elements are at back(use push, pop, unshift, shift)

// let arr = [10,20,13,43,63,67,77,80,99];
// let odd = [];
// let even = [];

let arr = [1,2,3,4,5,6]


let evenCount = 0;
let oddCount = 0;
let i=0;
while(i+evenCount<arr.length-oddCount){
    
    if(arr[i]%2==0){
        evenCount+=1;
    }
    else{
        arr.push(arr.shift());
        oddCount++;
    }
}
console.log(arr);