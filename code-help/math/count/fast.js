var findNumbers = function (nums) {
  let c = 0;
  for (val of nums) {
    if (String (val).length % 2 === 0) {
      c++;
    }
  }

  return c;
};
console.log (findNumbers ([12, 345, 2, 6, 7896]));
