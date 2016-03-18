var foo = 'outside';

function logIt() {
    console.log(foo);
    var foo = 'inside';
    console.log(foo);
}
logIt(); // will log undefined, inside

console.log(.1 + .2) //0.30000000000000004
console.log(4..toString());
console.log('NaN', typeof(NaN));
