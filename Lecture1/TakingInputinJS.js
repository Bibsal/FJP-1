let args = process.argv;
console.log(args);
/* Now the above console will print :--
  'C:\\Program Files\\nodejs\\node.exe',            <-- this is the location of node 
  'C:\\Users\\Bishal Prasad Keshri\\Desktop\\JavaScript\\Lecture1\\TakingInputinJS.js',    <-- this is the location of this code file
  '10'   <-- this is the argument that we've passed 
*/
//  now since we ran this code as --> node TakingInputinJS.js 10 <-- 
// so as it(JS) takes inputs as arguments i.e stored in array so node is stored in index 0, then filename.js is stored in index 1 and 10(i.e the input that we gave) is stored in index 2
// so as we printed whole arguments(i.e args directly) so it printed everything inside the array
//Now if we only want to print the value that we're giving(like 10 here) the we can directly print args[2] i.e the argument at place 2 is to be printed, as argument 0 and 1(i.e node and filename.js) is a compulsion to be typed while running and since we only want the value so we directly print from the 2nd index.
console.log("At 0th index " + args[0]);   //This will directly print the inputted value
console.log("At 0th index " + args[1]);   //This will directly print the inputted value
console.log("At 0th index " + args[2]);   //This will directly print the inputted value
console.log("At 0th index " + args[3]);   //This will directly print the inputted value
console.log("At 0th index " + args[4]);   //This will directly print the inputted value
console.log("At 0th index " + args[5]);   //now since while running we didn't give the value of argument 5 so it will print undefined here
