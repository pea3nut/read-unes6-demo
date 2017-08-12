var gen =function*(){
    yield 1;
    yield 2;
};


console.log(gen()[Symbol.iterator] ===gen());
console.log(gen()[Symbol.iterator]()[Symbol.iterator] ===gen()[Symbol.iterator]);

console.log('===');
console.log(...gen());
console.log(...gen()[Symbol.iterator]());
console.log(...gen()[Symbol.iterator]()[Symbol.iterator]());

console.log(Object.getOwnPropertyNames(gen().__proto__.__proto__));