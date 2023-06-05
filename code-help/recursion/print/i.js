const printNo = (no) => {
   if (no === 0) {
      return
   }
   printNo(no - 1)
   console.log(no);

}
console.log(printNo(5));