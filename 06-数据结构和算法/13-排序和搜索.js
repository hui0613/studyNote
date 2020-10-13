/**
 * 冒泡排序
 *
 * @param {*} array
 */
function bubbleSort(array) {
  const { length } = array;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}

/**
 * 优化冒泡排序 1
 * 设置一个变量记录是否发生了数据交换，
 * 若内层循环没有发生交换，则便是整个数组有序，结束函数运行
 *
 */

function bubbleSort1(array) {
  const { length } = array;
  for (let i = 0; i < length; i++) {
    let isSort = true;
    for (let j = 0; j < length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        isSort = false;
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
    if (isSort) {
      return array;
    }
  }
  return array;
}

/**
 * 优化冒泡排序 2
 *
 * 使用一个变量来记录内循环中最后一次发生数据交换的位置，
 * 在此位置之后的所有元素都是已经有序的，
 * 不再进行循环
 */
function bubbleSort2(array) {
  const { length } = array;
  let endPos = 0;
  for (let i = 0; i < length; i++) {
    let isSort = true;
    for (let j = 0; j < endPos; j++) {
      if (array[j] > array[j + 1]) {
        isSort = false;
        endPos = j;
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
    if (isSort) {
      return array;
    }
  }
  return array;
}

/**
 * 找出最小值放在第一位
 *
 * @param {*} params
 */
function selectSort(params) {
  const { length } = params;
  let minIndex;
  for (let i = 0; i < length - 1; i++) {
    // 找出剩余元素中的最小值
    for (let j = i; j < length; j++) {
      if (array[minIndex] < array[j]) {
        minIndex = j;
      }
    }
    [array[minIndex], array[i]] = [array[i], array[minIndex]];
  }
  return array;
}

/**
 * 插入排序
 *
 * @param {*} array
 */
function insertSort(array) {
  const { length } = array;
  let temp;
  for (let i = 0; i < length; i++) {
    let j = i;
    temp = array[i];
    // 将元素插入到合适的位置
    while (j >= 0 && array[j - 1] > temp) {
      array[j] = array[j - 1];
      j--;
    }
    array[j] = temp;
  }
  return array;
}

/**
 *  归并排序主函数
 *
 * 将源数组拆分成较小的数组，并调用用来排序的函数
 */

function margeSort(array) {
  if (array.length > 1) {
    const middle = Math.floor(array.length / 2);
    const left = margeSort(array.slice(0, middle));
    const right = margeSort(array.slice(middle, array.length));

    marge(left, right);
  }
  return array;
}

/**
 * 归并排序：对数组进行排序和合并的函数
 */

function marge(left, right) {
  let i = (j = 0);
  const result = [];
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }
  while (j < right.length) {
    result.push(right[j]);
    j++;
  }
  return result;
}

/**
 *
 * 快速排序
 * @param {*} arr
 */

var quickSort = function (arr) {
  if (arr.length <= 1) {
    return arr;
  }
  var pivotIndex = Math.floor(arr.length / 2);
  var pivot = arr.splice(pivotIndex, 1)[0];
  var left = [];
  var right = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([pivot], quickSort(right));
};

/**
 * 计数排序
 *
 * @param {*} array
 */

function countingSort(array) {
  if (array.length < 2) {
    return array;
  }

  // 获取待排序数组中的最大值，并创建临时数组，临时数组大小为待排序数组的最大值加一（数组索引从零开始）
  let maxValue = Math.max(...array);
  let count = new Array(maxValue + 1);

  for (let i = 0; i < array.length; i++) {
    if (!count[array[i]]) {
      count[array[i]] = 0;
    }
    count[array[i]]++;
  }
  let sortedIndex = 0;

  count.forEach((count, i) => {
    while (count > 0) {
      array[sortedIndex++] = i;
      count--;
    }
  });
  return array;
}

/**
 *
 * 桶排序
 *
 *
 * @param {*}} params
 */
function bucketSort(array) {
  if (array.length < 2) {
    return array;
  }
  const buckets = createBuckets(array, 5);
  return sortBuckets(buckets);
}

/**
 * 桶排序辅助函数
 *
 *  创建桶并将元素放入桶中
 * @param {*} params
 */
function createBuckets(array, bucketSize) {
  let minValue = array[0];
  let maxValue = array[0];
  for (let i = 1; i < array.length; i++) {
    // {4}
    if (array[i] < minValue) {
      minValue = array[i];
    } else if (array[i] > maxValue) {
      maxValue = array[i];
    }
  }
  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1; // {5}
  const buckets = [];
  for (let i = 0; i < bucketCount; i++) {
    // {6}
    buckets[i] = [];
  }
  for (let i = 0; i < array.length; i++) {
    // {7}
    const bucketIndex = Math.floor((array[i] - minValue) / bucketSize); // {8}
    buckets[bucketIndex].push(array[i]);
  }
  return buckets;
}

/**
 * 桶排序辅助函数
 *
 * 对每一个桶中的元素进行排序并合并成一个有序的数组
 * @param {*} buckets
 */
function sortBuckets(buckets) {
  const sortedArray = []; // {9}
  for (let i = 0; i < buckets.length; i++) {
    // {10}
    if (buckets[i] != null) {
      insertSort(buckets[i]); // {11}
      sortedArray.push(...buckets[i]); // {12}
    }
  }
  return sortedArray;
}

console.log(bucketSort([3, 4, 2, 1, 5, 0]));
