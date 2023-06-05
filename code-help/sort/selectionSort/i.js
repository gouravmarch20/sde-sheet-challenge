const nums = [5, 2, 3, 1]

const selectionSort = nums => {
  for (let i = 0; i < nums.length - 1; i++) {
    //  let min = nums[i]
    let minIndex = i
    for (let j = i + 1; j < nums.length; j++) {
      if (arr[minIndex] > nums[j]) {
        //   min = nums[j]
        minIndex = j
      }
    }
    ;[nums[i], nums[minIndex]] = [nums[minIndex], nums[i]]
  }
  return nums
}
console.log(selectionSort(nums))
