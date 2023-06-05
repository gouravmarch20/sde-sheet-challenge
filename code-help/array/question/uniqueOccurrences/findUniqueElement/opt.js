// 1 number is unique , else every item appears twice find unique

// ** xor : some number will auto cut
//0 ,1 -> 
//1  1 || 0 0 ==> 0

const arr = [7, 6, 7]
let ans = 0
for (let i = 0; i < arr.length; i++) {
  ans = ans ^ arr[i]
  // 0 ^ 7 => ans = 7
  // 7 ^ 6 => ans = 1
  //  1^ 7 => ans = 6
}
console.log(ans)
