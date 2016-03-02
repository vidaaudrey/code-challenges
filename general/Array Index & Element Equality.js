// The "Array Index & Element Equality" Problem

// Given an array of sorted distinct integers named arr, write a function that returns an index i in arr for which arr[i] = i or -1 if no such index exists.

// Implement the most efficient solution possible, prove the correctness of your solution and analyze its runtime complexity (in terms of n - the length of arr).

// Examples:

// Given arr = [-8,0,2,5] the function returns 2, since arr[2] = 2
// Given arr = [-1,0,3,6] the function returns -1, since no index in arr satisfies arr[i] = i


//  [0,2,3,5,7,10,11,13,50]
//  13
//time conplex O(n)
// O log 2n

arr[i] = i
arr[i] - i = 0

arr[i] --> diff[i] = arr[i]-i

var findTreeValue = function(arr){
   
   var mid = Floor(arr.length/2);
   if(arr[mid] - mid === 0){
      return mid;
   }
   if(arr.length === 1){
      return -1
   }
   if(arr[mid] - mid > 0){
      arr = arr.slice(mid,arr.length);
      return findTreeValue(arr);
   }
   if(arr[mid] - mid < 0){
      arr = arr.slice(0,mid);
      return findTreeValue(arr);
   }
   
}


var findTreeValue = function(arr,value){
   
   var mid = Floor(arr.length/2);
   if(value === arr[mid]){
      return mid;
   }
   if(arr.length === 1){
      return -1
   }
   if(value > arr[mid]){
      arr = arr.slice(mid,arr.length);
      return findTreeValue(arr,value);
   }
   if(value < arr[mid]){
      arr = arr.slice(0,mid);
      return findTreeValue(arr,value);
   }
   
}





var findIndexElement = function(inputArr){
   
   for(var i = 0; i < inputArr.length;i++){
      if(arr[i] === i){
         return i;
      }
   }
   return -1;
};





