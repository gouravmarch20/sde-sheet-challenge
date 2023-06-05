
const arr = [1, 2, 11, 5]
const isArraySorted = (arr, s) => {
   if (s === 0 || s === 1) {
      return true
   }
   if (arr[0] > arr[1]) {
      return false
   } else {
      return isArraySorted(arr.slice(1), arr.slice(1).length)

   }
}
console.log(isArraySorted(arr, arr.length))