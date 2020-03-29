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

// 生成一个随机数组
function generateArr(len, min, max) {
  let arr = [];
  for (let i = 0; i < len; i++) {
    let cur = getRandomArbitrary(min, max);
    arr.push(cur);
  }
  return arr;
}

// 生成一个整数数组
function generateIntArr(len, min, max) {
  let arr = [];
  for (let i = 0; i < len; i++) {
    let cur = getRandomIntInclusive(min, max);
    arr.push(cur);
  }
  return arr;
}

// 生成一个有序数组
function generateSortedArr(len, min, max) {
  let arr = [];
  min = min == undefined ? 0 : parseInt(min);
  max = max == undefined ? len : parseInt(max);
  let step = parseInt((max - min) / len);
  for (let i = min; i < len; i = i + step) {
    arr.push(i);
  }
  return arr;
}

// 得到一个两数之间的随机数，[min, max)
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

// 得到一个两数之间的随机整数，[min, max]
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
  validateParams,
  defaultCompare,
  swap,
  generateArr,
  generateIntArr,
  generateSortedArr,
  getRandomIntInclusive
};
