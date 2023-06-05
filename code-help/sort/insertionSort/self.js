//
const insertionSort = arr => {
  let i = 1
  let j = 0
  while (i < arr.length) {
    const temp = arr[i]
    j = i - 1
    while (j >= 0) {
      if (arr[j] > temp) {
        arr[j + 1] = arr[j]
      } else {
        break
      }
      j--
    }
    console.log(arr);
    arr[j + 1] = temp
    i++
  }
  console.log(arr)
}
console.log(insertionSort([10, 1, 7, 4, 8, 2, 11]))
