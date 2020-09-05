/**
 * 直接插入排序
 * 
 * @param {Array} nums 
 * @return {Array} 
 */

function insertSort(nums) {
    //从下标 1 开始，默认 nums[0] 是已经排好序的
    for (let i = 1; i < nums.length; i++) {
        let temp = nums[i],j = i
        while (j - 1 > 0 && temp < nums[j - 1]) {
            nums[j] = nums[j - 1]
            j--
        }
        nums[j] = temp
    }
    return nums
}



/**
 * 希尔排序
 * 
 * @param {*} nums 
 */
function hillSort(nums) {
    // 确定分组的个数
    for (let gap = parseInt(nums.length / 2); gap >= 1; gap = parseInt(gap / 2)) {
        // 对每一个分组进行插入排序
        for (let i = gap; i < nums.length; i++) {
            let temp = nums[i],j = i
            while (j - gap > 0 && nums[j - gap] > temp) {
                nums[j] = nums[j - gap]
                j -= gap
            }
            nums[j] = temp
        }
    }
}


/**
 * 冒泡排序
 * 
 * @param {*} nums 
 */
function bubbleSort(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length - i - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                let temp = nums[j]
                nums[j] = nums[j + 1]
                nums[j + 1] = nums[j]
            }
        }
    }
}


/**
 * 冒泡排序外层优化：
 * 使用一个变量来记录数据是否发生了交换，若没有发生交换，则表示该序列是有序序列，不需要在之后的外层循环，
 * 可以直接结束循环
 * 
 * @param {*} nums 
 */
function bubbleSort(nums) {

    for (let i = 0; i < nums.length; i++) {
        let flag = true;
        for (let j = 0; j < nums.length - 1 - i; j++) {
            if (nums[j] > nums[j + 1]) {
                flag = false;
                [nums[j],nums[j + 1]] = [nums[j + 1],nums[j]]
            }
        }
        if (flag) break
    }
}


/**
 * 冒泡排序内层优化
 * 
 * 使用一个变量来记录内存循环最后一次进行数据交换的位置
 * 在该位置之后的序列都是有序的，不需要在循环，内层循环的以该位置为结束位置
 * 
 * @param {*} nums 
 */
function bubbleSort(nums) {
    let lastIndex = nums.length - 1
    for (let i = 0; i < nums.length; i++) {
        let flag = true,k = lastIndex
        for (let j = 0; j < k; j++) {
            if (nums[j] > nums[j + 1]) {
                flag = false;
                [nums[j],nums[j + 1]] = [nums[j + 1],nums[j]]
                lastIndex = j
            }
        }
        if (flag) break
    }
}


/**
 * 快速排序
 * 
 * 
 * @param {*} nums 
 */

function quickSort(nums,start,end) {
    // 将数组划分成两部分，并返回右边 部分的第一个元素的索引值
    let index = partition(nums,start,end)
    this.quickSort(nums,start,index - 1)
    this.quickSort(nums,index + 1,end)
}


function partition(nums,start,end) {

    // 取第一个元素作为枢纽值
    let pivot = nums[0]

    while (start < end) {
        while (nums[end] > pivot && start < end) {
            end--
        }
        nums[start] = nums[end]
        while (nums[start] < pivot && start < end) {
            start++
        }
        nums[end] = nums[start]
    }
    nums[start] = pivot
    return start
}


/**
 * 简单快速排序
 * 
 * @param {*} nums 
 */

function selectSort(nums) {
    for (let i = 0; i < nums.length; i++) {
        let k = i
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[k]) {
                k = j
            }
        }
        if (k != i) {
            [nums[k],nums[i]] = [nums[i],nums[j]]
        }
    }
}



/**
 * 堆排序
 * 
 * @param {*} nums 
 */

function heapSort(nums) {
    buildMaxHeap(nums);

    console.log("**********")
    //每次循环，将最大的元素和末尾元素进行交换，然后剩下的元素继续构建大顶堆
    for (let i = nums.length - 1; i > 0; i--) {

        [nums[0],nums[i]] = [nums[i],nums[0]]
        adjustMaxHeap(nums,0,i)
    }

    return nums
}


/**
 * 构建大顶堆
 * 
 * @param {*} nums 
 */
function buildMaxHeap(nums) {
    // 获取最后一个非叶子节点
    let iParent = parseInt(nums.length / 2) - 1

    //循环调整每一个子树，使其满足大顶堆的要求
    for (let i = iParent; i >= 0; i--) {
        adjustMaxHeap(nums,i,nums.length)
    }
}


function adjustMaxHeap(nums,index,heapSize) {
    let iMax,iLeft,IRight;
    console.log('adbe',nums)
    while (true) {
        iMax = index;
        iLeft = 2 * index + 1; // 获取左子元素的索引
        IRight = 2 * index + 2; //获取右子元素的索引
        console.log("be",iMax,iLeft,IRight,nums[iMax],nums[iLeft])
        //当左子元素存在并且大于最大值是，更新最大值的索引
        if (nums[iLeft] > nums[iMax] && iLeft < heapSize) {
            iMax = iLeft
        }
        //同理：当右子元素存在并且大于最大值是，更新最大值的索引
        if (nums[IRight] > nums[iMax] && IRight < heapSize) {
            iMax = IRight
        }
        console.log("af",iMax,iLeft,IRight)
        //如果最大值的索引发生个变化，则更新最大值
        if (iMax != index) {
            [nums[iMax],nums[index]] = [nums[index],nums[iMax]]
            index = iMax
            console.log('adaf',nums)
        } else {
            break
        }
    }
}




/**
 * 归并排序
 * 
 * @param {*} nums 
 */
function mergeSort(nums) {
    if (nums.length === 1) {
        return nums
    }

    let mid = parseInt(nums.length >> 1),
        leftNums = nums.slice(0,mid),
        rightNums = nums.slice(mid,nums.length)

    return merge(mergeSort(leftNums),mergeSort(rightNums))
}


function merge(leftNums,rightNums) {
    let result = [],
        il = 0,
        ir = 0;
    while (il < leftNums.length && ir < rightNums.length) {
        //对左右两边的数组进行比较，将较小的元素添加到结果数组中，
        if (leftNums[il] < rightNums[ir]) {
            result.push(leftNums[il++])
        } else {
            result.push(rightNums[ir++])
        }
    }

    // 将剩余的元素添加到结果数组中
    while (il < leftNums.length) {
        result.push(leftNums[il++])
    }
    while (ir < rightNums.length) {
        result.push(rightNums[ir++])
    }
    return result
}




/**
 * 
 * 基数排序
 * 
 * @param {*} nums 
 */

function radixSort(nums) {
    if (nums.length === 1) return nums

    let bucket = [],
        max = Math.max(...nums),
        //获取最大值的长度
        loop = (max + "").length

    //初始化桶
    for (let i = 0; i < 10; i++) {
        bucket[i] = []
    }

    for (let i = 0; i < loopl; i++) {
        for (let j = 0; j < nums.length; i++) {
            //将元素转化成字符串形式
            let str = nums[j] + ''
            //当元素的长度大于 i ，便是当前位不为0，获取当前位的值，将其放置到对应的桶中
            if (str.length >= i) {
                let index = str[str.length - i - 1]
                bucket[index].push(nums[j])
            } else {
                //处理位数不够的情况下，默认高位为0
                bucket[0].push(nums[j])
            }
        }
        nums = []

        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < bucket[i].length; j++) {
                nums.push(bucket[i][j])
            }
            bucket[i] = []
        }
    }
    return nums
}





