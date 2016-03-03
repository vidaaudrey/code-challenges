// Find the smallest integer not less than the given limit which is divisible by at least one integer from the given array.

// Example

// firstMultiple2([2, 3, 4], 13) = 14

// [input] array.integer divisors

// array of positive integers
// [input] integer start

// positive integer
// [output] integer

// the smallest integer not less than start which is divisible by at least one integer from divisors



function firstMultiple2(divisors, start) {
    for (var i = start; ; i++) {
        for (var j = 0; j < divisors.length; j++) {
            if (i % divisors[j] === 0) {
                return i;
            }
        }
    }
}

