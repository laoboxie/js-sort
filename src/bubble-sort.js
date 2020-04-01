/*
  时间复杂度  O(n^2)
  空间复杂度  O(1)
  是否稳定    是
*/

const until = require("./until");
const validateParams = until.validateParams;
const defaultCompare = until.defaultCompare;
const swap = until.swap;

function bubbleSort(arr, compare) {
  validateParams(arr, compare);
  compare = compare || defaultCompare;
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (compare(arr[j], arr[j + 1]) > 0) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

module.exports = bubbleSort;
