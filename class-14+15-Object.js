// Simple Object
var carmeta = {
    make: 'Toyota',
    model: 'Camry',
    year: 2022,
    color: 'Blue',
    mileage: 15000
};
console.log (carmeta['color']);

// Object under Object
var metacar = {
    make: 'Toyota',
    details: {
        model: 'Camry',
        year: 2022,
        color: 'Blue'
    },
    mileage: 15000
};
console.log (metacar['details']['year']);
console.log (metacar['details']['color']);