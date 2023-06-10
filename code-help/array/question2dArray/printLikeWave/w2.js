// col length depend on no of items in ==> arr[rowIndexNo]
// row length no of item in arr ==> arr.length

function printWave(arr) {
   for (let i = 0; i < arr.length; i++) {
     if (i % 2 === 0) {
       for (let j = 0; j < arr[i].length; j++) {
         console.log(arr[i][j]);
       }
     } else {
       for (let j = arr[i].length - 1; j >= 0; j--) {
         console.log(arr[i][j]);
       }
     }
   }
 }
 
 // Example usage
 const arr = [[1, 2 , '=='], [4, 5,'##'], [7, 8 , '@@']];
 printWave(arr);
 