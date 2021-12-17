Array.prototype.meraMap = function(callback) {
    let res = [];

    for(let i = 0; i < this.length; i++) {
        let val = this[i];
        let calfnReturn = callback(val, i, this);
        res.push(calfnReturn);
    }
    return res;
}

let arr = [2,5,9,12,19,27,94++];

let sqarr = arr.meraMap(v => v * v);
console.log(sqarr);