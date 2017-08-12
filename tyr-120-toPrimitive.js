var obj =Object.create(null);
obj[Symbol.toPrimitive] =function(hint){
    console.log(hint);
    return '';
};

console.log(String(obj));
console.log(obj+'');
console.log(+obj);