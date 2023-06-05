/* 
   D 
   C D
   B C D
   A B C D

*/

// trick : focus on flow of row ==> 4 , 3 , 2 , 1 ==> then col mai just increase by +1

let i = 0
let j = 0
let n = 4
while (i < n) {
  const charCode = 'A'.charCodeAt(0)

  j = 0
  let x = i

  while (j <= i) {
    process.stdout.write(
      String.fromCharCode(charCode + n - i + j - 1).toString()
    )
    //  console.log('443')
    x++
    j++
  }
  process.stdout.write('\n')

  i++
}
