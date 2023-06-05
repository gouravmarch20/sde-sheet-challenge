//**  two sorted array in ascending order find the intersection

const arr = [1, 2, 2, 5, 8, 9]
const arr1 = [2, 2, 5, 9]
/**   
 // ? a loop end 
  - case 1 >> arr[i] > arr[j]
  j++
  - case 2 >> arr[i] ===   arr1[j]
  j++
  i++
  - case 3 >> arr[i] < arr1[j] //* must 
 i++
 
 */
const intersection = (nums1, nums2) => {
  let i = 0
  let j = 0
  const result = []
  while (i < nums1.length && j < nums2.length) {
    //! && => both iterations completed
    if (nums1[i] === nums2[j]) {
      result.push(nums1[i])
      i++
      j++
    } else if (nums1[i] < nums2[j]) {
      i++
    } else {
      j++
    }
  }
  return [...new Set(result)]
}
console.log(intersection(arr, arr1))
