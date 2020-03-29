const until = require("../src/until");
const generateArr = until.generateArr;
const generateSortedArr = until.generateSortedArr;
const generateIntArr = until.generateIntArr;

const selectionSort = require("../src/selection-sort");
const insertionSort = require("../src/insertion-sort");
const bubbleSort = require("../src/bubble-sort");
const shellSort = require("../src/shell-sort");
const mergeSort = require("../src/merge-sort");
const quickSort = require("../src/quick-sort");

function calcTime(fn) {
  let start = new Date();
  fn();
  let end = new Date();
  let time = end - start;
  return time;
}

function test1() {
  // 测试一个有序数组，随机取值优化前的快排在10^4这个数量级的数据会栈溢出（Maximum call stack size exceeded）
  // 优化后的快排，10^7数量级数据所用时间为1300ms，归并排序是330ms，原生sort是7093ms，插入排序是46ms
  // 10^8数量级数据，快排、归并、原生sort、插入排序会内存不足（CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory）
  let data = generateSortedArr(Math.pow(10, 7));
  let time = calcTime(() => {
    // insertionSort(data)
    // mergeSort(data)
    quickSort(data);
    // data.sort((a, b) => {
    //   return a - b;
    // });
  });
  console.log("排序时间：", time, "ms");
}

function test() {
  // 测试大量重复数组
  /*
    10^4: 随机版快排(20ms)
          双路快排(6ms)
    10^5: 随机版快排(Maximum call stack size exceeded)
          双路快排(28ms)
    10^7: 双路快排(1586ms)
          原生sort(2857ms)
  */
  let data = generateIntArr(Math.pow(10, 7), 0, 10);
  let time = calcTime(() => {
    // quickSort(data);
    data.sort((a, b) => {
      return a - b;
    });
  });
  console.log("排序时间：", time, "ms");
}

test();
