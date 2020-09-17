var readline = require('readline');
const { stat } = require('fs');
const { type } = require('os');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on('line',function (line) {
  let num = +line
  if (num <= 2) {
    console.log(`${num}/${num}`)
  } else {
    let sum = 0
    for (let i = 2; i < num; i++) {
      let temp = i
      let j = 0
      for (j = 1; temp < num; j++) {
        temp *= i
      }
      sum += j
    }
    console.log(`${sum}/${num - 2}`)
  }

});
