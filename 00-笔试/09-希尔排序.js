
/**
 * 
 * 希尔排序
 * 思想：希尔排序也是一种插入排，只是将数组进行分组，在对分别每个分组进行插入排序，
 * 不断的减少每一组的元素个数，直到每一组的元素个数为 1
 * 
 * @param {*} arr 
 */

function hillSort(arr) {
    for (let gap = parseInt(arr.length / 2); gap > 0; gap = parseInt(gap / 2)) {
        // 对每个分组使用插入排序，相当于将插入排序的1换成了 n
        console.log(gap)
        for (let i = gap; i < arr.length; i++) {
            let temp = arr[i];
            let j = i;

            while (j - gap >= 0 && arr[j - gap] > temp) {
                arr[j] = arr[j - gap];
                j -= gap;
            }
            arr[j] = temp;
        }
    }
    return arr
}

console.log(hillSort([2,3,1,54,12,562,45]))