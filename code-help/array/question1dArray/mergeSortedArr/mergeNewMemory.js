//! failed in leetcode if ask do not create new memory => assignment operator not work here

const arr = [1, 2, 3, 0, 0, 0]
const arrOne = [2, 5, 6]
const merge = (nums1, m, nums2, n) => {
   nums1 = nums1.filter(num => num !== 0)//! object.seal may they have used 
   nums2 = nums2.filter(num => num !== 0)
   m = nums1.length
   n = nums2.length
   // //
   let mergeArr = []
   let i = 0
   let j = 0
   while (i < m && j < n) {
      if (nums1[i] > nums2[j]) {
         mergeArr.push(nums2[j++])
      } else {
         mergeArr.push(nums1[i++])
      }
   }
   while (i < m) {
      mergeArr.push(nums1[i++])
   }
   while (j < n) {
      mergeArr.push(nums2[j++])
   }
   // console.log(mergeArr);
   nums1 = mergeArr
   console.log(nums1);

}
console.log(merge(arr, arr.length, arrOne, arrOne.length));