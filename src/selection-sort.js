function selectionSort(arr, compare) {
  compare = compare ? compare : defaultCompare;
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
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

module.exports = selectionSort