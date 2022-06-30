function recursivefacto(n) {
  if (n === 0) return 1;
  return n * recursivefacto(n - 1);
}

console.log(recursivefacto(4));
console.log(recursivefacto(5));
console.log(recursivefacto(0));
