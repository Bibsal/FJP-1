let arr2d = [
    [10, 50, 70, 80, 90, 100, 30, 60],
    [11, 50, 75, 85, 90, 100, 34, 60],      // 50, 90, 100, 60
    [10, 51, 70, 80, 90, 100, 30, 60],      // 90, 100, 60
    [11, 50, 75, 85, 92, 100, 34, 60],      // 100, 60
    [10, 50, 70, 80, 90, 100, 30, 60],      // 100, 60
]

let IntersectionIn2D = arr2d.reduce(function(pv, cv, ci, oarr) {
    console.log(pv, " *** ", cv)
    let intersection = pv.filter(v => cv.includes(v));
    return intersection;
})
console.log(IntersectionIn2D);