// QUESTION ::-- Print All SubArrays Of An Array

let arr = [10,20,30,40,50];

for(let i = 0; i < arr.length; i++) {                     // O(n)
    for(let j = i + 1; j <= arr.length; j++) {            // O(n)
        let subArr = arr.slice(i, j);                     // O(n) for arr.slice()
        console.log(subArr);
    }
}                   // Therefore the time complexity here in this program is O(n3) {big O of n cube}