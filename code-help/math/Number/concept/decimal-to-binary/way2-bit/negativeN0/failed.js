//TODO:
const decimalToBinary = num => {
  const binaryDigits = [];

  // Convert the absolute value of the number to binary
  let absoluteValue = Math.abs(num);
  while (absoluteValue !== 0) {
    const bit = absoluteValue & 1;
    binaryDigits.unshift(bit);
    absoluteValue >>= 1;
  }

  // Apply two's complement if the number is negative
  if (num < 0) {
    for (let i = 0; i < binaryDigits.length; i++) {
      binaryDigits[i] = binaryDigits[i] === 0 ? 1 : 0;
    }
  }

  return binaryDigits.join('');
};

console.log(decimalToBinary(-9));
 // Output: 11111111111111111111111111110111
