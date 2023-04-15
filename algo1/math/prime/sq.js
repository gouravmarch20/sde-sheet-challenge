const isPrimeNo = (number) => {
  if (number < 2) {
    return false;
  }
// TODO: SQUARE ROOT SAI LESS --> DIV
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  } 

  return true;
};

console.log(isPrimeNo(4));
console.log(isPrimeNo(2));
console.log(isPrimeNo(9));
console.log(isPrimeNo(11));

// O(sqrt(n))  ==> time copmplexity 