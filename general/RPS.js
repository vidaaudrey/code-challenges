function getCombinations(chars) {
    chars = chars.split("");
  var result = [];
  var recurse = function(prefix, chars) {
    for (var i = 0; i < chars.length; i++) {
      result.push(prefix + chars[i]);
      recurse(prefix + chars[i], chars.slice(i + 1));
    }
  };
  recurse('', chars);
  return result;
}


console.log(getCombinations("abc"))