// var readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// rl.on('line',function (line) {
//   let nums = line.split('\n')[0]
//   test(+nums)
// });

// function test(nums) {
//   let str = nums.toString(2)
//   let count = 0,
//     res = 0
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == '1') {
//       res++
//     } else {
//       count = Math.max(count,res)
//       res = 0
//     }
//   }
//   console.log(Math.max(count,res))
// }


var name = '213'
function demo() {
  console.log(name)
  let name = 'demo'
}
name = '123'
demo()