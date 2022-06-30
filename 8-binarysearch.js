//time: O(logn)
//space: O(1)
function binarySearch(arr, n) {
  let start = 0;
  let end = arr.length;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] == n) return mid;
    else if (arr[mid] > n) end = mid;
    else if (arr[mid] < n) start = mid;
  }
}

console.log(binarySearch([2, 4, 5, 6, 8, 10], 8));
console.log(binarySearch([2, 4, 5, 6, 8, 10], 10));
console.log(binarySearch([2, 4, 5, 6, 8, 10], 2));
