//time: O(n),
//space: O(1)
function linearsearch(arr, n) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == n) return i;
  }
  return -1;
}

console.log(linearsearch([-5, 2, 10, 4, 6], 10));
