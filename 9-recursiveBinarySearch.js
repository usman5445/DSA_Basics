//time: O(logn),

function recusrsiveBinarySearch(arr, n, start, end) {
  let mid = Math.floor((start + end) / 2);
  if (start >= end) return -1;
  if (arr[mid] == n) return mid;
  if (arr[mid] > n) return recusrsiveBinarySearch(arr, n, start, mid - 1);
  else return recusrsiveBinarySearch(arr, n, mid + 1, end);
}

console.log(recusrsiveBinarySearch([2, 4, 5, 6, 8, 10], 8, 0, 5));
console.log(recusrsiveBinarySearch([2, 4, 5, 6, 8, 10], 2, 0, 5));
console.log(recusrsiveBinarySearch([2, 4, 5, 6, 8, 10], 11, 0, 5));
