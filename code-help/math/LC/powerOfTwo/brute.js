var isPowerOfTwo = function (n) {
  for (let i = 0; i <= 30; i++) {
    if (n === Math.pow(2, i)) {
      return true
    }
  }
  return false
}
