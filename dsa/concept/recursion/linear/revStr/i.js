const revString = str => {
  if (str === '') return ''
//   TODO:
  else return revString(str.substr(1)) + str.charAt[0]
}
console.log(revString('hello'))

// function reverseString (str) {
//   if (str === '') {
//     return ''
//   } else return reverseString(str.substr(1)) + str.charAt(0)
// }
// console.log(reverseString('hello'))
