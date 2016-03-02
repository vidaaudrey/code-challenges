


function replaceFirstDigitRegExp(input) {
    for(var i = 0;i < input.length;i++){

        var test = input[i] + 1;
        
        if(isNaN(input[i]) === false && input[i] !==  " "){
            input[i] = "#";
            
            var results = input.slice(0,i) + "#" + input.slice(i+1,input.length);
            return results;
        }
    }
    return input;
}


console.log(replaceFirstDigitRegExp("There are 12 points"));