try{
    let arrayLike ={
        0:Promise.resolve('233'),
        length:1,
    };
    Promise.all(arrayLike);
}catch(e){
    console.log('error');
};


var promises =[
    new Promise(function(resolve){
        setTimeout(function(){
            resolve(1)
        },90);
    }),
    new Promise(function(resolve){
        setTimeout(function(){
            resolve(2)
        },10);
    }),
    new Promise(function(resolve){
        setTimeout(function(){
            resolve(3)
        },50);
    }),
];

Promise.all(promises).then(console.log)
