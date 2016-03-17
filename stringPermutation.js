function stringPermutation(str) {
    if (str.length === 1) return [str];
    if (str.length === 0) return [];
    var result = [];
    var arr = str.split('');
    var subPerm, subResult, copy;

    // iterate through the arr, divide the problem by item and the rest of the array 
    // e.g. 'abc' => 'a' +  map(stringPermutation('bc')) => a + ['bc', 'cb'] => ['abc', 'acb'] ...
    arr.forEach(function(item, index) {
        copy = arr.slice();
        copy.splice(index, 1);

        subPerm = stringPermutation(copy.join(''))

        // console.log(arr, copy, index, item, subPerm)
        subResult = subPerm.map(function(subItem) {
            return item + subItem;
        });
        result = result.concat(subResult)
    });

    return result;
}

var str = 'abc'
var a = stringPermutation(str)
console.log(a)
