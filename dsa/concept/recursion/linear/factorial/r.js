// 5! => 5 * 4 *3 *2 *1

const fac = no => {
  if (no === 1) {
    return 1
  }
  return no * fac(no - 1)
}
console.log(fac(5))
