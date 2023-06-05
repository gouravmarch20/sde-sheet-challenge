// find duplicate
// TODO: AGAIN
const arr = [3, 12, 3]
function new1 () {
    let ans = 0
  for (let i = 0; i < arr.length; i++) {
    ans = ans ^ arr[i]
  }
  for (let i = 1; i < arr.length; i++) {
    ans = ans ^ i
  }
  return ans
}
console.log(new1());
