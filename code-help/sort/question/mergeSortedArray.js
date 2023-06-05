// * merge to array in array third sort on the same time
// const nums1 = [1]
// const m = 0
// const nums2 = [1]
// const n = 1
nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
var merge = function (nums1, m, nums2, n) {
  let n1Counter = 0
  let n2Counter = 0
  let arr = [] //*
  let k = 0

  while (n1Counter < m && n2Counter < n) {
    if (nums1[n1Counter] > nums2[n2Counter]) {
      arr[k] = nums2[n2Counter]
      k++
      n2Counter++
    } else {
      arr[k] = nums1[n1Counter]
      k++
      n1Counter++
    }
  }
  while (n1Counter < m) {
    arr[k] = nums1[n1Counter]
    k++
    n1Counter++
  }
  while (n2Counter < n) {
    arr[k] = nums2[n2Counter]
    k++
    n2Counter++
  }
  return arr
}

console.log(merge(nums1, m, nums2, n))
