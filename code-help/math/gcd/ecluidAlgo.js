const gcd = (n1, n2) => {
  if (n1 === 0) {
    return n2
  }
  if (n2 === 0) {
    return n1
  }
  while (n1 !== n2) {
    if (n1 > n2) {
      n1 = n1 - n2
    } else {
      n2 = n2 - n1
    }
  }
  return n1
}
console.log(gcd(72, 24))
