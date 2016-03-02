//  * example:
//     spiralTraversal([
//       [1,2,3],
//       [4,5,6],
//       [7,8,9]
//     ]);
//     returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
//  */
 var input = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20]
];
// [ 1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12 ]

var result = []

   var left_right = function(m){
      var arr = m.shift();
      for(i in arr) 
          result.push(i);
   }
   var right_left = function(m){
      var arr = m.pop();
      for(i = m.length-1; i >= 0; i--) 
         result.push(arr[i]);
   }
   var top_bottom = function(m){
      for(i in m)
         result.push(m[i].pop());
   }
   var bottom_top = function(m){
      for(i = m.length-1; i >= 0; i--)
         result.push(arr[i].shift());
   }


function sprial(M){
   result = [];
   if(M.length === 0) return result;
   
   left_right(M);
   top_bottom(M);
   right_left(M);
   bottom_top(M);
   
   sprial(M);
}

sprial(input)

console.log(result);

