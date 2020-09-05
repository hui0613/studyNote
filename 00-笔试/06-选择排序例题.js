/**
 * 
 * 给你一个字符串 s 和一个 长度相同 的整数数组 indices 。
 * 请你重新排列字符串 s ，其中第 i 个字符需要移动到 indices[i] 指示的位置。
 *  返回重新排列后的字符串。
 * 
 * 若有数组时连续的数字，则可以直接使用遍历字符串   res += s[indices.indexOf(i)];
 * 否则使用使用选择排序
 * 
 * @param {*} s 
 * @param {*} indices 
 */


var restoreString = function (s,indices) {
    let ans = s.split("")
    for (let i = 0; i < indices.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < indices.length; j++) {
            if (indices[j] < indices[minIndex]) {
                minIndex = j;
            }
        }
        [indices[i],indices[minIndex]] = [indices[minIndex],indices[i]];
        [ans[i],ans[minIndex]] = [ans[minIndex],ans[i]];
        // ans[minIndex] = 'a'
    }
    return ans.join("")
};

// console.log(restoreString('codeleet',[4,5,6,7,0,2,1,3]))


/**
 * 给定一个数组，判断能否形成一个等差数列
 * 
 * 思路：使用选择排序，每次找出最小时，跟上一次的最小值相减，保留差值用于比较
 * 
 * @param {*} arr 
 */

var canMakeArithmeticProgression = function (arr) {
    let ari = 0
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }

        if (i === 1) {
            ari = arr[minIndex] - arr[0]
        } else if (i > 1) {
            if (arr[minIndex] - arr[i - 1] != ari) {
                return false
            }
        }
        [arr[minIndex],arr[i]] = [arr[i],arr[minIndex]]
    }
    return true
};

console.log(canMakeArithmeticProgression([1,2,4]))