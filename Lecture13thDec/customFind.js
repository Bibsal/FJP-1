Array.prototype.myFind = function(callback) {
    let oarr = this;
    for(let i = 0; i < oarr.length; i++) {
        let val = oarr[i];
        let rv = callback(val, i, oarr);
        if(rv == true) {
            return val;
        }
    }
    return undefined;
}