/*
  时间复杂度  O(n^2)
  空间复杂度  O(1)
  是否稳定    否
  原理：每次选择最小的元素，放到已排序的队列尾部，在未排序的队列中重复此操作
*/

const until = require("./until");
const validateParams = until.validateParams;
const defaultCompare = until.defaultCompare;
const swap = until.swap;

function selectionSort(arr, compare) {
  validateParams(arr, compare);
  compare = compare || defaultCompare;
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let frontIdx = i;
    for (let j = i + 1; j < len; j++) {
      if (compare(arr[frontIdx], arr[j]) > 0) {
        frontIdx = j;
      }
    }
    swap(arr, i, frontIdx);
  }
  return arr;
}

module.exports = selectionSort;
