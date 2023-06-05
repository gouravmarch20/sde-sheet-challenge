let arr = [3, 2, 1]
const merge = (arr, low, mid, high) => {
   let left = low;
   let right = mid + 1
   let merged = []
   let mIndex = 0
   while (left <= mid && right <= high) {
      if (arr[left] < arr[right]) {
         merged[mIndex++] = arr[left++]
      } else {
         merged[mIndex++] = arr[right++]
      }
   }
   while (left <= mid) {
      merged[mIndex++] = arr[left++]
   }
   while (right < high) {
      merged[mIndex++] = arr[right++]
   }
   console.log(merged);
   // for (let i = low; i <= high; i++) {
   //    arr[i] = merged[i - low]
   // }

}
const mS = (arr, low, high) => {
   // 
   if (low >= high) {
      return
   }
   let mid = Math.floor(low + high / 2)
   mS(arr, low, mid)

   mS(arr, mid + 1, high)
   merge(arr, low, mid, high)

}
console.log(mS(arr, 0, arr.length - 1));
console.log(arr);