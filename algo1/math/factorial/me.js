const factrial = (number) => {
  let result = 1;
  for (let i = number ; i > 0; i--) {
    result = result * i;
  }
  console.log(result);
};
factrial(10);
