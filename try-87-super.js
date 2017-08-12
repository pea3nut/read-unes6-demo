class A{
    say(){
        console.log('It\'s A#say.');
    };
};
class B extends A{
    say(){
        console.log('It\'s B#say.');
    };
    run(){
        this.say();
        super.say();
    };
};

var b =new B;
b.run.call({
    say(){
        console.log('call');
    }
});


console.log('===');


var obj ={
    say(){
        console.log('It\'s obj.say.');
    },
    run(){
        this.say();
        super.say();
    }
};

Object.setPrototypeOf(obj,{
    say(){
        console.log('It\'s proto.say.');
    },
});

obj.run();