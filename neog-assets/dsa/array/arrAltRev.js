// reverse array alternate item
const arr = [1, 3, 6, 32, 232, 212]
function alternateRev (arr) {
  for (let i = 0; i < arr.length; i += 2) {
    const temp = arr[i]
    arr[i] = arr[i + 1]
    arr[i + 1] = temp
  }
}
alternateRev(arr)
console.log(arr)
