var obj ={
    a:1,
    b:2,
};
Object.setPrototypeOf(obj,{
    c:3,
});

console.log(Object.keys(obj));
console.log(JSON.stringify(obj));

var keys1 =[];
for(let key in obj)keys1.push(key);
console.log(keys1);

var keys2 =[];
for(let key in Object.assign({},obj))keys2.push(key);
console.log(keys2);