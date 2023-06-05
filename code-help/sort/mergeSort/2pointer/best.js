const arr = new Array(30).fill(22)
let count = 0
const merge = (arr, low, mid, high) => {

   // console.log(low, mid, high);
   count++
   console.log(count);
   //**merge two sorted array ==> 
   //? array first : [left , mid]
   //? array second : [mid + 1 , high]
   let left = low
   let right = mid + 1
   let merged = [];
   let mergedIndex = 0

   while (left <= mid && right <= high) {
      if (arr[left] <= arr[right]) {
         merged[mergedIndex++] = arr[left++]
      } else {
         merged[mergedIndex++] = arr[right++]
      }
   }
   while (left <= mid) {
      merged[mergedIndex++] = arr[left++]
   }
   while (right <= high) {
      merged[mergedIndex++] = arr[right++]
   }

   for (let i = low; i <= high; i++) {
      arr[i] = merged[i - low]
   }


}
const mS = (arr, low, high) => {
   if (low === high) {
      return;
   }
   let mid = Math.floor((low + high) / 2)

   //left 
   mS(arr, low, mid)
   //right 
   mS(arr, mid + 1, high)//m1 : iterate till end 
   //merge
   merge(arr, low, mid, high)
   //

}
mS(arr, 0, arr.length - 1)
console.log(arr);