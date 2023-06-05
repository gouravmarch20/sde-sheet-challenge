
const arr = [0]
const arrOne = [1]

const merge = (nums1, m, nums2, n) => {
   let k = m + n - 1//m1 : not think k pointing 
   let i = m - 1
   let j = n - 1
   while (i >= 0 && j >= 0) {
      if (nums1[i] > nums2[j]) {
         nums1[k--] = nums1[i--]
      } else {
         nums1[k--] = nums2[j--]
      }
   }
   while (j >= 0) {
      nums1[k--] = nums2[j--]
   }
   // num1[i] already sort --> so if num2 sorting done we do not need to check 
   console.log(nums1);


}
console.log(merge(arr, 0, arrOne, 1));