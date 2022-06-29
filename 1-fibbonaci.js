const input = 7;
// time: O(n)
//space: O(n)
function findFibo(n) {
  const start = [0, 1];
  for (let i = 2; i < n; i++) {
    start.push(start[i - 1] + start[i - 2]);
  }
  return start[start.length - 1];
}

console.log(findFibo(input));
