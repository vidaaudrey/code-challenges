// Solution

// The naive solution is to iterate on every possible combination of 4 numbers from arr until the required combination if found. Using 4 nested loop involves O(n4) time complexity and O(1) space complexity. This is quite inefficient.

// We can do better, if we look at all the pairs in arr, and then try to build the sum S from 2 different pairs.

// First, we iterate over all the possible pairs in arr with 2 nested loops and hash each pair by its sum. Then, for each pairSum in the pairs hash table, we look for its complement S - pairSum. When we find two pairs that sum up to S, we need to check that these pairs are drawn from 4 different indices in arr (in other words: that no number is used twice to reach the desired sum).



// function findArrayQuadCombination(arr, S):
//    if (arr == null OR S == null):
//       return null
//    n = length(arr)
//    if (n < 4):
//       return null
//    # hashing implementation language dependent:
//    pairHash = new HashTable()
//    for i from 0 to n-1
//       for j from i+1 to n-1
//          if !pairHash.isMapped(arr[i]+arr[j]):
//             pairHash.map(arr[i]+arr[j], [])
//          pairHash.get(arr[i]+arr[j]).push([i, j])

//    for pairSum in pairHash.getKeys()
//       if pairHash.isMapped(S - pairSum):
//          pairsA = pairHash.get(pairSum)
//          pairsB = pairHash.get(S - pairsSum)
//          combination = find4Uniques(pairsA, pairsB)
//          if (combination != null):
//             return combination
//    return null

// # Helper function.
// # Gets 2 arrays of sub-arrays of 2 numbers
// # Gets 4 unique numbers, from 2 sub-arrays of different arrays
// function find4Uniques(A, B):
//    lenA = length(A)
//    lenB = length(B)
//    for i from 0 to lenA-1:
//       for j from 0 to lenB-1:
//          if ( A[i][0] == B[j][0] OR A[i][1] == B[j][1] OR
//               A[i][0] == B[j][1] OR A[i][1] == B[j][0] ):
//             continue
//          else:
//             return [A[i][0], A[i][1], B[j][0], B[j][1]]
//    return null

// Time Complexity: Let n be the length or arr. Hashing all pairs in arr by their sum and iterating over all sums and their complements takes O(n2) time (n2 pairs and constant number of actions for each). Uniqueness check for all indices of the pairs of sums that adds up to S until a valid combination is found, is also O(n2) (checking at most n2 pairs with 4 comparisons for each). Overall: quadratic O(n2) time complexity.



[2, 18, 10, 9, 1, 5, 0]

[[2,18],[2,10],[9,1],[0,1]]


var quadCombin = function(arr, target){
   
   var results = [];
   
   for(var  i = 0;i<arr.length;i++){
      for(var j = i;j<arr.length;j++){
         results.push([arr[i],arr[j]])
      }
   }
   for(var m = 0;m < results.length;m++){
      if(results[m].reduce(function(a, b) {
        return a + b;
         })=== target){
         
         var finalResults = [];
         for(var n = 0;n<results[m];n++){
           finalResults.push(arr.indexOf(results[m][n][0]))
            finalResults.push(arr.indexOf(results[m][n][1]))
         }
         
         
         return results[m]
      }
   }
 return false
   
}