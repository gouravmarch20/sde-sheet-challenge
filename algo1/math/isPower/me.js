const isPowerOfTwo = (num) => {
  let newNum = num;

  for (let i = 0; newNum >= 1; i++) {
    if (newNum === 1) {
      return true;
    }
    if (newNum % 2 === 0) {
      newNum = newNum / 2;
      if (newNum === 1) {
        return true;
      }
    } else {
      return false;
    }
  }
};
console.log(isPowerOfTwo(32));
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(5));
//TODO: O(log(n))