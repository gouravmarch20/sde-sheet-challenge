const merge = (arr, s, m, e) => {
   let length1 = m - s + 1;
   let length2 = e - m;

   let first = arr.slice(s, m + 1);
   let second = arr.slice(m + 1, e + 1);

   let index1 = 0;
   let index2 = 0;
   let mainIndex = s;

   while (index1 < length1 && index2 < length2) {
      if (first[index1] < second[index2]) {
         arr[mainIndex++] = first[index1++];
      } else {
         arr[mainIndex++] = second[index2++];
      }
   }

   while (index1 < length1) {
      arr[mainIndex++] = first[index1++];
   }
   while (index2 < length2) {
      arr[mainIndex++] = second[index2++];
   }
};

const mergeSort = (arr, s, e) => {
   if (s < e) {
      let m = Math.floor((s + e) / 2);

      mergeSort(arr, s, m);
      mergeSort(arr, m + 1, e);
      merge(arr, s, m, e);
   }
};

const arr = [3, 55, 99, 2, 12];
mergeSort(arr, 0, arr.length - 1);
console.log(arr);
