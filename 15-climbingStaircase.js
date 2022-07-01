//time: O(n),
function climbingStaircase(steps) {
  const ways = [1, 2];
  for (let i = 2; i <= steps; i++) {
    ways.push(ways[i - 1] + ways[i - 2]);
  }
  return ways[steps - 1];
}

console.log(climbingStaircase(1));
console.log(climbingStaircase(2));
console.log(climbingStaircase(3));
console.log(climbingStaircase(5));
