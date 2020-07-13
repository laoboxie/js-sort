/*
  时间复杂度  O(n^2)
  空间复杂度  O(1)
  是否稳定    是
  原理：每次都将目标元素插入到排好序的队列中
  
  插入排序和选择排序的时间复杂度是一样的，
  不过由于插入排序在与前一个元素比较时，若不符合条件就提前结束内层循环，
  所以插入排序的效率可以比选择排序的效率要高。
  不过，insertionSortSlow 版本的插入排序会比选择排序效率低，
  原因是因为 insertionSortSlow 每次比较符合条件都会通过 swap 进行交换元素，
  如果改为 insertionSort 版本，每次比较不是交换，而是前一个元素直接覆盖当前元素，
  则效率会比选择排序高。

  插入排序非常适合近乎有序的数组，若数组本来就有序，则时间复杂度会变为O(n)，这将比很多高级排序算法效率更高。
*/

const until = require("./until");
const validateParams = until.validateParams;
const defaultCompare = until.defaultCompare;
const swap = until.swap;

function insertionSort(arr, compare) {
  validateParams(arr, compare);
  compare = compare || defaultCompare;
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    let target = arr[i];
    let j;
    for (j = i; j > 0; j--) {
      if (compare(arr[j - 1], target) > 0) {
        arr[j] = arr[j - 1];
      } else {
        break;
      }
    }
    arr[j] = target;
  }
  return arr;
}

function insertionSortSlow(arr, compare) {
  validateParams(arr, compare);
  compare = compare || defaultCompare;
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    for (let j = i; j > 0; j--) {
      if (compare(arr[j - 1], arr[j]) > 0) {
        swap(arr, j - 1, j);
      } else {
        break;
      }
    }
  }
  return arr;
}

module.exports = insertionSort;
