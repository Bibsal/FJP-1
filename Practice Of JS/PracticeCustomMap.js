Array.prototype.myMap = function(callback) {       // custom is used to make a function inside an array   
    let res = [];

    for(let i = 0; i < this.length; i++) {
        let val = this[i];
        let rv = callback(val, i, this);
        res.push(rv);
    }
    return res;
}
let arr = [2,7,9,13,99];
let square = arr.myMap(v => v * v);
console.log(square);