/* 
   _ _ _ 1 _ _ _
   _ _ 1 2 1 _ _
   _ 1 2 3 2 1 _
   1 2 3 4 3 2 1 
*/
const n = 4
for (let row = 0; row < n; row++) {
  let space1 = n - row - 1
  let counterSpace1 = 0
  let counterNum = 0
  let counterNum2 = 0
  let counterSpace2Limit = n - row - 1
  let counterSpace2 = 0
  while (counterSpace1 < space1) {
    process.stdout.write('_')
    counterSpace1++
  }
  while (counterNum <= row) {
    process.stdout.write(String(counterNum + 1))
    counterNum++
  }
  while (counterNum2 < row) {
    process.stdout.write(String(row - counterNum2))
    counterNum2++
  }
  while (counterSpace2 < counterSpace2Limit) {
    process.stdout.write('_')
    counterSpace2++
  }
  process.stdout.write('\n')
}
