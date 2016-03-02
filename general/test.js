function rockPaperPermutation (roundCount) {
  var choices = roundCount.split("");
  var output = [];
  var combo = [];
  var recurse = function(number) {
    if (roundCount.length === 0) {
        return;
    }
    if (number === roundCount.length) {
      output.push(combo.join(''));
      return;
    }
    for (var i = 0; i < choices.length; i++) {
      combo.push(choices[i]);
      recurse(number+1);
      combo.pop();
    }
  };
  
  recurse(0);
  return output;
}
console.log(rockPaperPermutation("abc"));