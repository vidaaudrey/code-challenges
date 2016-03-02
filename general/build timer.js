//build timer
var start = 0;
function doSomething() {
    console.log(start);
    start++;
    setTimeout(doSomething, 1000);
}

setTimeout(doSomething, 1000);
