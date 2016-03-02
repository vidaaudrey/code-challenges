// Given a 2D array (matrix) named M, print all items of M in a spiral order, clockwise.
// For example:

// M  =  1   2   3   4   5
//        6   7   8   9  10
//       11  12  13  14  15
//       16  17  18  19  20

// The clockwise spiral print is:  1 2 3 4 5 10 15 20 19 18 17 16 11 6 7 8 9 14 13 12

// function spiralMatrixPrint(M):
//    topRow = 0
//    btmRow = m-1
//    leftCol = 0
//    rightCol = n-1

//    while (topRow <= btmRow AND leftCol <= rightCol):
//       # print the next top row
//       for i from leftCol to rightCol:
//          print M[topRow][i]
//       topRow++

//       # print the next right hand side column
//       for i from topRow to btmRow:
//          print M[i][rightCol]
//       rightCol--

//       # print the next bottom row
//       if (topRow <= btmRow):
//          for i from rightCol to leftCol:
//             print M[btmRow][i]
//          btmRow--

//       # print the next left hand side column
//       if (leftCol <= rightCol):
//          for i from btmRow to topRow:
//             print M[i][leftCol]
//          leftCol++



var input = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20]
];

var printSpiral = function(matrix) {

    var results = [];
    var topRow = 0;
    var bottomRow = matrix.length-1;
    var leftCol = 0;
    var rightCol = matrix[0].length -1;

    while (topRow <= bottomRow && leftCol <= rightCol) {

        // go right
        for (var i = leftCol; i <= rightCol; i++) {
            results.push(matrix[topRow][i]);
        }
        topRow++;
        // go down
        for (var j = topRow; j <= bottomRow; j++) {
            results.push(matrix[j][rightCol]);
        }
        rightCol--;
        //go left
        if (topRow <= bottomRow) {
            for (var k = rightCol; k >= leftCol; k--) {
                results.push(matrix[bottomRow][k]);
            }
            bottomRow--;
        }
        // go up
        if(leftCol <= rightCol){
            for(var m = bottomRow;m >= topRow;m--){
                results.push(matrix[m][leftCol]);
            }
            leftCol++;
        }
    }
    return results;
};

console.log(printSpiral(input));
