// count all primes using reduce
let arr = [51, 23, 37, 44, 73, 82, 97, 41];

let countingPrimes = arr.reduce(function(pv, cv, ci, oarr) {
    let flag = true;

    console.log(pv," ", cv);
    for(let div = 2; div * div <= cv; div++) {
        if(cv % div == 0) {
            flag = false;
            break;
        }
    }
    
    if(flag == true) {
        return pv + 1;
    } else {
        return pv;
    }
},0);

console.log(countingPrimes);
