Array.prototype.myCustomReduce = function(callback, iv) {
    let oarr = this;
    let pv;
    if(iv == undefined) {
        pv = oarr[0];
        for(let i = 1; i < oarr.length; i++) {
            let cv = oarr[i];
            pv = callback(pv, cv, ci, oarr);
        }
    } else {
        pv = iv;
        for(let i = 0; i < oarr.length; i++) {
            let cv = oarr[i];
            pv = callback(pv, cv, ci, oarr);
        }
    }
    return pv;
}





// My try :-
// Array.prototype.myReduce = function(callback) {
//     let oarr = this;
//     for(let i = 0; i < oarr.length; i++) {
//         if(i == 0) {
//             pv = oarr[i];
//         } else {
//             pv = oarr[i - 1];
//         }
//         cv = oarr[i];
//         let rv = callback(pv, cv, ci, oarr);
//         if(pv >= oarr.length) {
//             pv = pv + cv;
//         }
//     }
// }