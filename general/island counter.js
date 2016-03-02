// Given a 2D matrix M, filled with either 0s or 1s, count the number of islands of 1s in M.
// An island is a group of adjacent values that are all 1s.
 // Every cell in M can be adjacent to the 4 cells that are next to it on the same row or column.


      

 var testCase = [
 [0,1,0,1,1],
 [0,0,1,1,1],
 [1,0,0,1,0],
 [0,1,1,0,0],
 [1,0,1,0,1]
 ];


var numIslands = function(grid) {
    var count = 0;
    
    var rows = grid.length;
    
    if(rows === 0){
        return count;
    }
    
    var cols = grid[0].length;
    
    if(cols === 0) {
        return count;
    }
    
    for(i = 0; i < rows; i++) {
        for(var j = 0; j < cols; j++) {
            if(grid[i][j] === 1) {
                count++;
                 walk(grid, i, j, rows, cols);
            }
        }
    }
    return count;
};

var walk = function(grid, x, y, rows, cols) {
    if(grid[x][y] === 1) {
        grid[x][y] = 0;    
    }

    if((x + 1) < rows && grid[x+1][y] === 1) {
        walk(grid, x + 1, y, rows, cols);    
    }
    
    if((x - 1) >= 0 && grid[x-1][y] === 1) {
        walk(grid, x - 1, y, rows, cols);    
    }
    
    if((y + 1) < cols && grid[x][y+1] === 1) {
        walk(grid, x, y + 1, rows, cols);    
    }
    
    if((y - 1) >= 0 && grid[x][y-1] === 1) {
        walk(grid, x, y - 1, rows, cols);    
    }
};

console.log(numIslands(testCase));



