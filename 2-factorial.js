//Given a intiger N return its factorial value

const input = 1;
// time: O(n)
//space: O(1)
function findFacto(n) {
  let temp = 1;
  for (let i = n; i > 0; i--) {
    temp = temp * i;
  }

  return temp;
}

console.log(findFacto(input));
