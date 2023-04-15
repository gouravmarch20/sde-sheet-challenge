const factrial = (number) => {
  let result = 1;
  for (let i = 2; i <= number; i++) {
    result = result * i;
  }
  return result;
};
// console.log(factrial(10));
console.log(factrial(5));
