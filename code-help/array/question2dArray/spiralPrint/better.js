const spiralPrint = matrix => {
   let startRow = 0
   let startCol = 0
   let endRow = matrix.length - 1
   let endCol = matrix[0].length - 1
   let maxIteration = (endCol + 1) * (endRow + 1)
   let count = 0
   let res = []
   while (count < maxIteration) {
     // start row to end col
     for (let i = startRow; i <= endCol && count < maxIteration; i++) {
       res.push(matrix[startRow][i])
       count++
     }
     startRow++
     // start col to end col
     for (let i = startRow; i <= endRow && count < maxIteration; i++) {
       res.push(matrix[i][endCol])
       count++
     }
     endCol--
 
     // end col to  end row
     //! issue
     for (let i = endCol; i >= startCol && count < maxIteration; i--) {
       res.push(matrix[endRow][i])
       count++
     }
     endRow--
     //  end row to start row
     for (let i = endRow; i >= startRow && count < maxIteration; i--) {
       res.push(matrix[i][startCol])
       count++
     }
     startCol++
   }
   return res
 }
 
 console.log(
   spiralPrint([
     [1, 2, 3, 4, 5],
     [6, 7, 8, 9, 10],
     [11, 12, 13, 14, 15],
     [16, 17, 18, 19, 20],
     [21, 22, 23, 24, 25]
   ])
 )
 