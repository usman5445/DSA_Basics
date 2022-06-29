const input = 1;

function findFacto(n) {
  let temp = 1;
  for (let i = n; i > 0; i--) {
    temp = temp * i;
  }

  return temp;
}

console.log(findFacto(input));
