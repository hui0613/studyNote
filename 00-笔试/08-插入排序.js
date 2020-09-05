/**
 * 插入排序的思想：将需要排序的元素逐个插入到已经排序的序列钟
 * 
 * @param {*} arr 
 */

function insertSort(arr) {
    // 默认第一个元素时已经排序的，因此从 下标 1 开始遍历
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i];
        let j = i
        while (j >= 0 && arr[j - 1] > temp) {
            // 元素往后移
            arr[j] = arr[j - 1]
            j--
        }
        arr[j] = temp

    }
    return arr
}