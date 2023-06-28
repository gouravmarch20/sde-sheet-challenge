const rotateArr = (nums, k) => {
  const arr = []
  for (let i = 0; i < nums.length; i++) {
    const temp = (i + k) % nums.length
    arr[temp] = nums[i]
  }
  console.log(arr);
//   return arr
}
console.log(rotateArr([1, 2, 3, 4, 5, 6, 7], 3))
