var charFreq = function(inputString){
  var holder = {};
  
  for(var i = 0; i<inputString.length;i++){
    if(holder[inputString[i]] === undefined){
      holder[inputString[i]] = 1
    }else {
      holder[inputString[i]]++
    }
  }
  var results = []
  
  for(var item in holder){
    results.push([item,holder[item]])
  }
  
  var sorted = results.sort(function(a,b){
    return   b[1] - a[1]
  })
  
  return sorted;
}
