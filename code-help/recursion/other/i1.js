const result = (i, s) => {
  if (i === 0) {
    return 0;
  }

  return i + result (i - 1, s);
};
console.log (result (3, 0));
