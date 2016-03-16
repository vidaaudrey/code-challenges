// finding a pair of elements in a given array which sum up to a given number.
// input [1, 4, 3, 5, 2]
// output 2: ([4, 3], [5, 2])
function findPairSum(arr, sum) {
    var low = 0,
        high = arr.length - 1,
        result = [];
    arr = arr.sort();
    //check the sum of low and high, and increment / decrement accordingly
    while (low < high) {
        var currentSum = arr[low] + arr[high];
        if (currentSum === sum) {
            result.push([arr[low], arr[high]]);
            low++;
            high--;
        } else if (currentSum > sum) {
            high--;
        } else {
            low++;
        }
    }
    return result;
}

var arr = [1, 4, 3, 5, 2]
var result = findPairSum(arr, 7)
console.log(result)

//output: [[2,5],[3,4]]
