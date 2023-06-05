
// ! failure : array are always unique -> ref ==> string ko array mai store we can not compare
const str = 'aabbcbbaa'
// const str1 = '1234hitm'

let strPart1 = []
let strPart2 = []
for (let j = str.length - 1; j >= str.length / 2; j--) {
  strPart2.push(str[j])
}
for (let i = 0; i < (str.length - 1) / 2; i++) {
  strPart1.push(str[i])
}
// console.log(strPart1 == strPart2)
console.log(strPart1)
console.log(strPart2)
// clg
