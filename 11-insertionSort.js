//time: O(n^2),

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      //   console.log(arr);
      if (arr[j] > arr[i]) {
        [arr[j], arr[i]] = [arr[i], arr[j]];
      }
    }
  }
  return arr;
}

console.log(insertionSort([4, 10, 1, 6, 5]));
