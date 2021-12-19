/*  flat :- multi dimension ko tor tor kar single dimension me bna deta hai
The flat() method is used to flatten the array of arrays. 
The process of flatten depends on the depth we want to flattened the array of arrays. 
What this method does is, it takes out the array element from an array of arrays and concat them in the main array. 
it will repeat this process till the depth value i.e passed as a parameter inside the flat method
*/

// let arr = [2, 3 , 4, [5, 5, 7, [2, 4]], 6, 3, [2,4],[], [22, 45, 6]];

// let flattedArray = arr.flat(1);
// console.log(flattedArray);



let arr1 = [10, 20, [30,[50,[70, 80, 90],60],40], 100, [120,[150,[170, 180, 190], 160], 140, 200], 110]

let res1 = arr1.flat(0);       // 0 has been passed so it won't flatten anything
console.log(res1);
// [10, 20, [30,[50,[70, 80, 90],60],40], 100, [120,[150,[170, 180, 190], 160], 140, 200], 110]


let res2 = arr1.flat(1);       // 1 has been passed so it will open the first brackets
console.log(res2);
// [ 10, 20, 30, [50, [ 70, 80, 90 ], 60], 40, 100, 120, [150, [ 170, 180, 190 ], 160], 140, 200, 110 ]


let res3 = arr1.flat(2);       // 2 has been passed so it will open till 2nd bracket
console.log(res3);
// [ 10, 20, 30, 50, [ 70, 80, 90 ], 60, 40, 100, 120, 150, [ 170, 180, 190 ], 160, 140, 200, 110 ]

let res4 = arr1.flat(3);       // 3 has been passed 
console.log(res4);
// [ 10,  20,  30,  50,  70,  80, 90,  60,  40, 100, 120, 150, 170, 180, 190, 160, 140, 200, 110 ]

let res5 = arr1.flat(4);
console.log(res5);
// [ 10,  20,  30,  50,  70,  80, 90,  60,  40, 100, 120, 150, 170, 180, 190, 160, 140, 200, 110 ]

let res6 = arr1.flat(Infinity);           // Now Infinity is passed as parameter of flat, whenever you want to flatten the array totally without knowing it's depth, then we directly use Infinity
console.log(res6);