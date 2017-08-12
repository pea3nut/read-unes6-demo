class A{
    say(){
        console.log(A);
    };
};

var B =A;
A =null;

var a =new B();
a.say();