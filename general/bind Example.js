Function.prototype.bind = function (obj) {
    var fn = this;
    return function () {
        return fn.apply(obj);
    };
}


var user = {
  name: "peter"
}

var printName = function(){
  console.log(this.name)
}

var final = printName.bind(user)

final();

