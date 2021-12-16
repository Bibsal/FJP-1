Array.prototype.meraMap(function(callback) {
    let res = [];

    for(let i = 0; i < this.length; i++) {
        let val = this[i];
        calfnReturn = callback(val, i, this);
        res.push(calfnReturn);
    }
    return res;
})