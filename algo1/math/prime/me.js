const isPrimeNo = (number) => {
  if (number >= 0 && number <= 2) {
    return true;
  }
  if (number % 2 === 0) {
    return false;
  }
  const numberHalf = Math.ceil(number / 2);

  for (let i = 2; i < numberHalf; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

console.log(isPrimeNo(4));
console.log(isPrimeNo(2));
console.log(isPrimeNo(9));