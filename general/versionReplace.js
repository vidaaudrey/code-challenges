// Once upon a time there was a File. It was perfect and there was no need to change it. But one day a group of programmers came across it and decided to make a couple of changes by adding new symbols here and there. They ended up with two versions of the File. You think that the programmers didn't have enough time to ruin it completely, so you want to restore it.

// Your approach is as follows: if a string result can be obtained from both versions by removing some symbols in them, then it can be the File. You need to find the longest result possible.

// Example

// For version1 = 'CodeFigh#ts' and version2 = 'Co$deFig?hts' the output should be 'CodeFights'.

function theFile(version1, version2) {

  var len1 = version1.length,
      len2 = version2.length;
  var maxLen = [[]],
      take = [[]];
  for (var j = 0; j <= len2; j++) {
    maxLen[0].push(0);
    take[0].push(false);
  }
  for (var i = 1; i <= len1; i++) {
    maxLen.push([0]);
    take.push([false]);
    for (var j = 1; j <= len2; j++) {
      maxLen[i].push(0);
      take[i].push(false);
      if (version1[i - 1] == version2[j - 1]) {
        maxLen[i][j] =  maxLen[i-1][j-1] + 1;
        take[i][j] = true;
      } else {
        maxLen[i][j] = Math.max(maxLen[i - 1][j], maxLen[i][j - 1]);
      }
    }
  }

  var answer = [],
      i = len1,
      j = len2;
  while (i > 0 && j > 0) {
    if (take[i][j]) {
      i--;
      j--;
      answer.push(version1[i]);
    } else {
      if (maxLen[i - 1][j] > maxLen[i][j - 1]) {
        i--;
      } else {
        j--;
      }
    }
  }

  return answer.reverse().join('');
}

function chessBoardCellColor(cell1, cell2) {
    var b = +cell2[0].charCodeAt(0) - +cell1[0].charCodeAt(0);
    var c =  (+cell2[1] - +cell1[1])
    console.log(b, b%2 === 0, c)
        return  ( ( +cell2[0].charCodeAt(0) - +cell1[0].charCodeAt(0)) % 2 === 0 &&  (+cell2[1] - +cell1[1]) % 2 === 0) || ( +cell2[0].charCodeAt(0) - +cell1[0].charCodeAt(0)) % 2 !== 0 &&  (+cell2[1] - +cell1[1]) % 2 !== 0) ;
}

var a = chessBoardCellColor('A1', 'A2')
console.log(a)
