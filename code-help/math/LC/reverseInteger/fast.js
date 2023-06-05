var reverse = function (x) {
  // toString remove negative sign 
  // math .sign we knew type of sign
  const revNo = x.toString().split('').reverse().join('')
  if (revNo > Math.pow(2, 31)) {
    return 0
  }
  return Math.sign(x) * revNo
}
console.log(reverse(12305))
