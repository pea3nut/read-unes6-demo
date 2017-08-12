var num1 =Math.pow(2,53);
var num2 =Math.pow(2,53)+1;


console.log(num1);
console.log(num2);

console.log(num1 ===num2);
console.log(Math.pow(2,53) ===Math.pow(2,53)+1);
console.log(num1+1 ===num1);

console.log('===');

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.isSafeInteger(num1));
console.log(Number.isSafeInteger(num1-1));
console.log(Number.isSafeInteger(Math.pow(2,53)));
