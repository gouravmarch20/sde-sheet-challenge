const findFibonacciNo = n => {
  if (n <= 1) {
    return n;
  }

  const first = findFibonacciNo (n - 1);
  const second = findFibonacciNo (n - 2);

  return first + second;
};
console.log (findFibonacciNo (4));
