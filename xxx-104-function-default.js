
// 我一般这么写
function fn1({a=1,b=2} ={}){
    console.log(a,b);
}

// 书上推荐写成这样
function fn2({a=1,b=2} ={a:1,b:2}){
    console.log(a,b);
}


fn1();
fn2();

