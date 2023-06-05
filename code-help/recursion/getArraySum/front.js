const arr = [1, 2, 3, 5]
const getArraySum = (arr, index) => {
   if (arr.length === 0) {
      return 0
   }
   if ((arr.length - 1) === index) {
      return arr[index]
   }
   console.log(arr[index]);
   return arr[index] + getArraySum(arr, index + 1)

}
console.log('the result is ', getArraySum(arr, 0));