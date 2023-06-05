const arr = [3, 8, 33, 2, 1]
const bubbleSort = (arr, n) => {

   // base case
   if (arr.length === 0) {
      return []
   }
   if (n === 1) {
      return
   }

   // n -1 >> already compare 1 step ahead ===> i+1
   for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
      }
   }
   bubbleSort(arr, n - 1)
   return arr
}

console.log(bubbleSort(arr, arr.length));