// You are given an array of integers ARR and an integer SUM.
// Your task is to find the number of subsets of the array ARR, such that the sum of their elements equals SUM

// Example:
// SubsetSum([1,2,3,4,5], 5) = 3
// These subsets are [1,4], [2,3] and [5].
// SubsetSum([1,2,3,4,-5], 0) = 3
// These subsets are [1,4,-5], [2,3,-5] and [].
// Note that a subset can be empty.

function SubsetSum(arr, sum, result) {
    if (sum === 0) return result; // found result 
    result = result || [];
    if (arr.length === 0) return result; // didn't find anything, just return []  

    // divide the prolem by (arr.slice(1))
    for (var i = 0; i < arr.length; i++) {
        if ()
    }

}
