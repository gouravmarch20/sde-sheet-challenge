
const findFibonacciNo = (n) => {
   if (n <= 1) {
      return n
   }
   return (findFibonacciNo(n - 1) + findFibonacciNo(n - 2))

}
console.log(findFibonacciNo(8))