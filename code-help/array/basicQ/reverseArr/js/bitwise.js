function reverseArray (arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    //^ Swap elements using bitwise XOR --> each number ka bit change no 
    arr[left] ^= arr[right];
    arr[right] ^= arr[left];
     arr[left] ^= arr[right];

    left++;
    right--;
  }

  return arr;
}

// Example usage
const arr = [1, 2, 3, 4, 5];
const reversedArr = reverseArray (arr);
console.log (reversedArr);
