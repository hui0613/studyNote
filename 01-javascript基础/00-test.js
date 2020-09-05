function test() {
    console.log(this);
    consol.log("test");
}

var obj = {};
var newFun = test.bind(obj);
newFun();