var p =new Proxy({},{
    has(target,key){
        console.log(...arguments);
    },
});

'abc' in p;
Reflect.has(p,'123');