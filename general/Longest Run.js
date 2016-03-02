// Longest Run


// Write a function that, given a string, finds the longest run of identical characters and returns an array containing the start and end indices of that run. 
// If there are two runs of equal length, return the first one. Return [0,0] for no runs.



// Examples
// Input  Output
// string:
// var testCaseOne ="abbbcc"
// [ 1, 3 ]
// string:
// "aabbc"  [ 0, 1 ]
// string:
// ""  [ 0, 0 ]
// string:
// "mississippi"  [ 2, 3 ]
// string:
// "abcdefgh"  [ 0, 0 ]

var testCaseOne ="mississippi"


var findLongestRun = function (sring){
  var stringArr = sring.split("");
  var result = [];
  var lengthOfRepeat;
  var flag = true;
  for(var i = 0; i < stringArr.length;i++){
    var start;
    var end;
    if(stringArr[i] === stringArr[i+1]){
      flag = true;
      start = i;
      for(var j = i+1; j< stringArr.length; j++){
        if(stringArr[i] !== stringArr[j]){
          if(flag){
            end = j-1;
            flag = false;
          }
          if(lengthOfRepeat === undefined || lengthOfRepeat < end - start){
            lengthOfRepeat = end - start;
            result = [];
            result.push(start);
            result.push(end);
            
          }
        }
      }
    }
  }

  return result;
};

console.log(findLongestRun(testCaseOne));

var findLongestRunTwo = function (sring){
  var stringArr = sring.split("");
  var searchLetter = "";
  var lengthOfRepeat = 0;
  var bestStart = 0;
  var bestEnd = 0;
  var startFlag = true;
  for(var i = 0; i < stringArr.length;i++){
    var start;
    var end;
    
    if(stringArr[i] === stringArr[i+1]){
      if(startFlag){
        searchLetter = stringArr[i];
        start = i;
      }

    }
    if(stringArr[i] !== searchLetter && startFlag !== true){
      

    }
    
    
    }

  return result;
};

console.log(findLongestRunTwo(testCaseOne))



