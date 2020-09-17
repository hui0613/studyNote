/**
 * 冒泡排序的时间复杂度：
 * 最好 O(n)
 * 最坏 O(n^2)
 * 平均 O(n^2)
 */

/**
 * 正常的冒泡派
 * 
 * @param {*} arr 
 */
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j],arr[j + 1]] = [arr[j + 1],arr[j]]
            }
        }
    }
    return arr
}
// console.log(bubbleSort([12,1,5,2,7,3,8,36]))



/**
 * 冒泡排序优化1 ： 外层循环优化
 * 设置一个标志变量 flag，若进行了数据交换，则设置为 true，每次内层循环结束后，判断 flag,
 * 若 flag为 false，则表示数组已经时有序数组，可以结束循环
 * 
 * @param {*} arr 
 */
function bubbleSort1(arr) {
    for (let i = 0; i < arr.length; i++) {
        let flag = false;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j],arr[j + 1]] = [arr[j + 1],arr[j]]
                flag = true
            }
        }
        if (!flag) {
            return arr
        }
    }
}

// console.log(bubbleSort1([2,4,2,6,1,67,1,8,23]))


/**
 * 冒泡排序优化2：内层循环优化
 * 
 * 设置一个变量，记录内层循环最后进行数据交换的位置，则该位置之后的数组是有序，在一次循环时无需在遍历之后的数据
 * 
 * @param {*} arr 
 */
function bubbleSort2(arr) {
    let k = arr.length,pos = 0
    for (let i = 0; i < arr.length; i++) {
        let flag = false;
        for (let j = 0; j < k; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j],arr[j + 1]] = [arr[j + 1],arr[j]]
                flag = true
                pos = j
            }
        }
        k = pos
        if (!flag) {
            return arr
        }
    }
}