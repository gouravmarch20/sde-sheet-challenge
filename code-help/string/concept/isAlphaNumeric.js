//**note>>  0 , 9 as string not number 
const isAlphaNumeric = str => {
  let tempStr = ''

  for (const val of str) {
    if (
      (val >= 'a' && val <= 'z') ||
      (val >= 'A' && val <= 'Z') ||
      (val >= '0' && val <= '9')
    ) {
      tempStr += val
    }
  }
  return tempStr
}

console.log(isAlphaNumeric('ab_a%@#  UI 123&&o*n'))
