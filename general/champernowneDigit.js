function champernowneDigit(n) {
    var results = "";
    var start = 1;
    for(var i = 0;i < n;i++){
        results = results + start;
        start += 1;
        if(results[n-1] !==undefined){
            return results[n-1];
        }
    }
    return results[n-1];
}

console.log(champernowneDigit(120));

