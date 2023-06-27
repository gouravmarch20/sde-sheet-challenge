/* 
   1 1 1 1
   2 2 2 2 
   3 3 3 3

   

*/

let i = 0
let j = 0
let n = 5
while (i < n) {
  j = 0
  let x = i

  //   console.log(i)
  while (j <= i) {
    process.stdout.write(( i + 1 - j).toString())
    //  console.log('443')
    x++
    j++
  }
  process.stdout.write('\n')

  i++
}
