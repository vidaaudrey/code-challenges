// Degree of a vertex of the graph is the number of edges that connect to it, where an edge that connects to the vertex at both ends (a loop) is counted twice.

// Find degrees of all vertices in a given graph.

// Example

// for

// [[false, true, true ],
//  [true,  true, true ],
//  [true,  true, false]]
// output should be [2, 4, 2]

// [input] array.array.boolean matrix

// the incidence matrix of the undirected graph
// [output] array.integer

// an array of vertices degrees


function verticesDegrees(matrix) {
    var m = matrix.length-1
    var n = matrix[0].length-1
    var results = []
    for(var i = 0;i< m;i++){
        for(var j = 0; j < n;j++){
            if( matrix[m][n]){
                results.push(m)
            }
        }
    }
    return results


    function verticesDegrees(matrix) {
    var result = [];
    
    
    for(var i = 0; i < matrix.length; i++)
    {
        var r = 0
        for(var j = 0; j < matrix[0].length; j++)
        {
            if (matrix[i][j]) {r += i == j ? 2 : 1;}
        }
        result.push(r);
    }
    
    return result;
}

}
