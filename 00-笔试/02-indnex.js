var readline = require("readline");
const { stat } = require("fs");
const { type } = require("os");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let tree = [],
  num = 0,
  lines = 0;
rl.on("line", function (line) {
  // let nums = line.split('\n')[0].split(',').map(e => +e)
  // console.log(getNums(+nums))
  // console.log(getCount(nums))
  // console.log(getIndexSum(nums))
  if (num) {
    lines++;
    let arr = line.split(" ");
    tree[+arr[1]] = +arr[0];
    if (lines === num - 1) {
      // console.log(tree)
      treeDeep();
    }
  } else {
    num = +line.split("\n")[0];
  }
});

function getCount(height) {
  let n = height.length;
  if (n === 0) return 0;
  let res = 0;

  let left_max = [],
    right_max = [];
  //记录左边数组的最大值
  left_max[0] = height[0];
  for (let i = 1; i < n; i++) {
    left_max[i] = Math.max(left_max[i - 1], height[i]);
  }
  console.log(left_max);
  //记录右边数组的最大值
  right_max[n - 1] = height[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    right_max[i] = Math.max(right_max[i + 1], height[i]);
  }
  console.log(right_max);
  //统计每一列的面积之和
  for (let i = 0; i < n; i++) {
    res += Math.min(left_max[i], right_max[i]) - height[i];
  }
  return res;
}

function getIndexSum(nums) {
  // nums = nums.split(',').map(e => +e)
  let newNums = nums.slice(0, -1),
    mark = nums.slice(nums.length - 1),
    resArr = [],
    sum = 0;
  // console.log(newNums,mark)
  for (let i = 0; i < newNums.length - 1; i++) {
    if (newNums[i] > mark) {
      continue;
    }
    for (let j = i + 1; j < newNums.length; j++) {
      if (newNums[i] + newNums[j] == mark) {
        sum += i + j;
      }
    }
  }
  return sum;
}

function getNodeStr(str) {
  str = eval("(" + str + ")");
  let res = [];

  deepGet(str, res);
  let putStr = "[";
  for (let i = 0; i < res.length; i++) {
    if (i == res.length - 1) {
      putStr += '"';
      putStr += res[i];
      putStr += '"';
    } else {
      putStr += '"';
      putStr += res[i];
      putStr += '"';
      putStr += ",";
    }
  }
  putStr += "]";
  console.log(putStr);
}

function deepGet(str, res) {
  let temp = "";
  for (let key in str) {
    if (key === "node") {
      temp = str[key];
    } else if (key === "next") {
      console.log(key + " : " + temp + " : " + str[key].length);
      if (str[key].length > 1) {
        res.push(temp);
        // console.log(str[key])
        for (let i = 0; i < str[key].length; i++) {
          deepGet(str[key][i], res);
        }
      } else {
        deepGet(str[key], res);
      }
    }
  }
}

function treeDeep() {
  let maxDeep = 1;
  for (let i = 1; i < num; i++) {
    let count = 1,
      temp = tree[i];
    while (temp != undefined) {
      count++;
      // console.log("i: " + i + "temp: " + temp)
      maxDeep = Math.max(count, maxDeep);
      temp = tree[temp];
    }
  }
  console.log(maxDeep);
}
