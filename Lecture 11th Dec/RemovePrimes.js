let arr = [1,34,7,6,17,9,971,13,69];

// REMOVE PRIMES
for(let i = arr.length - 1; i >= 0; i--) {
    let val = arr[i];
    let isAPrimeNo = IsPrime(val);
    if(isAPrimeNo == true) {
        arr.splice(i, 1);
    } 
}

displayArray(arr);

function displayArray(arr) {
    console.log(arr + " = " + arr.length);
}

function IsPrime(val) {
    for(let div = 2; div * div <= val; div++) {
        if(val % div == 0) {
            return false;
        }
    }
    return true;
}

