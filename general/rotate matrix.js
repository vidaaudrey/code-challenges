// rotate matrix

var testCase = [ 
[1, 2,3],
[1, 2,3],
[1,2,3]
 ];



var rotateMatrix = function(matrix) {
  var m = matrix.length;
  var n = matrix[0].length;
    
  var rotatedMatrix = [];
    
  for (var i = 0; i < n; i++) {
    rotatedMatrix[i] = [];
    
    for (var j = 0; j < m; j++) {
      rotatedMatrix[i][j] = matrix[m - 1 - j][i];
    }
  }
  return rotatedMatrix;
};

console.log(rotateMatrix(testCase));