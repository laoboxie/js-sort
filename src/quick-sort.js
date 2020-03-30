/*
  时间复杂度  O(n*logn)
  空间复杂度  O(1)
*/

const until = require("./until");
const validateParams = until.validateParams;
const defaultCompare = until.defaultCompare;
const swap = until.swap;
const getRandomIntInclusive = until.getRandomIntInclusive;

function quickSort(arr, compare) {
  validateParams(arr, compare);
  compare = compare || defaultCompare;
  let len = arr.length;
  const partition = partitionFast;
  helper(arr, 0, len - 1);
  return arr;

  function helper(arr, left, right) {
    if (left >= right) return;
    let p = partition(arr, left, right);
    helper(arr, left, p - 1);
    helper(arr, p + 1, right);
  }

  function partitionFast(arr, left, right) {
    swap(arr, left, getRandomIntInclusive(left, right));
    // [left + 1, i) <= arr[p]    (j, right] >= arr[p]
    let p = left;
    let i = left + 1;
    let j = right;
    while (i <= j) {
      while (i <= right && compare(arr[p], arr[i]) > 0) {
        i++;
      }
      while (j >= left + 1 && compare(arr[p], arr[j]) < 0) {
        j--;
      }
      if (i <= j) {
        swap(arr, i, j);
        i++;
        j--;
      }
    }
    swap(arr, p, j);
    return j;
  }

  function partitionRandom(arr, left, right) {
    // 优化：若是有序数组，直接取第一个元素，时间复杂度会退化为O(n^2)，
    // 所以最好随机取一个数作为基准值
    swap(arr, left, getRandomIntInclusive(left, right));
    // [left + 1, j] < arr[p]   [j + 1, i) > arr[p]
    let p = (j = left);
    for (let i = j + 1; i <= right; i++) {
      if (compare(arr[p], arr[i]) > 0) {
        swap(arr, j + 1, i);
        j++;
      }
    }
    swap(arr, p, j);
    return j;
  }

  function partitionSlow(arr, left, right) {
    // [p+1, j]<arr[p] [j+1, i)>arr[p]
    let p = (j = left);
    for (let i = j + 1; i <= right; i++) {
      if (compare(arr[p], arr[i]) > 0) {
        swap(arr, j + 1, i);
        j++;
      }
    }
    swap(arr, p, j);
    return j;
  }
}

function quickSort3(arr, compare) {
  validateParams(arr, compare);
  compare = compare || defaultCompare;
  let len = arr.length;
  helper(arr, 0, len - 1);
  return arr;

  function helper(arr, left, right) {
    if (left >= right) return;
    let p = partition(arr, left, right);
    helper(arr, left, p.lt);
    helper(arr, p.gt, right);
  }

  function partition(arr, left, right) {
    swap(arr, left, getRandomIntInclusive(left, right));
    // [left+1, lt]<arr[p]  [lt+1, i)==arr[p]   [gt, right]>arr[p]
    let p = left;
    let lt = left;
    let gt = right + 1;
    let i = left + 1;
    while (i < gt) {
      let c = compare(arr[p], arr[i]);
      if (c > 0) {
        swap(arr, lt + 1, i);
        lt++;
        i++;
      } else if (c < 0) {
        swap(arr, i, gt - 1);
        gt--;
      } else {
        i++;
      }
    }
    swap(arr, p, lt);
    return {
      lt: lt - 1,
      gt: gt
    };
  }
}

module.exports = quickSort3;
