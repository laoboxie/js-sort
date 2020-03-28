const until = require("./until");
const generateArr = until.generateArr;

const selectionSort = require("../src/selection-sort");
const insertionSort = require("../src/insertion-sort");

const sortArr = [
  { name: "选择排序", fn: selectionSort },
  { name: "插入排序", fn: insertionSort }
];
const greater = function(a, b) {
  return a - b;
};

for (let i = 0; i < sortArr.length; i++) {
  let name = sortArr[i].name;
  let sort = sortArr[i].fn;
  describe(name, () => {
    test("升序", () => {
      let arr = [6, 2, 9, -1, 7, 3, -5, 0, 7, 7.2, 3.0, 7.2];
      let res = arr.slice(0).sort(greater);
      sort(arr);
      expect(arr).toEqual(res);
    });

    test("降序", () => {
      let arr = [-1, 0, 25, -9, 0, 7, -500, -7, 80, 9.0, -7.5, 25.2, 9.0];
      let compare = function(a, b) {
        return b - a;
      };
      let res = arr.slice(0).sort(compare);
      sort(arr, compare);
      expect(arr).toEqual(res);
    });

    test("字符串数组", () => {
      let arr = ["abc", "abcd", "abe", "qw", "abc", "a", "fg"];
      let res = arr.slice(0).sort();
      sort(arr);
      expect(arr).toEqual(res);
    });

    test("对象数组", () => {
      let arr = [
        { value: 2, key: "b" },
        { value: 5, key: "e" },
        { value: 4, key: "d" },
        { value: 1, key: "a" },
        { value: 3, key: "c" }
      ];
      let compare = function(a, b) {
        return a.value - b.value;
      };
      let res = arr.slice(0).sort(compare);
      sort(arr, compare);
      expect(arr).toEqual(res);
    });

    let times = 10;
    while (times > 0) {
      let cur = times;
      times--;
      test(`随机数值 ${cur}`, () => {
        let arr = generateArr(cur * 100, -1 * cur * 100, cur * 100);
        let res = arr.slice(0).sort(greater);
        sort(arr);
        expect(arr).toEqual(res);
      });
    }

    test("空数组", () => {
      let arr = [];
      let res = arr.slice(0).sort(greater);
      sort(arr);
      expect(arr).toEqual(res);
    });

    test("单个元素", () => {
      let arr = [0];
      let res = arr.slice(0).sort(greater);
      sort(arr);
      expect(arr).toEqual(res);
    });

    test("两个元素", () => {
      let arr = [5, 4];
      let res = arr.slice(0).sort(greater);
      sort(arr);
      expect(arr).toEqual(res);
    });

    // test("非法参数 arr", () => {
    //   let arr = null;
    //   sort(arr);
    //   expect(arr).toEqual(arr);
    // });
  });
}
