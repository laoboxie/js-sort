function isFunction(fn) {
  return Object.prototype.toString.call(fn) === "[object Function]";
}

function validateParams(arr, compare) {
  if (!Array.isArray(arr)) {
    throw new Error("Sorting needs to pass in an array");
  }
  if (compare && !isFunction(compare)) {
    throw new Error("compare shoud be a function");
  }
}

function defaultCompare(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}

function swap(arr, i, j) {
  if (i === j) return;
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

module.exports = {
  validateParams,
  defaultCompare,
  swap
};
