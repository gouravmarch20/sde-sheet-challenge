const digit = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
let str = ''
const sayDigit = (no) => {
   if (no === 0) {
      return
   }
   const d = no % 10
   // console.log(d);
   no = Math.floor(no / 10)
   // console.log(digit[d]);
   sayDigit(no)
   str = str + " " + digit[d]
   console.log(str);
}

console.log(sayDigit(1234));