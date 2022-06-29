// Given a intiger value N check it is a power of 2 or not.

// time: O(logn)
//space: O(1)
function isPowerOfTwo(n) {
  if (n < 1) return false;
  for (let i = n; i > 2; i = i / 2) {
    console.log(i);
    if (i % 2 != 0) return false;
  }
  return true;
}

console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(-2));
