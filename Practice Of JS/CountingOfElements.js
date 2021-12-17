let arr = [10, 50, 70, 80, 90, 100, 30, 60];
let count = 0;
for(let i = 0; i < arr.length; i++) {
    if(i < arr.length) {
        count++;
    } else {
        return;
    }
}
console.log(count);
