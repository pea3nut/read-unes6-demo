var p =new Proxy({},{
    getPrototypeOf(){
        return null;
    },
    setPrototypeOf(){
        console.log('setPrototypeOf');
        return true;
    }
});

console.log(p.__proto__);
p.__proto__ =null;

