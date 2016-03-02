
var fizzBuzz = function(fizz, buzz,max){
    var test = max+1;
    var results = [];
    for(var i = 1; i<test;i++){
        if((i % fizz === 0) && (i % buzz === 0)){
            results.push(""+"F"+"B");
        } else if(i % fizz === 0){
            results.push(""+"F");
        } else if(i % buzz === 0){
            results.push(""+"B");
        } else {
            results.push(i);
        }
    }
    return results.join(" ");
};

console.log(fizzBuzz(3,5,10));