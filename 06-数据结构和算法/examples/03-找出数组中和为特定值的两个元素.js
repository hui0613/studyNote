/**
 * 给定一个数组，和一个数值，在数组中找出所有和为该数值的两个数组合
 *
 * 例：
 * [1,2,3,4,7,6] 9
 * [2,7] [3,6]
 */

/**
 *  思路：
 * 1.暴力解法：使用嵌套循环
 * 2.
 */

var twoSum = function (nums, target) {
  let index = 0,
    temp = 0,
    ans = [];
  for (let i = 0; i < nums.length; i++) {
    temp = target - nums[i];
    console.log(temp);
    index = nums.indexOf(temp);
    //   console.log(index);
    if (index >= 0 && index != i) {
      ans.push(i);
      ans.push(index);
      return ans.sort();
    }
  }
};

console.log(twoSum([-1, -2, -3, -4, -5], -8));
