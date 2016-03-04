// Transform a given sentence into a new one with dashes between each two consecutive letters.

// Example

// for 'aba caba' output should be 'a-b-a c-a-b-a'

// [input] string inputString

// a string of letters and spaces
// [output] string

// inputString with dashes inserted between any two consecutive letters


function insertDashes(inputString) {
    var test = inputString.split(" ");
    
    
    for(var i =0;i<test.length;i++){
        test[i] = test[i].split("").join("-");
        
    }
    
  return test.join(" ");
}


console.log(insertDashes("AAAAA AA"));
