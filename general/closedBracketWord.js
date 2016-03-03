// We call letter x a counterpart of letter y, if x is the ith letter of the English alphabet, and y is the (27 - i)th for each valid i (1-based). For example, 'z' is the counterpart of 'a' and vice versa, 'y' is the counterpart of 'b', and so on.

// A properly closed bracket word (PCBW) is such a word that its first letter is the counterpart of its last letter, its second letter is the counterpart of its last by one letter, and so one.

// Determine if the given word is a PCBW or not.

// Example:

// ClosedBracketWord("abiryz") = true
// 'a' is the counterpart of 'z';
// 'b' <-> 'y'
// 'i' <-> 'r'
// ClosedBracketWord("aibryz") = false
// ClosedBracketWord("abitryz") = false
// [input] string word

// A string consisting of lowercase letters, 0 ≤ len(word) ≤ 20.
// [output] boolean

// true if word is a PCBW, false otherwise.

function ClosedBracketWord(word) {
    if (word.length % 2 !== 0) return false;
    for(var i  = 0; i < word.length /2; i++){
        var current = word[i];
        var counterPart= word[word.length - i - 1];
        var curIndexDiff = getLetterMiddleDiffByChar(current);
        var counterDiff = getLetterMiddleDiffByChar(counterPart);
        if(curIndexDiff !== counterDiff) {
            return false;
        }
    }
    return true;
}

function getLetterMiddleDiffByChar(charr){
    var index = charr.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    return Math.abs(index - 13.5);
}

var a = ClosedBracketWord('abitryz');
console.log(a)
