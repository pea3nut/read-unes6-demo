class A{};
A.prototype ={b:2};//严格模式会报错
A.prototype.c =3;

var a =new A();

console.log(a.b);
console.log(a.c);
