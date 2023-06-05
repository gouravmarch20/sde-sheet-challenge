const str = 'abcde'
const reverseStr = (i, j, str) => {
   if (i > j) {
      return
   }
   const temp = str[i]
   str[i] = str[j]
   str[j] = temp
   i++;
   j--;
   // console.log(str);
   return reverseStr(i, j, str)
   // str = 
}
const arrStr = str.split("")
reverseStr(0, str.length - 1, arrStr)
console.log(arrStr);