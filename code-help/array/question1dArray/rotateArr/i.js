const rotateArr = (nums, k) => {
  const arr = []
  for (let i = 0; i < nums.length; i++) {
    arr[(i + k) % nums.length - 1] = arr[i]
  }
  console.log(arr)
}
console.log(rotateArr([4, 2, 8, 33]))
