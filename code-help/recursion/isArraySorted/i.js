
const arr = [4, 4, 4, 5]
const isArraySorted = (arr, l) => {
   if (l === 0 || l === 1) {
      return true
   }
   if (arr[l] < arr[l - 1]) {
      return false
   } else {
      return isArraySorted(arr.slice(0, l), l - 1)

   }
}
console.log(isArraySorted(arr, arr.length - 1))