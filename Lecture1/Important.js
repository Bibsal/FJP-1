//By default Javascript always takes inputs as strings
//Input will start from index 2 on the command line because index 0 has node and index 1 has the filename and after that only comes the input from index 2.
//Every input in command of JS is taken in string format

// node Important.js 10

let args = process.argv;     // 0       1        2      <-- indices of the below part input
let i = args[2];             //node Important.js 10     <-- 10 will be taken here
console.log(typeof i);       // Here though the input that we've given is 10 but it'll take input as String, 
                             // so  it'll print String here
i = i + 30;                  //so as till now the input that we've given is --> node Important.js 10 <-- and now this 10 will be taken as string
console.log(i);              //so this 10 was added to 30 and also since it was taken as string so it'll be printed as 1030 here
let j = parseInt("200", 10); // and here we are parsing the 200 given to j as string into integer so this 200 will be printed as --> number <-- type in the typeof j statement of line 15
console.log(j);              //200 will be printed here
console.log(typeof j);       // --> number <-- will be printed for integer type input
j = j + 30;                  // so as j was converted / parsed to number so it'll print 230 below after adding 200 + 30 here
console.log(j);              // 230 will be printed here
