/* 
   _ _ _ 1 _ _ _
   _ _ 1 2 1 _ _
   _ 1 2 3 2 1 _
   1 2 3 4 3 2 1 
*/
const n = 4
for (let row = 0; row < n; row++) {
  let space = n - row - 1
  let j = 0
  let counter3 = row
  //*  print  1st triangle ==> space row mai relay
  while (space) {
    process.stdout.write(String('_'))
    space--
  }
  //   * print   ==> j mai relay
  while(j <= row){
   process.stdout.write(String(j + 1))
   j++
  }
    //   * print 3st triangle ==> row -1  mai relay
    while(counter3 ){
      process.stdout.write(String(counter3 ))
      counter3--
     }


  process.stdout.write('\n')
}
