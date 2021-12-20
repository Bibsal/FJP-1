let arr2d = [[2, 8, 10], [34], [45, 31, 25, 64, 72, 88], [], [25, 72]];

let breaking2dArray = arr2d.reduce(function(pv, cv, ci, oarr) {
    let concatinatingAll = pv.concat(cv);
    return concatinatingAll;
}, []);

console.log(breaking2dArray);

// Output :-  [2, 8, 10, 34, 45, 31, 25, 64, 72, 88, 25, 72]