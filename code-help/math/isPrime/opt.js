const isPrime = num => {
  let i = 2;
  while (i * i < num) {
    console.log (i);
    if (num % i === 0) {
      return false;
    }
    i++;
  }
  return true;
};

console.log (isPrime (29));
