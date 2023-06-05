// const arr = [4, 6, 8, 2, 10]
const arr = [1, 4 , 5 , 3]

const getArraySum = (arr, s) => {
   if (s === 0) {
      return 0
   }
   if (s === 1) {
      return arr[0]
   }
   console.log(arr);
   return (arr[0] + getArraySum(arr.slice(1), arr.slice(1).length))
}
console.log(getArraySum(arr, arr.length));