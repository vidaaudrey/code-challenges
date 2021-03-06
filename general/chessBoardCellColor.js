// Given two cells on the standard chess board, determine whether they have the same color or not.

// Example

// for "A1" and "C3" output should be true
// for "A1" and "H3" output should be false
// [input] string cell1

// [input] string cell2

// [output] boolean

// true if both cells have the same color, false otherwise
function chessBoardCellColor(cell1, cell2) {
    var diffChar = cell1[0].charCodeAt(0) - cell2[0].charCodeAt(0);
    var diffNumber = cell1[1] - cell2[1]; 
    return (diffChar % 2 === 0 && diffNumber %2 === 0)  || (diffChar % 2 !== 0 && diffNumber %2 !== 0) 
}
