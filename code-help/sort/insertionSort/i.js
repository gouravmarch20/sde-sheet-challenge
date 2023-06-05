
// 
const insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1
    const temp = arr[i]
    for (; j >= 0; j--) {
      //
      if (arr[j] > temp) {
        //
        arr[j + 1] = arr[j]
      } else {
        break
      }
    }
    console.log(arr);
    arr[j + 1] = temp
  }
  return arr
}
console.log(insertionSort([10, 1, 7, 4, 8, 2, 11]))
