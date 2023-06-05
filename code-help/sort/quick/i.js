let arr = [2, 4, 1, 6, 9, 9, 9, 9, 9, 9];

const partition = (arr, s, e) => {
  const pivotValue = arr[s]; // Pivot value
  let count = 0; // Counter for elements less than or equal to pivotValue

  for (let i = s + 1; i <= e; i++) {
    if (arr[i] <= pivotValue) {
      count++;
    }
  }

  // Place pivotValue at the correct position
  let pivotIndex = s + count;
  [arr[s], arr[pivotIndex]] = [arr[pivotIndex], arr[s]]; // Swap pivotValue with arr[pivotIndex]

  // Sort elements less than pivotValue to the left and elements greater than pivotValue to the right
  let i = s;
  let j = e;

  while (i < pivotIndex && j > pivotIndex) {
    while (arr[i] <= pivotValue) {
      i++;
    }

    while (arr[j] > pivotValue) {
      j--;
    }

    if (i < pivotIndex && j > pivotIndex) {
      [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap arr[i] with arr[j]
      i++;
      j--;
    }
  }

  return pivotIndex;
};

const qs = (arr, s, e) => {
  if (s >= e) {
    return;
  }

  let p = partition (arr, s, e); // Partition the array

  qs (arr, s, p - 1); // Sort the left partition
  qs (arr, p + 1, e); // Sort the right partition
};

qs (arr, 0, arr.length - 1);
console.log (arr);
