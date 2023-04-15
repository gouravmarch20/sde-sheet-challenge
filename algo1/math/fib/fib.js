const fibSeries = (n) => {
  const fibArr = [0, 1];
  let num1 = 0;
  let num2 = 1;
  for (let i = 2; i < n; i++) {
    fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
  }
  console.log(fibArr);
};
fibSeries(7);
