let arr = [23, 32, 43, 43, 55]
const reverseArr = arr => {
  let arrLength = arr.length
  for (let i = 0; i < arrLength / 2; i++) {
    temp = arr[i]

    arr[i] = arr[arrLength - (1 + i)]
    arr[arrLength - (1 + i)] = temp

  }
}
reverseArr(arr)
console.log(arr)
