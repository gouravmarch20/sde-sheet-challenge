const arr = [2, 5, 9, 11, 13]
const target = 13
const binarySearch = (arr, target, s, e, m) => {

   if (s === undefined) {
      s = 0
      e = arr.length - 1
      m = Math.floor((s + e) / 2)
   } else {
      m = Math.floor((s + e) / 2)
   }
   if (s > e) {
      return false
   }
   if (arr[m] === target) {
      return m
   } else if (arr[m] > target) {
      e = m - 1
   } else {
      s = m + 1
   }
   return binarySearch(arr, target, s, e, m)

}

console.log(binarySearch(arr, target));