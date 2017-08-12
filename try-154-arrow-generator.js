var arrayLike ={
    [Symbol.iterator]:()=>{
        var p =-1;
        var values =[1,2,3];
        return {
            next:()=>{
                p++;
                return {
                    value:values[p],
                    done :values.length<=p
                };
            },
        };
    },
};

console.log(...arrayLike);