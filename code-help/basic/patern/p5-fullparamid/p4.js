const n = 4;
for (let row = 0; row < n; row++) {
  let j = 0;
  let k = 0;
  //   space ===> row - i
  space = n - row - 1;
  while (space) {
    process.stdout.write ('_');
    space--;
  }
  //   star ===> depend on row
  while (k <= row) {
    process.stdout.write ('*');
    k++;
  }

  process.stdout.write ('\n');
}
