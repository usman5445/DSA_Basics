//Given a intiger N find the first n elements of fibonacci

// time: O(n)
//space: O(n)
function findFibo(n) {
  const start = [0, 1];
  for (let i = 2; i < n; i++) {
    start.push(start[i - 1] + start[i - 2]);
  }
  return start;
}

console.log(findFibo(12));
