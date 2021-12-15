// Question :-- Return the products with price >= 100 and return their names in uppercase.

let arr = [
    {
        name : "Diksha",
        price: 201,
    },
    {
        name : "Bishal",
        price: 199,
    },
    {
        name : "Toffee",
        price: 50,
    },
    {
        name : "chocolate",
        price: 1000,
    },
    {
        name : "dkbk",
        price: 20,
    }];

    let nayaArray = arr.filter(p => p.price >= 100).map(p => p.name.toUpperCase());
    console.log(nayaArray);



    // Now below print the total array with output with upperCase for >= 100 and lowerCase for <= 100
    
    let forTotalarray = arr.map(p => p.price >= 100 ? p.name.toUpperCase() : p.name.toLowerCase());
    console.log(forTotalarray); 