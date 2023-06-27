const setBitNegative = no => {
  //^ infinite loop ==> negative no MSB ALWAY 1 ADDING
  while (no != 0) {
    if (no & 1) {
      console.log ('-');
    }
    no >>= 1;
  }
};
console.log (setBitNegative (-2));
