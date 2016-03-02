var findValue = function(inputString) {
    var inputArray = inputString.split(" ").reverse();
    var operators = "* - + /";
    var numbers = [];
    var equationsArray = [];
    for (var i = 0; i < inputArray.length; i++) {
      if(!operators.includes(inputArray[i])){
        numbers.push(inputArray[i]);
      } else {
        
        equationsArray.push(inputArray[i]);
      }
    }
    var holder;
    console.log(numbers)
    while(equationsArray.length !== 0){
      var a = Number(numbers.pop());
      
      if(holder === undefined){
        var b = Number(numbers.pop());
        holder = doMath(a,equationsArray.pop(),b);

      } else{
        holder = doMath(a, equationsArray.pop(),holder);
      }
      
    }
    return holder;
};

var doMath = function(numberOne,operator,numberTwo){
  if(operator === "*"){
    return numberOne * numberTwo;
  }
  if(operator === "/"){
    return numberOne / numberTwo;
  }
  if(operator === "+"){
    return numberOne + numberTwo;
  }
  if(operator === "-"){
    return numberOne - numberTwo;
  }

};


var findIT = function(string, target) {
    var imput;
};



console.log(findValue("3141 * 5 / 9 * 26 / 5 * 3 - 5 * 8"));
console.log("should = 27182")
