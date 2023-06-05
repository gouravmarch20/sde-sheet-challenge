let i = 0
let product = 1
function multiply (arr) {
  if (arr.length === 0) {
    return 1
  }
  return arr[arr.length - 1] * multiply(arr.slice(0, arr.length - 1))
}

console.log(multiply([1, 2, 3, 4]))
