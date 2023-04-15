const isPowerOfTwo = (num) => {
  if (num < 1) {
    return true;
  }
  while (num > 1) {
    if (num % 2 !== 0) {
      return false;
    }
    num = num / 2;
  }
  return true;
};

console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(1 ));
