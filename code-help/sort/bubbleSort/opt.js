const nums = [4, 5, 1, 3, 8]

const bubbleSort = nums => {
  for (let i = 0; i < nums.length - 1; i++) {
    let swapped = false
    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        ;[nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
        swapped = true
      }
    }
    if (!swapped) {
      return nums
    }
  }
  return nums
}
console.log(bubbleSort(nums))
