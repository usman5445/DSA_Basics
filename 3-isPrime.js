//Given a intiger N check it is prime number or not

// time: O(n)
//space: O(n)
function isPrime(n) {
  let factors = [];
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      factors.push(i);
    }
  }
  return factors.length == 2;
}

console.log("normal", isPrime(5));
console.log("normal", isPrime(4));
console.log("normal", isPrime(1));

// time: O(n)
//space: O(1)
function isPrimeBetter(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

console.log("better", isPrimeBetter(5));
console.log("better", isPrimeBetter(4));
console.log("better", isPrimeBetter(1));

// time: O(sqrt(n))
//space: O(1)
function isPrimeBest(n) {
  if (n < 2) return false;
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i == 0) return false;
  }
  return true;
}

console.log("best", isPrimeBest(5));
console.log("best", isPrimeBest(4));
console.log("best", isPrimeBest(1));
