Array.prototype.meraFilter = function(callback) {
    let res = [];

    for(let i = 0; i < this.length; i++) {
        let val = this[i];
        let rv = callback(val, i, this);
        
        if(rv == true) {
            res.push(rv);
        }
    }
    return res;
}

let arr = [
    {
        gender: 'F',
        age: 60
    },
    {
        gender: 'M',
        age: 70
    },
    {
        gender: 'F',
        age: 29
    },
    {
        gender: 'F',
        age: 40
    },
    {
        gender: 'M',
        age: 25
    }
]

let filtering = arr.meraFilter(v => v.gender == 'F');
console.log(filtering);