/*
  时间复杂度  O(n^1.5)
  空间复杂度  O(1)
*/

const until = require("./until");
const validateParams = until.validateParams;
const defaultCompare = until.defaultCompare;
const swap = until.swap;

function shellSort(arr, compare) {
  validateParams(arr, compare);
  compare = compare || defaultCompare;
  let len = arr.length;
  for (let gap = parseInt(len / 2); gap >= 1; gap = parseInt(gap / 2)) {
    for (let i = gap; i < len; i++) {
      let target = arr[i];
      let j;
      for (j = i; j - gap >= 0; j = j - gap) {
        if (compare(arr[j - gap], target) > 0) {
          arr[j] = arr[j - gap];
        } else {
          break;
        }
      }
      arr[j] = target;
    }
  }
  return arr;
}

function shellSortSlow(arr, compare) {
  validateParams(arr, compare);
  compare = compare || defaultCompare;
  let len = arr.length;
  for (let gap = parseInt(len / 2); gap >= 1; gap = parseInt(gap / 2)) {
    for (let i = gap; i < len; i++) {
      for (let j = i; j - gap >= 0; j = j - gap) {
        if (compare(arr[j - gap], arr[j]) > 0) {
          swap(arr, j - gap, j);
        } else {
          break;
        }
      }
    }
  }
  return arr;
}

module.exports = shellSort;
