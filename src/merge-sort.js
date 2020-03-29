/*
  时间复杂度  O(n*logn)
  空间复杂度  O(n)
*/

const until = require("./until");
const validateParams = until.validateParams;
const defaultCompare = until.defaultCompare;

function mergeSort(arr, compare) {
  validateParams(arr, compare);
  compare = compare || defaultCompare;
  let len = arr.length;
  partion(arr, 0, len - 1);
  return arr;

  function partion(arr, left, right) {
    if (left >= right) {
      // 可优化的点：在 right - left < 常数 时，可更改为插入排序，
      // 在小数据量的排序中，插入排序效率可能更高，原因是时间复杂度的常数级别比较小
      return;
    }
    let middle = parseInt((left + right) / 2);
    partion(arr, left, middle);
    partion(arr, middle + 1, right);
    if (compare(arr[middle], arr[middle + 1]) > 0) {
      // 优化：若 middle , middle+1 这两个元素已经符合条件，则不需要进行 merge
      mergePartion(arr, compare, left, middle, right);
    }
  }
}

function mergeSortBottomUp(arr, compare) {
  // 自底向上的归并排序，也适用于对链表的排序
  validateParams(arr, compare);
  compare = compare || defaultCompare;
  let len = arr.length;
  for (let size = 1; size <= len; size = 2 * size) {
    for (let i = 0; i + size < len; i = i + 2 * size) {
      mergePartion(
        arr,
        compare,
        i,
        i + size - 1,
        Math.min(i + 2 * size - 1, len - 1)
      );
    }
  }
  return arr;
}

function mergePartion(arr, compare, left, middle, right) {
  let temp = arr.slice(left, right + 1);
  let i = left;
  let j = middle + 1;
  for (let k = left; k <= right; k++) {
    if (i <= middle && j <= right) {
      if (compare(temp[i - left], temp[j - left]) > 0) {
        arr[k] = temp[j - left];
        j++;
      } else {
        arr[k] = temp[i - left];
        i++;
      }
    } else if (i <= middle) {
      arr[k] = temp[i - left];
      i++;
    } else if (j <= right) {
      arr[k] = temp[j - left];
      j++;
    }
  }
}

module.exports = mergeSort;
