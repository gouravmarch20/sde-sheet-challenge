const arr = [3 , 1 , 2]
const merge = (arr, s, e) => {
   console.log('yu');
   let m = Math.floor((s + e) / 2)
   // creating 2 array , length of both array are
   let len1 = m - s + 1//  index start with 0 so + 1
   let len2 = e - m
   //
   let first = []
   let second = []
   let mainArrayIndex = s
   //
   for (let i = 0; i < len1; i++) {
      first[i] = arr[mainArrayIndex++]
   }
   mainArrayIndex = m + 1;

   for (let i = 0; i < len2; i++) {
      second[i] = arr[mainArrayIndex++];
   }

   //merge 2 array into sort way
   let index1 = 0
   let index2 = 0
   mainArrayIndex = s
   while (index1 < len1 && index2 < len2) {
      if (first[index1] < second[index2]) {
         arr[mainArrayIndex++] = first[index1++]
      } else {
         arr[mainArrayIndex++] = second[index2++]
      }
   }
   while (index1 < len1) {
      arr[mainArrayIndex++] = first[index1++]
   }
   while (index2 < len2) {
      arr[mainArrayIndex++] = second[index2++]
   }

}
const mergeSort = (arr, s, e) => {
   if (s >= e) {
      return;
   }
   let m = Math.floor((s + e) / 2)

   //left 
   mergeSort(arr, s, m)
   //right 
   mergeSort(arr, m + 1, e)//m1 : iterate till end 
   //merge
   merge(arr, s, e)
   //
   // console.log(arr)

}
mergeSort(arr, 0, arr.length - 1)
console.log(arr);