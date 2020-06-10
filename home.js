let fruit = 'banana,apple,mango,blackberry';
let moreFruits = 'banana\napple';

console.log(moreFruits);
console.log(fruit.length),
console.log(fruit.indexOf('n'));
console.log(fruit.slice(2, 6));
console.log(fruit.replace('ban', 'mo'));
console.log(fruit.replace('app', 'mo'));
console.log(fruit.toUpperCase(fruit));
console.log(fruit.split(','));

let fruits = ['banana', 'apple', 'mango', 'blackberry'];
fruits = new Array('banana', 'apple', 'mango', 'blackberry');


fruits[0] = 'pear';
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log(fruits.join(' - '));
console.log(fruits.pop(),fruits);

let vegetables = ['ugwu', 'edikaiko', 'waterleaf'];
let allGroceries = fruits.concat(vegetables);
console.log(allGroceries);
console.log(allGroceries.slice(1, 4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());

let someNumbers = ['1,90, 100, 4, 5, 8, 20, 26, 44, 81'];
console.log(someNumbers.sort());
console.log(someNumbers.sort(function(a, b) {return a-b}));

var age = 45
if ( (age >= 18) && (age <= 35) ) {
    status = 'target demo';
    console.log(status);
} else {
    status = 'not my audience';
    console.log(status);
}

// Switch statements
// differentiate between weekend and week days

switch (5) {
    case 0:
        text = 'weekend';
        break;
    case 5:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;
    default:
        text = 'weekday'
}

console.log(text);
