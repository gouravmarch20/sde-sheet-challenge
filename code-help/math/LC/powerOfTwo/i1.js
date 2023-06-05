function isPowerOfTwo (number) {
  if (number <= 0) {
    return false // Numbers less than or equal to 0 are not powers of 2
  }

  console.log(number & number - 1);
//   return (number & (number - 1)) === 0
}

// Example usage
console.log(isPowerOfTwo(16)) // true
// console.log(isPowerOfTwo(10)) // false
// console.log(isPowerOfTwo(0)) // false
