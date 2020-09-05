// var name = 'global';
// var obj = {
//     name: 'local',
//     foo: function () {
//         this.name = 'foo';
//     }.bind(global)
// };
// var bar = new obj.foo()
// console.log(bar)
// setTimeout(function () {
//     console.log(1,global.name);   // 最后打印  undefined
// },0);
// console.log(2,bar.name);   // 最先打印 foo

// var bar3 = bar2 = bar;
// bar2.name = 'foo2';
// console.log(3,bar3.name);   //其次打印  foo2


// setTimeout(() => console.log('a'));
// Promise.resolve().then(
//     () => console.log('b')
// ).then(
//     () => Promise.resolve('c').then(
//         (data) => {
//             setTimeout(() => console.log('d'));
//             console.log('f');
//             return data;
//         }
//     )
// ).then(data => console.log(data));

// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     greet() {
//         console.log(`Hi, my name is ${this.name}`);
//     }
//     greetDelay(time) {
//         setTimeout(() => {
//             console.log(`Hi, my name is ${this.name}`);
//         },time);
//     }
// }


var readline = require('readline');
const { type } = require('os');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line',function (line) {
    var num = line.split('\n')[0];
    console.log(fib(num))
});

function fib(n) {
    let fn = [1,1];
    if (n < 2) return 1;
    let i = 2;
    while (i <= n) {
        fn[i] = fn[i - 1] + fn[i - 2]
        i++
    }
    return fn[n]
}
let date = new Date();
console.log(typeof date.getMonth())